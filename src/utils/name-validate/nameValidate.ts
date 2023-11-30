export const nameValidate = (name: string) => {
  const regex = /[0-9+-,!@#$%^&*();\\/|<>\"']/g;
  for (let i = 0; i < name.length; i++)
    if (
      (name[i] === name[i + 1] && name[i] === name[i + 2]) ||
      regex.test(name)
    ) {
      return false;
    } else if (name.length >= 2 && name.length <= 50) {
      return true;
    } else {
      return false;
    }
};
