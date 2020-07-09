import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';

import Item from "./components/Item";
import Input from "./components/Input";

export default function App() {
  
  const [ list, setList] = useState([]);
  const [ modal, setModal ] = useState(false);

  function addNewGol ( newGol) {
    if ( newGol == "" ) { return; } 
    setList(  current  => [ ...current,
       { key: Math.random().toString(), value: newGol } 
    ]); 
    setModal( false );
  }
  function deleteHandle ( id ) {
    setList( list.filter( it => id !== it.key ));
  }
  return (
    <View style={ sty.container }>
      <Button title="Add New Gol!" onPress={ () => setModal(true) }/>

      <Input 
        visible={ modal } 
        addAttribute={ addNewGol } 
        onCancel={ () => setModal(false) }
      />

      <FlatList 
        data={list} 
        renderItem={ data => <Item 
            title={ data.item.value } 
            onDelete={ deleteHandle.bind(this, data.item.key) } 
          /> }
      />
    </View>
  );
}

const sty = StyleSheet.create({
  container: {
      flex: 1,
      padding: 50
  }
});
