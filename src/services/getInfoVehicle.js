import axios from "axios";

const URL = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros/marcas",
});

export const getBrands = async () => {
  try {
    const response = await URL.get("/");
    return response;
  } catch (error) {
    return error;
  }
};

export const getModels = async (brand) => {
  try {
    const response = await URL.get(`/${brand}/modelos`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getYear = async (brand, model) => {
  try {
    const response = await URL.get(`/${brand}/modelos/${model}/anos`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getValue = async (brand, model, year) => {
  try {
    const response = await URL.get(`/${brand}/modelos/${model}/anos/${year}`);
    return response;
  } catch (error) {
    return error;
  }
};

export default getBrands;
