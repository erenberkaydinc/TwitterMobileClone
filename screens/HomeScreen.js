import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  SafeAreaView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/Header";
import TweetBox from "../components/TweetBox";

export default function HomeScreen() {
  const [state, setState] = useState([]);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [IsLoading, SetIsLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(false)

  const submitData = () => {
    setPostLoading(true)
    fetch("http://192.168.0.27:5000/tweets", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        content,
      }),
    })
      .then((res) => res.json())

      .catch((err) => {
        Alert.alert("someting went wrong");
      });
    getData();
    setPostLoading(false)
    resetForm()
  };

  const getData = async () => {
    SetIsLoading(true);
    await fetch("http://192.168.0.27:5000/")
      .then((response) => response.json())
      .then((data) => setState(data));
    SetIsLoading(false);
  };

  useEffect(() => {
    getData();
    
  }, []);

  const renderItem = ({ item }) => <TweetBox item={item} />;

  const LoadingComponent = () => (
    <View>
    <ActivityIndicator size="large" animating={true} color='#4C9EEB'/>
    <Text style={{textAlign:'center'}}>Loading...</Text>
    </View>
  );

  const resetForm = () =>{
        setName('')
        setContent('')
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header />

      <View style={{ backgroundColor: "black" }}>
      <TextInput
          autoFocus={true}
          
          selectionColor="#4C9EEB"
          underlineColor="#4C9EEB"
          activeUnderlineColor="#4C9EEB"
          value={name}
          placeholder="Your Name"
          style={{
            backgroundColor:'white',
            borderTopWidth:0.5,
            borderTopColor:'#687684',
           
          }}
          onChangeText={(newinput) => setName(newinput)}
        />

        <TextInput
          style={{
            backgroundColor:'white',
            borderTopWidth:0.5,
            borderTopColor:'#687684'
          }}
          
          left
          selectionColor="#4C9EEB"
          underlineColor="#4C9EEB"
          activeUnderlineColor="#4C9EEB"
          value={content}
          placeholder="What do you think?"
          onChangeText={(newinput) => setContent(newinput)}
        />
        <Button

         color='#4C9EEB'
         icon="share" mode="contained"
         labelStyle={{
           color:'white'
         }}
         loading={postLoading}
         onPress={submitData}
         >Submit</Button>

      </View>
      {IsLoading ? (
        <View style={{justifyContent:'center',alignItems:'center',height:'80%'}} >
        <LoadingComponent />
        </View>
      ) : (
        <FlatList
          data={state}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:'white'
  },
});

//   <View style={styles.container}>
//   <StatusBar style='dark'  />
//   <Header />

//   <View style={{marginTop:'15%'}}>

//   <TextInput
//   value={name}
//   placeholder='Name'
//   onChangeText={(newinput)=>setName(newinput)}
//   />
//   <TextInput

//   value={content}
//   placeholder='Content'
//   onChangeText={(newinput)=>setContent(newinput)}
//   />

//   <Button
//   style={{marginBottom:'10%'}}
//   onPress={submitData}
//   >Submit</Button>
//   </View>

//     <FlatList
//       data={state}
//       renderItem={renderItem}
//       keyExtractor={item => item._id}
//     />

// </View>
