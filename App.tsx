import { ScrollView, StyleSheet, Text, View } from 'react-native';
import TituloPagina from './title';
import BoxFilme from './box-card';
import ListaFilmes from './list-card';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TituloPagina/>
        <ListaFilmes/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',    
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
});
