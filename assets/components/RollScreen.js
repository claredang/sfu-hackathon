import { StyleSheet, Text, View, Image,TouchableOpacity, Button, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import { IconButton, Colors } from 'react-native-paper';
import { AnimatedEmoji } from 'react-native-animated-emoji';
import Dialog from "react-native-dialog";
import VictoryScreen from './VictoryScreen';
// import Dice1 from '/Users/claredang/Documents/sfu-hackathon/assets/images/dice1.png'
import Dice1 from 'images/dice1.png'
import Dice2 from '/Users/claredang/Documents/sfu-hackathon/assets/images/dice2.png'
import Dice3 from '/Users/claredang/Documents/sfu-hackathon/assets/images/dice3.png'
import Dice4 from '/Users/claredang/Documents/sfu-hackathon/assets/images/dice4.png'
import Dice5 from '/Users/claredang/Documents/sfu-hackathon/assets/images/dice5.png'
import Dice6 from '/Users/claredang/Documents/sfu-hackathon/assets/images/dice6.png'
import Player1 from '/Users/claredang/Documents/sfu-hackathon/assets/images/player1.png'
import Player2 from '/Users/claredang/Documents/sfu-hackathon/assets/images/player2.png'

function RollScreen(props) {
  const [uri,setUri] = useState(Dice1);
  const [score, setScore] = useState(0);
  const [AIscore, setAIScore] = useState(0);
  const [player, setPlayer] = useState('player');
  const [visible, setVisible] = useState(false);

  var playerType = player == 'player' ? 'AI' : 'player';

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    setVisible(false);
  };

  const calculateScore = (number) => {
    if (number == 1 && player == 'player') {
      setScore(Math.round(score/2));
    }
    if (number == 1 && player == 'AI') {
      setScore(Math.round(AIscore/2));
    }

    if (player == 'player') {
      setScore(score + number);
    } else if (player == 'AI') {
      setAIScore(AIscore + number);
    }
  }

  const handleReset = () => {
    setScore(0);
    setAIScore(0);
  }

  const handleSkip = () => {
    console.log("=== Before", player)
    if (player == 'player') {
        setPlayer('AI');
    } else if (player == 'AI') {
        setPlayer('player');
    }
    console.log("After", player)
    handleEmoji()
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
    setUri(Dice1);
    setPlayer(playerType);
    showDialog();
  }

  const handleEmoji = () => {
    <AnimatedEmoji
    index={'emoji.key'} // index to identity emoji component
    style={{ bottom: 200 }} // start bottom position
    name={'beer'} // emoji name
    size={30} // font size
    duration={10000} // ms
// onAnimationCompleted={this.onAnimationCompleted} // completion handler
    />
  }

//   const AITurn = () => {
//       for (randomNumber !== 1 ) {
//           buttonTapped();
//       }
//   }

  const buttonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    
    switch(randomNumber){
      case 1: 
        setUri(Dice1);
        // setPlayer(playerType);
        handleRoll1()
        handleEmoji()
        calculateScore(1)
        navigateToScreen()
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
        {/* <TouchableOpacity onPress={() => props.navigation.navigate('Opening Screen')}> */}
            <Text style={styles.texts}>Roll</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSkip}>
            <Text style={styles.texts}>Stop, other turns</Text>
        </TouchableOpacity>
        <Button
                onPress={() => 
                {setScore(0); setAIScore(0)}} title="Reset"
            />
            {/* <Image style={styles.pe}
            source={Player1}
        />
        <Image 
            source={Player2}
        /> */}
        <Text>My score: {score}</Text>
        <Text>AI score: {AIscore}</Text>
        <Text>Current player: {playerType}</Text>

        <AnimatedEmoji
            index={'emoji.key'} // index to identity emoji component
            style={{ bottom: 200 }} // start bottom position
            name={'beer'} // emoji name
            size={30} // font size
            duration={10000} // ms
        // onAnimationCompleted={this.onAnimationCompleted} // completion handler
            />

        {/* <AnimatedEmoji
            index={'emoji.key'} // index to identity emoji component
            style={{ bottom: 200 }} // start bottom position
            name={'virus'} // emoji name
            size={30} // font size
            duration={10000} // ms
        // onAnimationCompleted={this.onAnimationCompleted} // completion handler
            /> */}
        
        <TouchableOpacity>
        <IconButton
    icon="help-circle-outline"
    // color={Colors.red500}
    size={30}
    onPress={() => console.log('Pressed')}/>
    <Text>Game Rule</Text>
  </TouchableOpacity>

  <View style={styles.container}>
      <Dialog.Container visible={visible}>
        <Dialog.Title>You roll dice 1!</Dialog.Title>
        <Dialog.Description>
          You lose half points. Your score now is {score}
        </Dialog.Description>
        {/* <Dialog.Button label="No" onPress={handleCancel} /> */}
        <Dialog.Button label="Gotcha" onPress={handleDelete} />
      </Dialog.Container>
    </View>
        </ScrollView>
    // </SafeAreaView>
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
    fontSize:20,
    color:'black',
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
    // height: 10,
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


