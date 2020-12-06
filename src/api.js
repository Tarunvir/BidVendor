import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createProduct = (payload) => api.post(`/product`, payload);
export const getProducts = () => api.get(`/products`);
export const updateProductById = (id, payload) =>
  api.put(`/product/${id}`, payload);
// export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getProductById = (id) => api.get(`/product/${id}`);

const apis = {
  createProduct,
  getProducts,
  updateProductById,
  // deleteMovieById,
  getProductById,
};

export default apis;
