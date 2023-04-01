import createProfile from "../../../services/createProfile";
import { ROUTES } from "../../../constants/routes";
import { useNavigate } from "react-router-dom";
import repeatabilityCheck from "../../../services/repeatabilityCheck";
import getProfile from "../../../services/getProfile";
import dayjs from "dayjs";
import updateProfile from "../../../services/updateProfile";

const useEditProfiles = form => {
  const navigateTo = useNavigate();
  const uuid = localStorage.getItem("uuid");
  const signInFlag = localStorage.getItem("signedIn");

  let [emailData, emailError, phoneData, phoneError] = [[], null, [], null];

  const editProfiles = async () => {
    const { email, phonenumber, birthday, ...extraData } = form.getFieldsValue();
    const { emailCheck, phoneCheck, emailCheckWithUuid, phoneCheckWithUuid } = repeatabilityCheck(
      "",
      email,
      phonenumber,
    );

    const checkFunc = async (emailCheckFunc, phoneCheckFunc) => {
      const { data: emailDataTemp, error: emailErrorTemp } = uuid
        ? await emailCheckFunc(uuid)
        : await emailCheckFunc();
      const { data: phoneDataTemp, error: phoneErrorTemp } = uuid
        ? await phoneCheckFunc(uuid)
        : await phoneCheckFunc();
      [emailData, emailError, phoneData, phoneError] = [
        emailDataTemp,
        emailErrorTemp,
        phoneDataTemp,
        phoneErrorTemp,
      ];
    };

    if (signInFlag === "true" && uuid) {
      await checkFunc(emailCheckWithUuid, phoneCheckWithUuid);
    } else {
      await checkFunc(emailCheck, phoneCheck);
    }

    if (emailData.length > 0 || phoneData.length > 0) {
      if (emailData.length > 0) {
        form.setFields([
          {
            name: "email",
            errors: ["This email has been used. Please choose another email."],
          },
        ]);
      }
      if (phoneData.length > 0) {
        form.setFields([
          {
            name: "phonenumber",
            errors: ["This phone number has been used. Please choose another phone number."],
          },
        ]);
      }
    } else if (emailError || phoneError) {
      alert("Something wrong happened. Please try again later.");
      return;
    } else {
      const postData = {
        birthday: birthday?.format("YYYY/MM/DD"),
        email,
        phonenumber,
        ...extraData,
      };

      (signInFlag === "true" && uuid) ? await updateProfile(uuid, postData) : await createProfile(postData);
      navigateTo(ROUTES.home);
    }
  };

  const skipProfiles = async () => {
    await createProfile(form.getFieldsValue());
  };

  const queryProfiles = () => {
    getProfile(uuid).then(({ data }) => {
      const { real_name, prefix, phone_number, gender, email, birthday } = data[0];
      form.setFieldsValue({
        realname: real_name,
        prefix,
        phonenumber: phone_number,
        gender,
        email,
        birthday: birthday ? dayjs(birthday, "YYYY/MM/DD") : null,
      });
    });
  };

  return { editProfiles, skipProfiles, queryProfiles };
};

export default useEditProfiles;
