import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from './components/Header/Header';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Header />
        </View>

        <View>
          <Text> Scanner </Text>
        </View>
        <View>
          <Text> Immediate Use </Text>
        </View>
        <View>
          <Text> Collection </Text>
        </View>

        <View>
          <Text> Horizontal Promos </Text>
        </View>

        <View>
          <Text> Coupons </Text>
        </View>
        <View>
          <Text> Recommendationa </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
