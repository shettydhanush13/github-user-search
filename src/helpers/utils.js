import { constants } from "../config/constants";

const { localStorageKey } = constants;

export const saveToHistory = (username, userInfo) => {
    const searchHistory = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const item = { term: username, result: userInfo };
    searchHistory.push(item);
    localStorage.setItem(localStorageKey, JSON.stringify(searchHistory));
};

export const getFromHistory = () => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
};

export const clearHistoryData = () => localStorage.clear(localStorageKey);
