const API = import.meta.env.VITE_API_URL;

export const getProducts = async (category) => {
  const res = await fetch(`${API}/api/products?category=${category}`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export const getFeaturedProducts = async () => {
  const res = await fetch(`${API}/api/products/featured`);

  if (!res.ok) {
    throw new Error("Failed to fetch featured products");
  }

  return res.json();
};