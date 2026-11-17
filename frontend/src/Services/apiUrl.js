export const getApiUrl = () => {
  const configuredUrl = process.env.REACT_APP_API_URL;
  const apiUrl =
    (configuredUrl && configuredUrl.trim()) ||
    (process.env.NODE_ENV === "development" ? "http://localhost:5000" : "");

  if (!apiUrl) {
    throw new Error(
      "REACT_APP_API_URL is not configured. Set it to the deployed backend URL.",
    );
  }

  return apiUrl.replace(/\/+$/, "");
};
