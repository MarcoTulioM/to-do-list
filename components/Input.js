import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal} from "react-native";

export default function Input ( props ) {

    const [ newGol, setNewGol ] = useState("");

    function golHandle ( txt ) {
        setNewGol( txt );
      }

    function onAddButton () {
        props.addAttribute(newGol);
        setNewGol("");
    }
    return (
        <Modal visible={ props.visible } animationType="slide">
            <View style={ sty.cabecalho } >
                <TextInput style={ sty.entrada } 
                    placeholder="New Gol" 
                    onChangeText={ golHandle }
                    value={ newGol } 
                />
                <View style={ sty.botoes }>
                    <Button title="Cancel" color="red" onPress={ props.onCancel }/>
                    <Button title="ADD" onPress={ onAddButton }/>
                </View>
            </View>
        </Modal>
    );
}

const sty = StyleSheet.create({
    entrada: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        width: "80%"
    },

    cabecalho: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    botoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%"
    }
});
