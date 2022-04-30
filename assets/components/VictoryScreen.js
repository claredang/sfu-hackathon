import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Title } from 'react-native-paper';
import BeerImage from '../../assets/images/beer.png'

function VictoryScreen(props) {
    return (
      <View style={styles.container}>
        <Title style={{fontSize: 30, fontWeight: '500', padding: 24}}>Victory</Title>
        <Image source={BeerImage} style={{height: 400}}></Image>
        <Title style={{padding: 10}}>Enjoy your beer~~~</Title>
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
      },
})

export default VictoryScreen;


