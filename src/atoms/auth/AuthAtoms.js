import { atom } from 'recoil';

export const refeshState = atom({
    key: "refreshState",
    default: true
});

export const authenticatedState = atom({
    key: "authenticatedState",
    default: false
});