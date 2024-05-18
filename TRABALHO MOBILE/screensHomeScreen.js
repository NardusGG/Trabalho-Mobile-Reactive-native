import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'Foto.jpg' }} 
        style={styles.profileImage}
      />
      <Text style={styles.name}>Felipe Alves Correia Guizzi</Text>
      <Text style={styles.info}>Idade: 20 anos</Text>
      <Text style={styles.info}>Formação: Ensino Superior</Text>
      <Text style={styles.info}>Data de Nascimento: 19/08/2003</Text>
      <Text style={styles.info}>Contato: 81993815752</Text>
      <Button
        title="Ver Tecnologias"
        onPress={() => navigation.navigate('Skills')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default HomeScreen;
