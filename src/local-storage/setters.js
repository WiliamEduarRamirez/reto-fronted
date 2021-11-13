import { USER_STORAGE } from '@/local-storage/types';

export const setUserStorage = (value) => {
   localStorage.setItem(USER_STORAGE, JSON.stringify(value));
};
