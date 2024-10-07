

import React, { useEffect, useState } from 'react'
import {Text, View, Modal , Button, FlatList, TextInput} from 'react-native'


const PutFetch = () => {
    const [data,setData] = useState(undefined)
    const [modal,setModal] = useState(false)
    const [name,setName] = useState(undefined)
    const [id,setId] = useState()
    const getData = async () => {
        const url = "http://10.0.60.230:3000/users"
        let result = await fetch(url)
        result = await result.json()
        // console.log(result)
        setData(result)

    }
    

    const update = (item) =>{
        console.log("data ",item)
        setModal(true)
        setName(item.name)
        setId(item.id)

    }

    const PatchFetch = async () =>{
        const result = await fetch(`http://10.0.60.230:3000/users/${id}`,{
            method: "PUT",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                name
            }),
            // result = await result.json()

        })
        setModal(false)
        getData()
        


    }

    useEffect(()=>{
        getData()
    
    },[])
    return (
       <View>
        <View>
            <FlatList 
            data = {data}
            renderItem=
            { 
                ({item})=>
                    <View style = {{flexDirection: 'row', justifyContent:"space-evenly"}}>
                    <Text style = {{margin: 20, fontSize: 20}}>{item.name} </Text>
                <Button title = "update" onPress={()=>update(item)}/>

                
                </View>
            
            }


            
            
            />

        </View>

        <Modal visible = {modal}>
            <TextInput placeholder = "Enter" style = {{borderWidth: 2}} value = {name} onChangeText={text => setName(text)}></TextInput>
            <Button title="close "  onPress={()=>setModal(false)}/>
            <Button title = "update" onPress = {() => PatchFetch()}/> 
        </Modal>

       </View> 
    )
}

export default PutFetch