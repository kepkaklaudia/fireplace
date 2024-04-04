export const validateEmail = (value: string): boolean | string => {
  if (/^[\w\.-]+@[\w\.-]+\.\w+$/.test(value) || value.trim() === "") {
    return true;
  }
  return "Invalid e-mail address";
};
