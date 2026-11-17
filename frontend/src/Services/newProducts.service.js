import { resolveProductImages } from "./productImages";
import { getApiUrl } from "./apiUrl";

export const fetchNewProducts = async () => {
  try {
    const res = await fetch(`${getApiUrl()}/api/new-products`);
    if (!res.ok) {
      throw new Error(`fetchNewProducts status ${res.status}`);
    }
    const body = await res.json();
    if (!body.success) {
      throw new Error(body.message || "Failed to retrieve new products");
    }
    return resolveProductImages(body.data);
  } catch (error) {
    console.error("fetchNewProducts error", error);
    return [];
  }
};
