import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { Title } from 'react-native-paper';
import BeerImage from '../../assets/images/beer.png'
import { AnimatedEmoji } from 'react-native-animated-emoji';

function VictoryScreen(props) {
    return (
      <View style={styles.container}>
        <Title style={{fontSize: 30, fontWeight: '500', padding: 24}}>Victory</Title>
        <Image source={BeerImage} style={{height: 400}}></Image>
        <Title style={{padding: 10}}>Enjoy your beer~~~</Title>
        <Button onPress={() => props.navigation.navigate('Opening Screen')}
        title="Play again"></Button>
         <AnimatedEmoji
          index={'emoji.key'} // index to identity emoji component
          style={{ bottom: 200 }} // start bottom position
          name={'beer'} // emoji name
          size={30} // font size
          duration={10000} // ms
        />
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

export default VictoryScreen;


