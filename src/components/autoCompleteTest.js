import Query from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import React  from "react";
import {Text, View, AutocompleteInput} from 'react-native'

export default (params)=>{
    const {query} = params
    const data = filterData(query)
    return(
        <></>
    )
}