import { useNavigate } from "react-router-dom";
import userSignIn from "../../../services/userSignIn";
import { ROUTES } from "../../../constants/routes";

const useSignIn = form => {
  const navigateTo = useNavigate();

  const signIn = async () => {
    const flag = await userSignIn(form);

    localStorage.setItem("signedIn", flag.toString());

    if (!flag) {
      form.setFields([
        {
          name: "password",
          errors: ["Wrong user name or password, please try again!"],
        },
      ]);
      return;
    }

    setTimeout(() => {
      if (flag) {
        navigateTo(ROUTES.home);
      }
    }, 1000);
  };

  return { signIn };
};

export default useSignIn;
