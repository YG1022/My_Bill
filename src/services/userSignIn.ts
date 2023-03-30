import repeatabilityCheck from "./repeatabilityCheck";

const userSignIn = async (form): Promise<boolean> => {
  const { accountname, password } = form.getFieldsValue();
  const { nameCheck } = repeatabilityCheck(accountname, "", "");

  const { data, error } = await nameCheck();

  if (error) {
    console.log("Error: " + error);
    return false;
  }

  localStorage.setItem("uuid", data[0]?.uuid);

  return password === data[0]?.password;
};

export default userSignIn;
