import { USER_STORAGE } from '@/local-storage/types';

export const removeUserStorage = () => {
   return localStorage.removeItem(USER_STORAGE);
};
