import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const getCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des catégories:', error);
        throw error;
    }
};

export const getCategoryBySlug = async (slug) => {
    try {
        const response = await axios.get(`${API_URL}/categories/${slug}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération de la catégorie ${slug}:`, error);
        throw error;
    }
};

export const getProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des produits:', error);
        throw error;
    }
};

export const getProductBySlug = async (slug) => {
    try {
        const response = await axios.get(`${API_URL}/products/${slug}`);
        return response.data;
    } catch (error) {
        console.error(`Erreur lors de la récupération du produit ${slug}:`, error);
        throw error;
    }
};
