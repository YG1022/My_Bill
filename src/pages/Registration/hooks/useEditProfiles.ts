import createProfile from '../../../services/createProfile';
import { ROUTES } from '../../../constants/routes';
import { useNavigate } from 'react-router-dom';
import repeatabilityCheck from '../../../services/repeatabilityCheck';

const useEditProfiles = (form) => {
  const navigateTo = useNavigate();

  const finilizeProfiles = async () => {
    const { email, phonenumber, birthday, ...extraData } = form.getFieldsValue();
    const { emailCheck, phoneCheck } = repeatabilityCheck('', email, phonenumber);

    const { data: emailData, error: emailError } = await emailCheck();
    const { data: phoneData, error: phoneError } = await phoneCheck();

    if (emailData.length > 0 || phoneData.length > 0) {
      if (emailData.length > 0) {
        form.setFields([
          {
            name: 'email',
            errors: ['This email has been used. Please choose another email.'],
          },
        ]);
      }
      if (phoneData.length > 0) {
        form.setFields([
          {
            name: 'phonenumber',
            errors: ['This phone number has been used. Please choose another phone number.'],
          },
        ]);
      }
    } else if (emailError || phoneError) {
      alert('Something wrong happened. Please try again later.');
      return;
    } else {
      const postData = {
        birthday: birthday?.format('YYYY/MM/DD'),
        email,
        phonenumber,
        ...extraData,
      };

      await createProfile(postData);
      navigateTo(ROUTES.home);
    }
  };

  const skipProfiles = async () => {
    await createProfile(form.getFieldsValue());
  };

  return { finilizeProfiles, skipProfiles };
};

export default useEditProfiles;