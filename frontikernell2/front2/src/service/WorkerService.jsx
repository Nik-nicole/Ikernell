import { data } from "autoprefixer";
import axios from "axios";

const API_URL ='http://localhost:8080/api/workers'

const getWorker = async () =>{
    try {
        const response = await axios.get(API_URL);
        console.log('getWorker response:', response.data);
        return response.data;
    } catch (error) {
        console.error('error fetching Workers', error);
        throw error;
        
    }
}

const createWorker = async (workerData) => {
    try {
        const response = await axios.post(API_URL, workerData);
        console.log('createWorker response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating Worker:', error.message);
        if (error.response) {
            console.error('Error response:', error.response.data);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
        throw error;
    }
};

const deleteWorker = async (id) =>{
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        console.log('deleteWorker response: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting course', error);
        throw error;
        
    }
}

export default{
    getWorker,
    createWorker,
    deleteWorker
};