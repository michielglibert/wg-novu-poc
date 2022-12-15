import { NovuConfiguration } from "../types/Novu";

const NOVU_SETTINGS = "NOVU_SETTINGS";

export const storeConfig = (configuration: NovuConfiguration) => {
  if (typeof window !== "undefined") {
    const storageItem = JSON.stringify(configuration);
    return localStorage.setItem(NOVU_SETTINGS, storageItem);
  }
};

export const loadConfig = (): NovuConfiguration | undefined => {
  if (typeof window !== "undefined") {
    const storageItem = localStorage.getItem(NOVU_SETTINGS);
    if (storageItem) return JSON.parse(storageItem);
    return undefined;
  }
};
