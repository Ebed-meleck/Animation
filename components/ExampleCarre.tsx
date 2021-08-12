import React from 'react';
import { View,  StyleSheet, Button } from 'react-native';
import Animated, {useAnimatedStyle, withSpring, useSharedValue }from 'react-native-reanimated';

const ExampleCarre:React.FC = () => {
  
  const offset = useSharedValue(0);

  const defaultStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(offset.value * 255) }]
  }));

  const customStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: withSpring(offset.value * 255, {
        damping: 20,
        stiffness: 90,
      })
    }]
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.carre, defaultStyle]} />
      <Animated.View style={[styles.carre, customStyle]} />
      <View style={styles.btn} >
        <Button onPress={() => (offset.value = Math.random())} title="Move" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 100,
    justifyContent: 'center',
    alignItems: 'center',
    top:40
  },
  carre: {
    width: 100,
    height: 100,
    backgroundColor: '#021a74',
    borderRadius: 10,
    marginTop: 13,
    marginLeft: -50
  },
  btn: {
    position: 'absolute',
    left: 70,
    top: 280,
    width: 70,
  }
});
export default ExampleCarre;