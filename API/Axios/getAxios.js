
import React, { useEffect } from 'react';
import axios from 'axios';
import {Text , View , Button} from 'react-native'



const GetAxios = () => {

    // const API = 

  

//    const getAPIData = async () => {
//     const response = await axios.get(API)
//         console.log("resp ------> ",response.data)
//     // try {

//     //     console.log(response.data)
        
//     // } catch (error) {
//     //     console.log(error)
        
//     // }
//    }

// axios
//   .get(API)
//   .then(function (response) {
//     console.log(response);
//   });
   

async function getApiData()
{
    const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(result.data)
}


   useEffect(()=>{
    getApiData()
   },[])  


    return (
        <View>
            <Text > Hello </Text>

        </View>
    )
}

export default GetAxios