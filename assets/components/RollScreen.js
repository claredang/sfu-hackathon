import { StyleSheet, Text, View, Image,TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import { IconButton, Colors } from 'react-native-paper';
import { AnimatedEmoji } from 'react-native-animated-emoji';
import Dialog from "react-native-dialog";
import Dice1 from '../../assets/images/dice1.png'
import Dice2 from '../../assets/images/dice2.png'
import Dice3 from '../../assets/images/dice3.png'
import Dice4 from '../../assets/images/dice4.png'
import Dice5 from '../../assets/images/dice5.png'
import Dice6 from '../../assets/images/dice6.png'
import Player1 from '../../assets/images/player1.png'
import Player2 from '../../assets/images/player2.png'
import TableImage from '../../assets/images/table.png'

function RollScreen(props) {
  const [uri, setUri] = useState(Dice1);
  const [score, setScore] = useState(0);
  const [AIscore, setAIScore] = useState(0);
  const [player, setPlayer] = useState('player');
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleDelete = () => {
    setVisible(false);
  };

  const calculateScore = (number) => {
    // if (number == 1 && player == 'player') {
    //   setScore(Math.round(0));
    // }
    // else if (number == 1 && player == 'AI') {
    //   setAIScore(Math.round(0));
    // }
    if (player == 'player') {
      setScore(score + number);
    } else if (player == 'AI') {
      setAIScore(AIscore + number);
    }
  }

  const handleReset = () => {
    setUri(Dice1);
    setScore(0);
    setAIScore(0);
    setPlayer('player');
  }

  const handleSkip = () => {
    if (player == 'player') {
      setPlayer('AI')
    }
    else {
      // console.log("player check", player);
      // var AI_continueOrNot = Math.floor(Math.random() * 2) + 1
      // if (AI_continueOrNot == 1) {
      //   buttonTapped()
      //   // console.log("value", AIscore);
      // } else {
        setPlayer('player')
      //}
    }
  }


  const navigateToScreen = () => {
    if (score > 50 || AIscore > 50) {
        if (score > 50) {
            props.navigation.navigate('Victory Screen')
        }
        else if (AIscore > 50) {
            props.navigation.navigate('Defeat Screen')
        }
    }
  }

  const handleRoll1 = () => {
    switch(player){
      case 'player':
        setScore(Math.round(score/2))
      case 'AI':
        setAIScore(Math.round(AIscore/2));
    }
    console.log("score", score);
    showDialog();
    handleSkip();
  }

  const handleEmoji = () => {
    <AnimatedEmoji
      index={'emoji.key'} // index to identity emoji component
      style={{ bottom: 200 }} // start bottom position
      name={'beer'} // emoji name
      size={30} // font size
      duration={10000} // ms
    />
  }

  const buttonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    
    switch(randomNumber){
      case 1: 
        setUri(Dice1);
        handleRoll1()
        // handleRoll1()
        // handleEmoji()
        // calculateScore(1)
        // navigateToScreen()
        break;
      case 2: 
        setUri(Dice2);
        handleEmoji()
        calculateScore(2)
        navigateToScreen()
        break;
      case 3: 
        setUri(Dice3);
        handleEmoji()
        calculateScore(3)
        navigateToScreen()
        break;
      case 4: 
        setUri(Dice4);
        handleEmoji()
        calculateScore(4)
        navigateToScreen()
        break;
      case 5: 
        setUri(Dice5);
        handleEmoji()
        calculateScore(5)
        navigateToScreen()
        break;
      case 6: 
        setUri(Dice6);
        handleEmoji()
        calculateScore(6)
        navigateToScreen()
        break;
      default: 
        setUri(Dice6); 
        setPlayer()
    }
  }

  return(
    // <SafeAreaView>
        <ScrollView style={styles.container}>
        <View style={{alignItems: 'center', paddingTop: 30}}>
        <Image 
            style={styles.image} 
            source={uri}
        />
        </View>
        <TouchableOpacity onPress={buttonTapped}>
            <Text style={styles.texts}>Roll</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSkip} style={{paddingBottom: 16 }}>
            <Text style={styles.texts}>Stop, other turns</Text>
        </TouchableOpacity>
        <Button onPress={handleReset} title="Reset"></Button>
        
        <Text>My score: {score}</Text>
        <Text>AI score: {AIscore}</Text>
        <Text>Current player: {player}</Text>
        <View style={{alignSelf: 'flex-start'}}>
          <Image source={Player1}></Image>
        </View>
        <View style={{alignSelf: 'center', height: 100}}>
          <Image source={TableImage}></Image>
        </View>
        <View style={{alignSelf: 'flex-end'}}>
        <Text>AI score: {AIscore}</Text>
          <Image source={Player2}></Image>
        </View>

        <AnimatedEmoji
            index={'emoji.key'} // index to identity emoji component
            style={{ bottom: 200 }} // start bottom position
            name={'beer'} // emoji name
            size={30} // font size
            duration={10000} // ms
        />

        <TouchableOpacity>
          <View style={{flexDirection: 'column', backgroundColor: 'grey'}}>
            <IconButton
              icon="help-circle-outline"
              size={30}
              onPress={() => console.log('Pressed')}/>
            <Text>Game Rule</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.container}>
            <Dialog.Container visible={visible}>
              <Dialog.Title>Rolled dice 1!</Dialog.Title>
              <Dialog.Description>
                Lose half points. It's now {player}'s turn
              </Dialog.Description>
              <Dialog.Button label="Gotcha" onPress={handleDelete} />
            </Dialog.Container>
          </View>
        </ScrollView>

        
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  image:{
    width:200,
    height:200
  },
  texts:{
    fontSize: 14,
    color: 'black',
    marginTop: 30,
    paddingHorizontal: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
  },
  peopleImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  dialogContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default RollScreen;


