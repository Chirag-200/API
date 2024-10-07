import React, {useEffect, useState} from 'react'
import {FlatList , Text,View} from 'react-native'

const GetFetch = () => {

  const [data,setData] = useState([])

  const getAPIData = async () => {
    const url = "http://10.0.60.230:3000/users"
    let result = await fetch(url)
    result = await result.json()
    console.log(result)
    setData(result)
    // console.log(data)
  }

  useEffect ( ()=>{
    getAPIData()
  },[])
  return (
  //   <View>
  //     <Text> Hii </Text>
  //     { data.length ?
  //     data.map((data)=>
  //     <View style = {{padding: 10, borderBottomWidth:2, borderColor: '#ccc'}}>
  //     <Text style = {{fontSize:30, backgroundColor: '#ddd'}}>id : {data.id}</Text> 
  //     <Text style = {{fontSize:20}}> {data.title}</Text>
  //     <Text style = {{fontSize:20}}>{data.body}</Text>
  //     <Text style = {{fontSize:20}}>{data.userId}</Text>
      
  //     </View>
  //     ):
  // null
  //     }
  //   </View>

  <View>

    {
      data.length ? 
      <FlatList
      data = {data}
      renderItem={({item})=>
      <View style ={{padding: 10,borderBottomWidth: 2 , borderBottomColor: 'red', borderBottomEndRadius: 20, borderBottomStartRadius: 20}}>
        <Text style = {{backgroundColor: 'lightgrey'}}> {item.id}</Text>
        <Text> {item.name}</Text>
        <Text> {item.age}</Text>

         </View>}
      
      /> :
      null
    }
  </View>

  )
}

export default GetFetch