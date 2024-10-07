
import React , {useEffect, useState} from 'react'
import {ScrollView, Text , View} from 'react-native'


const DeleteFetch = () => {

    const [data,setData] = useState([])
    const getAPIData = async () => {
        const url = "http://10.0.60.230:3000/users"
        let result = await fetch(url)
        result = await result.json()
        // console.log(result)
        setData(result)

      
      }


      const deleteUser = async(id) => {
        const url = "http://10.0.60.230:3000/users"
        let result = await fetch(`${url}/${id}`,{
            method: "Delete"
        })
        result =await result.json()
        console.log("---->",result)
        getAPIData()
      }

    useEffect(()=>{
        getAPIData()
    },[])

    return (
        
        <ScrollView>
            <Text> HII </Text>

            {

                data.length ?
                data.map((item)=>
                 <View style={{flex:1}}>
                    <View style = {{flex: 1,flexDirection: 'row'}}>
                    <View style = {{ marginLeft: 10, padding:3, fontSize: 20, borderWidth: 2, marginBottom: 20, marginRight: 10}}><Text>{item.name}</Text></View>
                    <Text style = {{ marginLeft: 10, padding:3, fontSize: 20, borderWidth: 2, marginBottom: 20, marginRight: 10}} onPress={()=> deleteUser(item.id)}> Delete</Text>

                    </View>
                    {/* <View style = {{flex:1}}><Text>{item.age}</Text></View> */}
                  
                    </View> 
                    
                    
                    )
                    : null
            }
        </ScrollView>
    )
}

export default DeleteFetch