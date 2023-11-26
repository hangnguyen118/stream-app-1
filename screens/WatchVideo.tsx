import { useEffect, useRef, useState } from 'react';
import { Video } from 'expo-av';
import { View, Text, StyleSheet } from 'react-native';
import { HomeStackScreenProps } from '../navigation/types';
import { AntDesign } from '@expo/vector-icons';

const WatchVideo = ({navigation, route}: HomeStackScreenProps<'WatchVideo'>) => {
  const videoRef = useRef(null);
  useEffect(() => {
    (async () => {
      if (videoRef.current) {
        console.log(route.params.videoUri)
        await videoRef.current.loadAsync({ uri: `http://192.168.1.76:8080/api/videos/watch?sourceuri=${route.params.videoUri}`}, {}, true);
      }
    })();
  }, [route.params.videoUri]);

  return (
    <View>
      <Video
      ref={videoRef}
      style={{ width: '100%', height: 300 }}
      useNativeControls
    />
    <Text style={styles.title}>{route.params.title}</Text>
    <Text style={styles.author}>Author: {route.params.authorName}</Text>
    <Text style={styles.info}>{route.params.info}</Text>
    <Text style={styles.like}><AntDesign name="like1" size={24} color="blue" />{route.params.likes}</Text>
    </View>
  );
};

export default WatchVideo;

const styles = StyleSheet.create({
  title: {
      fontWeight: "500",
      fontSize: 14
  },
  author: {
      fontWeight: "300",
      fontSize: 12
  },
  info: {
    fontWeight: "300",
    fontSize: 12,
  },
  like: {
    fontWeight: "300",
    fontSize: 24,
    color: "blue"
  }
})
