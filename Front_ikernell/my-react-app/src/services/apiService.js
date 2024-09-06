// src/services/apiService.js
import axios from 'axios';

// Configura la URL base de tu API REST
const API_URL = 'http://localhost:8080/api'; // Ajusta esta URL según la configuración de tu API

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getData = async () => {
  try {
    const response = await apiService.get('/endpoint'); // Cambia '/endpoint' por la ruta de tu API
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Agrega más funciones según sea necesario para interactuar con tu API
