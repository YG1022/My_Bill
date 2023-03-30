import repeatabilityCheck from "./repeatabilityCheck";

const userSignIn = async (form): Promise<boolean> => {
  const { accountname, password } = form.getFieldsValue();
  const { nameCheck } = repeatabilityCheck(accountname, "", "");

  const { data, error } = await nameCheck;

  if (error) {
    console.log(error);
    return false;
  }

  return password === data[0]?.password;
};

export default userSignIn;
