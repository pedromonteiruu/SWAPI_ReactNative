import React,{useEffect, useState} from 'react'
import {Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native'
import axios from 'axios';
import {CharView} from './components/CharView'
import SearchChar from './components/SearchChar';

const Home = () => {
  const [page, setPage] = useState(1)
  const [charInfo, setCharInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchName, setSearchName] = useState('')
  

  useEffect(()=>{
    getCharInfo()
  },[page])

  useEffect(()=>{
    getCharInfoByName()
  }, [searchName])

  const getCharInfo = ()=>{  
    setLoading(true)
    axios.get(`https://swapi.dev/api/people/${page}`)
          .then(reply => setCharInfo(reply.data))
          .finally(() => setLoading(false))
          .catch(error=>{
            console.log(error)
            setLoading(false)
          })
        }

  const getCharInfoByName = ()=>{
    setLoading(true)
    axios.get(`https://swapi.dev/api/people/?search=${searchName}`)
      .then(reply=> setCharInfo(reply.data.results[0]))
      .finally(()=> setLoading(false))
      .catch(error=>{
        console.log(error)
        setLoading(false)
      })
  }
  
  return(
    <SafeAreaView style={[style.container]}>
    <Text style={{color:'white', fontSize:22, textAlign:'center'}}>Star Wars</Text>

    <SearchChar Function={setSearchName}/>


    <CharView dados={charInfo}/>

    <View style={{justifyContent:'space-between', alignContent:'center', flexDirection:'row'}}>

      <TouchableOpacity disabled={page<=1 || loading==true} 
                        onPress={()=>{setPage(page =>page-1)}} 
                        style={{alignItems:'center'}}>
        <Text style={style.ButtonStyle}> Previous </Text>
      </TouchableOpacity>

      <Text style={style.logs}>{loading==true? <ActivityIndicator stop size="large" color="#F8DF8B" /> : page}</Text>

      <TouchableOpacity disabled={page>=83 || loading==true} 
                        onPress={()=>{setPage(page => page+1)}} 
                        style={{alignItems:'center'}}>
        <Text style={style.ButtonStyle}>Next</Text>
      </TouchableOpacity>
    
    </View> 
</SafeAreaView>
  )
}

export default Home;

const style  = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    alignContent:'center',
    padding:20
  },
  ButtonStyle:{
  color:'black', 
  backgroundColor:'#F8DF8B', 
  padding:8, 
  borderRadius:10,
  textAlign:'center',
  width:80}
})
