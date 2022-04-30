import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Splash extends PureComponent<any> {
    render() {
        return (
            <View style={styles.container}>
                <Text>The first player to accumulate 100 or more points wins the game.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
      },
})

export default Splash;
