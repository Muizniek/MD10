export const passwordValidate = (password: string) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  if (passwordRegex.test(password)) {
    return true;
  } else {
    return false;
  }
};
