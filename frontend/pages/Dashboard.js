import * as React from 'react';
import { View, Text } from 'react-native';

export default function ({ navigation, route }){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Dashboard</Text>
        </View>
      );
}