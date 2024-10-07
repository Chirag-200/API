import React, { useEffect } from 'react';
import axios from 'axios';
import { Text, View, Button } from 'react-native';

const DeleteAxios = () => {
    useEffect(() => {
        const deleteUser = async () => {
            try {
                const response = await axios.delete('http://10.0.60.200:3000/users/66f4');
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        deleteUser();
    }, []);

    return (
        <View>
            <Text> HIIII </Text>
        </View>
    );
};

export default DeleteAxios;
