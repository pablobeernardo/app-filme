import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function BoxFilme(){
  
  return (
    <View style={styles.estiloCard}>
      <View>
        <Image
          style={styles.estiloImagem}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/pt/8/88/Black_Widow_%282020%29.jpg",
          }}
        />
      </View>
      <View style={styles.estiloCardTexto}>
        <Text style={styles.estiloTexto1}>Viúva Negra</Text>
        <Text style={styles.estiloTexto2}>Black Window / 2021</Text>
        <Text style={styles.estiloTexto3}>Popularity: <Text style={styles.destaque}>42743</Text> </Text>
        <Text style={styles.estiloTexto4}>Votes: <Text style={styles.destaque}>42743</Text> | Avg: <Text style={styles.destaque}>7.9</Text> </Text>
        <Text style={styles.estiloTextoSinopse}>
          Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é
          entregue à KGB, que a prepara para se tornar sua agente suprema.
          Porém, o seu próprio governo tenta matá-la quando a União Soviética se
          desfaz.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  estiloCard: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
  },

  estiloCardTexto: {
    flex: 1,
    marginLeft: 10,
    maxWidth: "70%",
  },

  estiloTexto1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },

  estiloTexto2: {
    color: "white",
    fontSize: 12,
    marginTop: 1,
    opacity:0.6,
  },

  estiloTexto3: {
    color: "white",
    fontSize: 12,
    marginTop: 10,
    fontWeight:'bold'

  },
  
  estiloTexto4: {
    color: "white",
    fontSize: 12,
    marginTop: 1,
    fontWeight:'bold'

  },


  estiloTextoSinopse: {
    color: "white",
    fontSize: 10,
    marginTop: 10,
    marginRight:2,
    opacity:0.6,

  },

  estiloImagem: {
    height: 230,
    width: 130,
    marginRight: 16,
  },

  destaque: {
    color:'green'
  }
});
