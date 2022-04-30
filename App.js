// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image,TouchableOpacity, Button} from 'react-native';
// import React, {useState} from 'react';
// import OpeningScreen from './assets/components/OpeningScreen';
// import Dice1 from './assets/images/dice1.png'
// import Dice2 from './assets/images/dice2.png'
// import Dice3 from './assets/images/dice3.png'
// import Dice4 from './assets/images/dice4.png'
// import Dice5 from './assets/images/dice5.png'
// import Dice6 from './assets/images/dice6.png'

// const App = ()=>{
//   const [uri,setUri] = useState(Dice1);
//   const [score, setScore] = useState(0);
//   const [AIscore, setAIScore] = useState(0);
//   const [player, setPlayer] = useState('player');
//   var playerType = player == 'player' ? 'AI' : 'player';

//   const calculateScore = (number) => {
//     console.log("player type", playerType);
//     if (number == 1 && playerType == 'player') {
//       setScore(Math.round(score/2));
//     }
//     if (number == 1 && playerType == 'AI') {
//       setScore(Math.round(AIscore/2));
//     }

//     if (playerType == 'player') {
//       setScore(score + number);
//     } else if (playerType == 'AI') {
//       setAIScore(AIscore + number);
//     }
//   }

//   const buttonTapped = ()=>{
//     let randomNumber = Math.floor(Math.random() * 6) + 1

//     switch(randomNumber){
//       case 1: 
//         setUri(Dice1);
//         setPlayer(playerType);
//         calculateScore(1)
//         break;
//       case 2: 
//         setUri(Dice2);
//         calculateScore(2)
//         break;
//       case 3: 
//         setUri(Dice3);
//         calculateScore(3)
//         break;
//       case 4: 
//         setUri(Dice4);
//         calculateScore(4)
//         break;
//       case 5: 
//         setUri(Dice5);
//         calculateScore(5)
//         break;
//       case 6: 
//         setUri(Dice6);
//         calculateScore(6)
//         break;
//       default: 
//         setUri(Dice1); 
//     }
//   }

//   const handleReset = () => {
//     setScore(0);
//     setAIScore(0);
//   }

//   const win = score > 50 || AIscore > 50 ? 'You win' : 'Continue';

//   return(
//     <View style={styles.container}>
//       <Image 
//         style={styles.image} 
//         source={uri}
//       />
//       <TouchableOpacity onPress={buttonTapped}>
//         <Text style={styles.texts}>Roll the Dice</Text>
//       </TouchableOpacity>
//       <Button
//              onPress={() => 
//                {setScore(0); setAIScore(0)}} title="Reset"
//            />
//       <Text>Player score: {score}</Text>
//       <Text>AI score: {AIscore}</Text>
//       <Text>Current player: {playerType}</Text>
//       <Text>Win or need to continue: {win}</Text>

      
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image:{
//     width:200,
//     height:200
//   },
//   texts:{
//     fontSize:26,
//     color:'black',
//     marginTop: 30,
//     paddingHorizontal: 10,
//     borderColor: '#30475E',
//     borderRadius: 5,
//     borderWidth: 3,
//     fontWeight: 'bold',
//     backgroundColor: 'red',
//   }
// });

// export default App;

// import React, { Component } from 'react';
// import { Provider as PaperProvider } from 'react-native-paper';
// import OpeningScreen from './assets/components/OpeningScreen';
// import NavigationRouter from './assets/components/NavigationRouter/NavigationRouter.js';
// // import { theme } from './App.styles'

// const App = () => {
//   return (
//     <PaperProvider theme={theme}>
//       <NavigationRouter/>
//     </PaperProvider>
//   )
// }
// export default App;


import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpeningScreen from './assets/components/OpeningScreen';
import RollScreen from './assets/components/RollScreen';
import VictoryScreen from './assets/components/VictoryScreen';
import DefeatScreen from './assets/components/DefeatScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Opening Screen" 
                        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Opening Screen" component={OpeningScreen} />
        <Stack.Screen name="Roll Screen" component={RollScreen} />
        <Stack.Screen name="Victory Screen" component={VictoryScreen} />
        <Stack.Screen name="Defeat Screen" component={DefeatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appleButton: {
      height: 48,
      marginBottom: 16,
      width: 'auto'
  },
  facebookButton: {
      height: 48,
      width: 'auto',
      borderRadius: 24,
      borderWidth: 0,
      padding: 0,
      margin: 0,
      overflow: 'hidden',
      marginBottom: 16,
  },
  facebookButtonIcon: {
      padding: 0,
      marginLeft: 0,
      width: 20,
      height: 20
  },
  facebookButtonText: {
      fontSize: 18,
      marginLeft: 5,
      marginRight: 5
  },
  signUpButton: {
      width: '100%',
  },
  linkText: {
      textDecorationLine: 'underline',
  },
  checkboxContainer: {
      marginLeft: -6,
  },
});


export default App;
