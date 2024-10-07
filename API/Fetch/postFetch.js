
import React, { useEffect, useState } from 'react'
import {View,Text, Button, TextInput, TouchableOpacity} from 'react-native'


const GetPost = () => {
    // const [data,setData] = useState([])

        
    const [name,setName] = useState('')
    const [age,setAge] = useState(0)


    // const [nameError,setNameError] = useState(false)
    // const [ageError,setAgeError] = useState(false)


    const PostAPIData = async () => {
        const data = {
            "name":"abcdef",
            "age": "2"
            }
      const url = "http://10.0.60.230:3000/users"
      let result = await fetch(url,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body : JSON.stringify(data)
      })
      result = await result.json()
     console.log(result)

      
    }












    const saveAPIData = async () => {
        // console.log(name)
        // console.log(age)

        const url = "http://10.0.60.230:3000/users"
        const result = await fetch(url,{
            method: 'POST',
            header: {"Content-Type": "application/json"},
            body: JSON.stringify({name,age})
        });


    }
   
  
    useEffect ( ()=>{
      PostAPIData()
    },[])
    // {console.log(data)}
   
    return (
        <View style = {{flex:1}}> 
        {/* <Button title= "Add" onPress = {PostAPIData}/> */}
        {/* <Text onPress={console.log('yes')}} style = {{fontSize: 35}}> ADD  </Text> */}

        <TextInput placeholder='Enter Name '  
        onChangeText={(text) => setName(text) }
        value = {name}
        
        
        
        
        style = {{
            fontSize: 23,
            borderWidth: 2,
            margin: 20,

            
        }}/>
        <TextInput placeholder='Enter Age '  
        onChangeText ={(text) => setAge(text)}
        value = {age}
        
        style = {{
            fontSize: 23,
            borderWidth: 2,
            margin: 20,

            
        }}/>

        <TouchableOpacity  style = {{alignItems: 'center'}} onPress = {saveAPIData}>
            <Text style = {{fontSize: 25, color: 'blue'}}> ADD </Text>
        </TouchableOpacity>
       
        </View>
    )
}

export default GetPost