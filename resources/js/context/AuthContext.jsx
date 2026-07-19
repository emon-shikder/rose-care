import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('auth_token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchUser();
        } else {
            delete axios.defaults.headers.common['Authorization'];
            setLoading(false);
        }
    }, [token]);

    const fetchUser = async () => {
        try {
            const response = await axios.get('/api/user');
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user', error);
            logout();
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        const response = await axios.post('/api/login', { email, password });
        const { access_token, user: userData } = response.data;
        
        localStorage.setItem('auth_token', access_token);
        setToken(access_token);
        setUser(userData);
        
        return response.data;
    };

    const logout = async () => {
        try {
            if (token) {
                await axios.post('/api/logout');
            }
        } catch (error) {
            console.error('Error logging out', error);
        } finally {
            localStorage.removeItem('auth_token');
            setToken(null);
            setUser(null);
            delete axios.defaults.headers.common['Authorization'];
        }
    };

    const value = {
        user,
        token,
        loading,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
