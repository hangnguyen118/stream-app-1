import { View, Text, FlatList, StyleSheet } from 'react-native'
import { VideoItem } from '../components';
import { FontAwesome5 } from '@expo/vector-icons'; 

const VideoTopList = ({data, handleOpenVideo}) => {
    return (
    <View style={styles.container}>
      <Text style={styles.title}>Hot Today <FontAwesome5 name="fire" size={24} color="red" /></Text>
      <View>
        <FlatList
            data={data}
            renderItem={ ({item}) => <VideoItem title={item.title} preview={item.preview} 
            authorName={item.authorName} views={item.views}
             handleOpenVideo={() => handleOpenVideo(item.sourceUri, item.authorName, item.title, item.info, item.views, item.likes)}/>}
            keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

export default VideoTopList;

const styles = StyleSheet.create({
  container: {    
    backgroundColor: 'white'
  },
  item: {
      flex: 1,
  },
  title: {
    margin: 20,
    fontSize: 26,
    fontWeight: "500"
  },
  videoPreview: {
  }
})