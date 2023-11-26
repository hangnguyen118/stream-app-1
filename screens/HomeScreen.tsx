import { View, Text, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import VideoTopList from '../containers/VideoTopList';
import { HomeStackScreenProps } from '../navigation/types';
// import type {HomeTabScreenProps } from '../navigation/types'
//{navigation, route}: HomeTabScreenProps<'Home'>

const HomeScreen = ({navigation, route}: HomeStackScreenProps<'Home'>) => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getVideoData();
  },[]);
  
  const getVideoData = async () => {
  const response = await fetch('http://192.168.1.76:8080/api/videos/all');
  if(response.ok){
    response.json().then((data)=>{
      setVideos(data)
    })
  }  
}
const handleOpenVideo = (videoUri, authorName, title, info, views, likes) => {
  console.log(authorName)
  navigation.navigate('WatchVideo', { videoUri, authorName, title, info, views, likes });
};
  return (
    <SafeAreaView>
        <VideoTopList data={videos} handleOpenVideo={handleOpenVideo}/>
    </SafeAreaView>
  )
}
export default HomeScreen;