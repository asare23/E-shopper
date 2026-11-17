import { resolveProductImages } from "./productImages";
import { getApiUrl } from "./apiUrl";

export const fetchAllProducts = async () => {
  try {
    const res = await fetch(`${getApiUrl()}/api/products`);
    if (!res.ok) {
      throw new Error(`fetchAllProducts status ${res.status}`);
    }
    const body = await res.json();
    if (!body.success) {
      throw new Error(body.message || "Failed to retrieve products");
    }
    return resolveProductImages(body.data);
  } catch (error) {
    console.error("fetchAllProducts error", error);
    return [];
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const res = await fetch(
      `${getApiUrl()}/api/products/category/${category}`,
    );
    if (!res.ok) {
      throw new Error(`fetchProductsByCategory status ${res.status}`);
    }
    const body = await res.json();
    if (!body.success) {
      throw new Error(
        body.message || `Failed to retrieve ${category} products`,
      );
    }
    return resolveProductImages(body.data);
  } catch (error) {
    console.error(`fetchProductsByCategory error for ${category}`, error);
    return [];
  }
};
