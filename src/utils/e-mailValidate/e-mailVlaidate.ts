export const eMailValidate = (email: string) => {
  const eMailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (eMailRegex.test(email) && email.length >= 10 && email.length <= 50) {
    return true;
  } else {
    return false;
  }
};
