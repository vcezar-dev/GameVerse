import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


import { colors } from '@/src/constants/colors';
import { s } from "./styles";

export function Header() {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.icon} activeOpacity={0.7}>
        <Ionicons name="planet-sharp" size={50} color='#1d5bc0ff' />
      </TouchableOpacity>

      <View style={s.rightContainer}>
        {/* <TouchableOpacity activeOpacity={0.7} style={s.notificationContainer}>
            <MaterialCommunityIcons name="bell-outline" size={26} color="#fff" />
            <View style={s.badge}>
              <Text style={s.badgeText}>4</Text>
            </View>
          </TouchableOpacity> */}

        <View style={s.pointsContainer}>
          <FontAwesome name="diamond" size={16} color="#fff" />
          <Text style={s.pointsText}>97</Text>
        </View>

        <TouchableOpacity activeOpacity={0.7}>
          <Image
            style={s.image}
            source={{
              uri: 'https://imgs.search.brave.com/Aw8gZDy7tcqfy1ui4zsatH6oNHQx9EqZFBF7sAQnfCo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}