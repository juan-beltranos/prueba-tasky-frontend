import api from '@/utils/api'; 
import { User } from '@/types/types';

export const fetchUsers = async (): Promise<User[]> => {
    const response = await api.get('/users'); 
    return response.data;
};