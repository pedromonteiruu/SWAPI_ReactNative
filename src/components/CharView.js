import React,{useEffect, useState} from 'react'
import {Text, SafeAreaView, StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native'

export const CharView = ({dados}) => {
    if (!dados) {
      return <View style={[style.page]}><Text style={[style.logs,
        { fontSize:32
        }]}>Char don't exist</Text></View>
    }

    const {
      gender,
      name,
      height,
      birth_year,
      hair_color,
      skin_color,
      eye_color,
      mass } = dados
    
    return (
        <View style={[style.page]}>
        <Text style={[style.logs,
          { fontSize:20,
            borderBottomColor: 'white',
            borderBottomWidth:3
          }]}>        
            {name}
          </Text>
          <Text style={style.logs}>Gender:       {gender}</Text>
          <Text style={style.logs}>Height:        {height}</Text>
          <Text style={style.logs}>Birth Year:  {birth_year}</Text>
          <Text style={style.logs}>Hair Color:  {hair_color}</Text>
          <Text style={style.logs}>Skin Color:  {skin_color}</Text>
          <Text style={style.logs}>Eye Color:   {eye_color}</Text>
          <Text style={style.logs}>Mass:          {mass}</Text>
          
        </View>
    )
}
export default CharView;

style = StyleSheet.create({
    page:{
        width:"90%",
        height:"70%",
        borderRadius:10 ,
        padding:50,
        shadowColor:'black',
        shadowOpacity:100,
        shadowRadius:10,
        backgroundColor:'#0A1931',
        margin:20,
        color:'white',
      },
      logs:{
        color:'white',
        fontSize: 18,
        paddingTop:12
      }
})