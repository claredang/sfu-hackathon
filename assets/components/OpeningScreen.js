import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { Title } from 'react-native-paper';

function OpeningScreen(props) {
    return (
      <View style={styles.container}>
        <Title style={{textAlign: 'center', padding: 16}}>Corona Game</Title>
        <Text style={styles.title}>How to play</Text>
        <View style={styles.box}>
          <Text style={[styles.text, {backgroundColor: 'rgb(228,237,222)'}]}>Choose a player to go first. That player throws a die and scores as many points as the total shown on the die providing the die doesn’t roll a 1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn.</Text>
          <Text style={[styles.text, {backgroundColor: 'rgb(255,249,212)'}]}>If the player rolls a 1 his turn is over, he loses half of points he accumulated that turn, and he passes the die to the next player.</Text>
          <Text style={[styles.text, {backgroundColor: 'rgb(248,248,248)'}]}>The first player to accumulate 50 or more points wins the game.</Text>
        </View>
        {/* <Button onPress={() => props.navigation.navigate('Roll Screen')}
          style={{backgroundColor: 'red'}}
          title="Start game">
        </Button> */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Roll Screen')}>
            <Text style={styles.texts}>Start Game</Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
  },
  box: {
    paddingVertical: 16,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
  },
  text: {
    marginBottom: 16,
    padding: 16,
  },
  button: {
    color:'black',
    marginTop: 30,
    paddingHorizontal: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
    backgroundColor: 'red',
  },
  texts: {
    fontSize: 14,
    color: 'black',
    marginTop: 30,
    paddingHorizontal: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default OpeningScreen;


