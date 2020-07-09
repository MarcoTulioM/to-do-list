import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Item ( props ) {
    return (
        <TouchableOpacity onPress={ props.onDelete }>  
            <View style={ sty.listItem }>
                <Text>
                    { props.title }
                </Text>
            </View>
        </TouchableOpacity>
      );
}

const sty = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#edf1f8",
        borderWidth: 1,
        borderColor: "#252525",
        borderRadius: 8 
    }
});
