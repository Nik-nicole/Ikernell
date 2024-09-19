import axios from "axios";

const API_URL = 'http://localhost:8080/api/project/add';

const GetAllProject = async() => {
try{
    const response = await axios.get(API_URL);
    console.log('getprojects respose: ', response.data);
    return response.data; 
}catch(error){
    console.error('Error fetching projects: ', error);
    throw
}



}

export default {
    GetAllProject
}
    ;