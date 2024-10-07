import React, { useEffect } from 'react';
import axios from 'axios';
import { Text, View, Button } from 'react-native';


    
    const PatchAxios = () => {
        useEffect(() => {
            const updateUser = async () => {
                try {
                    const response = await axios.patch('http://10.0.60.200:3000/users/4e18', {
                        name: 'updated PATCH',

                    });
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
    
            updateUser();
        }, []); 
    

    return (
        <View>
            <Text> HIIII </Text>
        </View>
    );
};

export default PatchAxios;
