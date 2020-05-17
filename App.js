import React from 'react';
import { StyleSheet, Text, View, Image ,Platform, AsyncStorage } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "./src/components/HomeScreen"
import SearchScreen from "./src/components/SearchScreen"
import RankingScreen from "./src/components/RankingScreen"
import ProfileScreen from "./src/components/ProfileScreen"

const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return(
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({back}) => ({
          title: "",
          headerStyle: {
            backgroundColor: '#E3E3E3',
          },
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <Text style={styles.headerLeftTextStyle}>Your Favorite</Text>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerRightContainer}>
              <Text style={styles.headerRightTextStyle}>Following</Text>
            </View>
          ),
        })}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route }) => ({
          headerShown: false,
          searchContainer: () => (
            <View style={{ backgroundColor: '#000'}}>
            </View>
          ),
        })}
      />

    </Stack.Navigator>
  );
}

const SearchStack = ({ navigation }) => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#E3E3E3',
          },
          headerLeft: () => (
            <View style={styles.headerSearchContainer}>
              <Image
                style={{ height: 30 ,width: 30 ,marginRight: 10 }}
                source={require('./src/Assets/search-white-1.png')}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  if (!isLoadingComplete) {
    return null;
  } else {
  return (
    <NavigationContainer
    initialState={initialNavigationState}
    onStateChange={(state) =>
      AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    }>
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
              ? require('./src/Assets/owl-active.png'):
              require('./src/Assets/グループ-1.png');
            } else if (route.name === 'Rank') {
              iconName = focused
              ? require('./src/Assets/crown-5.png'):
              require('./src/Assets/crown-6.png');
            } else if (route.name == 'Search') {
              iconName = focused
              ? require('./src/Assets/search-white-2.png'):
              require('./src/Assets/search-white-3.png');
            }
            return (
              <Image
               style={{width: 30, height: 30}}
               source={iconName}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Rank" component={RankingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );}
}

const styles = StyleSheet.create({
  headerLeftContainer: {
    height: 35,
    width: 130,
    marginLeft: 90,
    backgroundColor: '#fff',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerLeftTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#7B7B7B',
  },
  headerRightContainer: {
    marginRight: 90,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSearchContainer: {
    width: 380,
    height: 35,
    flexDirection: 'row-reverse',
    alignItems:'center',
    backgroundColor: '#878787',
    borderRadius: 15,
    marginRight: 15, /*flexDirection反向，這裡也要反向*/
  }
})

export default App;