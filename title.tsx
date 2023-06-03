import { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Font from 'expo-font';

export default function TituloPagina(){

    const [fontCarregada, setFonteCarregada] = useState(false);

    async function loadFonts(){
        await Font.loadAsync({
            Lobster: require('./assets/Lobster-Regular.ttf')
        });
        }

    useEffect(() => {
        loadFonts()
        .then (() => {
        setFonteCarregada(true);
        })
        .catch((error) =>{
        console.log('Ocorreu um erro', error);
        })
    }, [])


        return(
            <View style={styles.estiloTexto}>
                <Text style={styles.corTexto1} > Meuapp </Text>     
                <Text style={styles.corTexto2}> Filmes</Text>
            </View>
        )
    }


const styles = StyleSheet.create({
    
    estiloTexto: {
        flexDirection:'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    corTexto1: {
        color: 'white',
        fontSize:15,
    },
    
    corTexto2: {
        color: 'green',
        fontSize:40,
        fontWeight: 'bold',
        marginTop: 25,


    }
  });
  