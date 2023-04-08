import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV();

export enum STORAGE_KEYS {
  USER_SEEN_ONBOARDING = 'user-seen-onboarding'
}
