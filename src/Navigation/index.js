import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import ListPage from '../Screens/ListPage';
const Stack = createStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}
        headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListPage" component={ListPage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}