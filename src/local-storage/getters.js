import { USER_STORAGE } from '@/local-storage/types';

export const getUserStorage = () => {
   return JSON.parse(localStorage.getItem(USER_STORAGE));
};


