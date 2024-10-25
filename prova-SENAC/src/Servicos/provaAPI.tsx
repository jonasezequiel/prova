import axios from 'axios';
import { Usuario } from '../Interfaces/Usuario';

const apiClient = axios.create({
    baseURL: 'https://scholarspace-254954748843.southamerica-east1.run.app',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const CriarUsuario = async (dadosUsuario: Usuario) => {
    try {
        const response = await apiClient.post('/User', dadosUsuario);
        return response.data; 
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error; 
    }
};


