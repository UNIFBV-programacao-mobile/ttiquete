import { Text, View,  StyleSheet, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';

const avatar = require("../../assets/images/Avatar.png")
const Tela = Dimensions.get('window').width;
const imagensCarrossel = [
  require('../../assets/images/Property1.png'),
  require('../../assets/images/Property2.png'),
  require('../../assets/images/Property3.png'),
];

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
    
    
    
    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
  touchableOpacityStyle: {
    width: Tela,
    marginRight: 10,
  },
  imagemCarrossel: {
    width: Tela,
    height: 150,
    borderRadius: 8,
  },
});
