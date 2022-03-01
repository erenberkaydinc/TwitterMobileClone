import React from "react";
import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function TweetBox({ item }) {
  return (
    <View
      style={{
        borderColor: "#687684",
        borderBottomWidth: 0.2,
        borderTopWidth: 0.2,
        backgroundColor: "white",
        paddingTop:'3%',
        paddingBottom:'3%',
        paddingLeft:'2.5%',
        backgroundColor:'#FFFFFF'
      }}
    >
      <View flexDirection="row">
        <Icon solid name="user-circle" size={48} color="#adb5bd" />

        {/* part2 */}
        <View style={{paddingLeft:'2.2%'}} > 
          {/* part1 */}
          <View style={{ flexDirection: "row" }}>
            <Text>{item.name}</Text>
            <Text style={{color:'#687684',paddingLeft:'1%'}}>@{item.name.toLowerCase()}</Text>
            {/* <Text style={{color:'#687684',paddingLeft:'1%'}}>·1h</Text> */}
            <Text style={{color:'#687684',paddingLeft:'1%'}}>· {item.createdAt.substring(11,16)}</Text>
          </View>
          {/* part1 */}

          <Text>{item.content}</Text>

          {/* iconlar tweet icin // butonlar */}
          <View style={{flexDirection:"row",marginTop:'5%'}}>
              <View style={{flexDirection:"row"}}  >
                <Icon regular name="comment" size={18} color="#adb5bd" />
                 <Text style={{marginLeft:6}}>3</Text>
              </View>
              <View style={{flexDirection:"row",marginLeft:'15%'}} >
                <Icon solid name="retweet" size={18} color="#adb5bd" />
                {/* <Text style={{marginLeft:6}}>1</Text> */}
              </View>
              <View style={{flexDirection:"row",marginLeft:'15%'}} >
                <Icon solid name="heart" size={18} color="#CE395F" />
                <Text style={{marginLeft:6,color:'#CE395F'}}>22</Text>
              </View>
              <View style={{flexDirection:"row",marginLeft:'15%'}} >
                <Icon solid name="share-square" size={18} color="#adb5bd" />
                {/* <Text style={{marginLeft:6,color:'#adb5bd'}}>1</Text> */}
              </View>

          </View>
        </View>
        {/* part2 */}
      </View>
    </View>
  );
}
