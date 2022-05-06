import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'


const width = Dimensions.get('screen').width;

export default function Cesta() {
  return <>
   <Image source={topo} style={styles.topo}  />
   <Text style={styles.titulo}>Detalhes da cesta</Text>
   <View style={styles.cesta}>
   <Text style={styles.nome} >Cesta de Verduras</Text>
      <View style={styles.fazenda}>    
          <Image source={logo} style={styles.imagemFazenda}  />
          <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
      </View>
      
      <Text style={styles.descricao}>Uma cesta com produtos selecionados 
            cuidadosamente da fazenda direto 
            para sua cozinha</Text>

      <Text style={styles.preco}>R$ 40,00</Text>

  </View>
  </>
}

const styles = StyleSheet.create({
   topo: {
       width: '100%',
       height: 578 / 768 * width,
    },
   titulo: {
       position: 'absolute',
       width: '100%',
       textAlign: 'center',
       color: 'white',
       fontSize: 16,
       lineHeight: 26,
       fontWeight: 'bold',
       padding: 16,
   },
   cesta: {
       paddingHorizontal: 16,
       paddingVertical: 8,
   },
   nome:{
    color: "#464646",    
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
   },

   fazenda: {
       flexDirection: 'row',
       paddingVertical: 12,
   },
   imagemFazenda: {
       width: 35,
       height: 35,
   },
   nomeFazenda: {
    fontSize: 16,
    lineHeight: 27,
    marginLeft: 12,
   },
   descricao:{
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
   },
   preco: {
    color: "#2A9F85",   
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 42,
    marginTop: 8,
   }


});

