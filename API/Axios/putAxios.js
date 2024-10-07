import React, { useEffect } from 'react';
import axios from 'axios';
import { Text, View, Button } from 'react-native';

const PutAxios = () => {
    useEffect(() => {
        const updateUser = async () => {
            try {
                const response = await axios.put('http://10.0.60.200:3000/users/d375', {
                "name": "updated PUT "
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        updateUser();
    }, []); // Empty dependency array means this runs once when the component mounts.

    return (
        <View>
            <Text> HIIII </Text>
        </View>
    );
};

export default PutAxios;
