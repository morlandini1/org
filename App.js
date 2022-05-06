import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

import Cesta from '../org/src/telas/cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
  }
