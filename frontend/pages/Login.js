import * as React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function ({ navigation, route }){
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <Text>Ola</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    container: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "rgba(0,0,0,.125)"
    }
})