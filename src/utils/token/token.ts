const APP_KEY = 'laliga-app-';

export const saveToken = (token: string) => {
  localStorage.setItem(APP_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(APP_KEY);
};

export const getToken = () => localStorage.getItem(APP_KEY);
