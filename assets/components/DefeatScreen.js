import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Title } from 'react-native-paper';
import DefeatedImage from '../../assets/images/defeated.png'

function DefeatedScreen(props) {
    return (
      <View style={styles.container}>
        <Title style={{fontSize: 30, fontWeight: '500', padding: 36}}>Defeated</Title>
        <Image source={DefeatedImage}></Image>
        <Title style={{padding: 10}}>Feel the fear, Human!!!</Title>
        <Button onPress={() => props.navigation.navigate('Opening Screen')}
        title="Play again"></Button>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 50,
        justifyContent: 'center',
      },
})

export default DefeatedScreen;




