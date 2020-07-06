import * as WebBrowser from "expo-web-browser";

export const openLink = async (link) => {
  await WebBrowser.openBrowserAsync(link);
};
