import { Text, View, StyleSheet, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';

const avatar = require("../../assets/images/Avatar.png");
const Tela = Dimensions.get('window').width;
const imagensCarrossel = [
  require('../../assets/images/Property1.png'),
  require('../../assets/images/Property2.png'),
  require('../../assets/images/Property3.png'),
];
const CarroselEmalta = [
  require('../../assets/images/peça1.png'),
  require('../../assets/images/peça2.png'),
  require('../../assets/images/peça3.png'),
  require('../../assets/images/peça4.png'),
  require('../../assets/images/peça5.png'),
];
const CarroselEmbreve= [
  require('../../assets/images/peça6.png'),
  require('../../assets/images/peça7.png'),
  require('../../assets/images/peça8.png'),
  require('../../assets/images/peça9.png'),
]
export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="#888"
        />
        <TouchableOpacity>
          <Image source={avatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.carroselContainer}>
        {imagensCarrossel.map((caminhoDaImagem) => (
          <TouchableOpacity key={caminhoDaImagem} style={styles.touchableOpacityStyle}>
            <Image source={caminhoDaImagem} style={styles.imagemCarrossel} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.secaoEmAlta}>
        <Text style={styles.tituloEmAlta}>Em Alta</Text>
        <ScrollView horizontal style={styles.conteinerEmalta}>
          {CarroselEmalta.map((emAlta) => (
            <TouchableOpacity key={emAlta} style={styles.touchableOpacityStyle}>
              <Image source={emAlta} style={styles.Emaltacarrosel} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    
    <View style={styles.secaoEmBreve}>
        <Text style={styles.tituloEmbreve}>Em Breve</Text>
        <ScrollView horizontal style={styles.conteinerEmBreve}>
          {CarroselEmbreve.map((emBreve) => (
            <TouchableOpacity key={emBreve} style={styles.touchableOpacityStyle}>
              <Image source={emBreve} style={styles.Embrevecarrosel} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    
    
    
    
    
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F2B64',
  },
  text: {
    color: '#fff',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '100%',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  carroselContainer: {
    marginTop: 10,
    flexDirection: 'row',
    height: 150,
    marginBottom: 10,
    width: Tela,
  },
  touchableOpacityStyle: {},
  imagemCarrossel: {
    width: Tela,
    height: 150, 
    borderRadius: 8,
  },
  secaoEmAlta: {
    marginTop: 0,
  },
  tituloEmAlta: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  conteinerEmalta: {
    marginTop: 10,
    height: 171,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  Emaltacarrosel: {
    width: 128,
    height: 171,
    marginRight: 10,
  },
  secaoEmBreve: {
    marginTop: 0,
  },
  tituloEmbreve: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    marginTop: 40,
  },
  Embrevecarrosel: {
    marginTop: 10,
    height: 171,
    width: 128,
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginHorizontal: 10,
  },
  conteinerEmBreve: {
    marginTop: 10,
    height: 171,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
});
