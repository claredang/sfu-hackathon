import { StyleSheet, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Corona Game</Text>
      <Text>How to play</Text>
      <Text style={styles.box1}>Choose a player to go first. That player throws a die and scores as many points as the total shown on the die providing the die doesn’t roll a 1. The player may continue rolling and accumulating points (but risk rolling a 1) or end his turn.</Text>
      <Text style={styles.box}>If the player rolls a 1 his turn is over, he loses half points he accumulated that turn, and he passes the die to the next player</Text>
      <Text>The first player to accumulate 100 or more points wins the game.</Text>
      {/* <Button>Start the game</Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'rgb(228,237,222)',
    // backgroundColor: 'grey',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    // marginVertical: 30,
    height: 1,
    width: '80%',
  },
  box: {
    backgroundColor: 'green',
  }
});
