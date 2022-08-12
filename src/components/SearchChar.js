import React from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'


export default (params)=>{
    
    return(
        <View style={{alignContent:'center', alignItems:'center'}}>
            <TextInput style={style.input} onChangeText={value =>{params.Function(value)}}/>
        </View>
    )
}

const style= StyleSheet.create({
   input:{
    color:'#F8DF8B',
    borderBottomWidth:1,
    borderBottomColor:"#F8DF8B",
    width:'50%'
}
})