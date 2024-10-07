





import React, { useEffect } from 'react';
import axios from 'axios';
import {Text , View , Button} from 'react-native'


const PostAxios = () => {

    axios.post('http://10.0.60.200:3000/users', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log("done");
      })
      .catch(function (error) {
        console.log(error);
      });

    return (
        <View>
            <Text> HIIII </Text>
        </View>
    )
}

export default PostAxios