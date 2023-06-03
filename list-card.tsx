import React, { useEffect, useState } from "react";
import { View, FlatList, Image, StyleSheet, Text } from "react-native";

export default function ListaFilmes() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=f54e8290a68bc80dbcf2bdb116162051"
        );
        const data = await response.json();
        setFilmes(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFilmes();
  }, []);

  const renderFilme = ({ item } : {item: any}) => (
    <View style={styles.estiloCard}>
      <View>
        <Image
          style={styles.estiloImagem}
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path} `}}
        />
      </View>
      <View style={styles.estiloCardTexto}>
        <Text style={styles.estiloTexto1}>{item.title}</Text>
        <Text style={styles.estiloTexto2}>{item.original_title} / {item.release_date}</Text>
        <Text style={styles.estiloTexto3}>Popularity: <Text style={styles.destaque}>{item.popularity}</Text></Text>
        <Text style={styles.estiloTexto4}>Votes: <Text style={styles.destaque}>{item.vote_count}</Text> | Avg: <Text style={styles.destaque}>{item.vote_average}</Text></Text>
        <Text style={styles.estiloTextoSinopse}>{item.overview}</Text>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={filmes}
        renderItem={renderFilme}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

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
    opacity: 0.6,
  },
  estiloTexto3: {
    color: "white",
    fontSize: 12,
    marginTop: 10,
    fontWeight: "bold",
  },
  estiloTexto4: {
    color: "white",
    fontSize: 12,
    marginTop: 1,
    fontWeight: "bold",
  },
  estiloTextoSinopse: {
    color: "white",
    fontSize: 10,
    marginTop: 10,
    marginRight: 2,
    opacity: 0.6,
  },
  estiloImagem: {
    height: 230,
    width: 130,
    marginRight: 16,
  },
  destaque: {
    color: "green",
  },
});