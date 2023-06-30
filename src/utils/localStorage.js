export const getFromLocalStorage = (key) => localStorage.getItem(key);

export const saveInLocalStorage = (key, value) =>
  localStorage.setItem(key, value);
