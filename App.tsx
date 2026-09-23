   import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
     <View style={{flex:1,flexDirection:'column',justifyContent:'space-around',backgroundColor:'gray'}} >

       <View style={{height:80,width:80,backgroundColor:'red'}}></View>
       <View style={{height:80,width:80,backgroundColor:'orange'}}></View>
       <View style={{height:80,width:80,backgroundColor:'green'}}></View>
       <View style={{height:80,width:80,backgroundColor:'black'}}></View>
      

     </View>
  );
}
