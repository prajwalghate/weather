import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList,
  StatusBar,
  ImageBackground,
} from 'react-native';

// Install These Packages
import SlidingUpPanel from 'rn-sliding-up-panel';
import Carousel from 'react-native-snap-carousel';

// From Expo
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  // Cities Data

  const Cities = [
    {
      key: '1',
      cityImage: require('./assets/kolkata.webp'),
      cityName: 'Kolkata',
    },
    {
      key: '2',
      cityImage: require('./assets/nagpur.jpg'),
      cityName: 'Nagpur',
    },
    {
      key: '3',
      cityImage: require('./assets/pune.jpg'),
      cityName: 'Pune',
    },
    {
      key: '4',
      cityImage: require('./assets/delhi.jpg'),
      cityName: 'Delhi',
    },
    {
      key: '5',
      cityImage: require('./assets/mumbai.jpg'),
      cityName: 'Mumbai',
    },
  ];

  // Carousel data

  const Weather = [
    {
      image: require('./assets/card1.png'),
      weather:"Heavy Rain",
      weath_Im:require('./assets/rain.png'),
      Time:"Morning",
      Temp:"29 °",
      Qu:"Feels Like 30 °",
      Day:"Today 14-02-2021"
    },
    {
      image: require('./assets/card2.png'),
      weather:"Cloudy",
      weath_Im:require('./assets/cloudy.png'),
      Time:"Morning",
      Temp:"25 °",
      Qu:"Feels Like 15 °",
      Day:"Yesterday 13-02-2021"
    },
    {
      image: require('./assets/card3.png'),
      weather:"Heavy Rain",
      weath_Im:require('./assets/rain.png'),
      Time:"Morning",
      Temp:"27 °",
      Qu:"Feels Like 30 °",
      Day:"Ereyesterday 12-02-2021"
    },
    {
      image: require('./assets/card4.png'),
      weather:"Sunny",
      weath_Im:require('./assets/sunny.png'),
      Time:"Morning",
      Temp:"45 °",
      Qu:"Feels Like 50 °",
      Day:"Today 15-02-2021"
    },
  ];

  const {width, height} = Dimensions.get('window');
  const carouselRef = useRef(null);

  const RenderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View>
          <ImageBackground
            source={item.image}
            style={{
              width: 360,
              height: 240,
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
            borderRadius={10}>
            <View style={{alignItems:"center"}}>
              <Text style={{color: '#ffffff', fontWeight: '600', fontSize: 20}}>
                {item.Day}
              </Text>
              <Image
                style={{height: 100, width: 100}}
                source={item.weath_Im}
              />
              <View>
                <Text
                  style={{color: '#ffffff', fontWeight: 'bold', fontSize: 25}}>
                  {item.weather}
                </Text>
                <Text
                  style={{color: '#ffffff', fontWeight: '600', fontSize: 20}}>
                  {item.Time}
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 65,
                  textAlign: 'center',
                }}>
                {item.Temp}
              </Text>
              <Text style={{color: '#ffffff', fontWeight: '600', fontSize: 20}}>
                {item.Qu}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  // SLIDING PANEL

  const [dragRange, setDragRange] = useState({
    top: height - 80,
    bottom: 160,
  });

  const _draggedValue = new Animated.Value(180);

  const ModalRef = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={{paddingHorizontal: 14}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 26, color: '#fff'}}>Mumbai</Text>
              <Icon
                name="keyboard-arrow-down"
                color="white"
                size={28}
                style={{alignSelf: 'center'}}
              />
            </View>
            <Text style={{fontSize: 26, color: '#fff', opacity: 0.6}}>
              Daily Weather
            </Text>
          </View>
          <View>
            <Image
              source={require('./assets/mumbai.jpg')}
              style={styles.City}
            />
            <View style={styles.CityNotification}></View>
          </View>
        </View>

        <View>
          <Carousel
            layout={'tinder'}
            ref={carouselRef}
            data={Weather}
            renderItem={RenderItem}
            sliderWidth={width}
            itemWidth={width - 10}
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{
              overflow: 'visible',
              marginVertical: 30,
            }}
            contentContainerCustomStyle={{
              paddingTop: 14,
            }}
          />
        </View>
        <View style={styles.weth}>
          <View>
            <Text style={{color: '#252525'}}>Wind</Text>
            <Text
              style={{
                color: '#000000',
                marginTop: 5,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              33 m/hr
            </Text>
          </View>
          <View>
            <Text style={{color: '#252525'}}>Humidity</Text>
            <Text
              style={{
                color: '#000000',
                marginTop: 5,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              24 Km
            </Text>
          </View>
          <View>
            <Text style={{color: '#252525'}}>Visibility</Text>
            <Text
              style={{
                color: '#000000',
                marginTop: 5,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              64%
            </Text>
          </View>
        </View>

        <View>
          <Text style={{color: '#fff', opacity: 0.6, marginBottom: 10}}>
            Add Cities
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.AddCity}>
              <View style={styles.AddCityIconbg}>
                <Icon
                  name="add"
                  color="white"
                  size={28}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text style={{color: '#fff'}}>Add City</Text>
            </TouchableOpacity>
            <FlatList
              inverted
              horizontal
              data={Cities}
              renderItem={({item}) => {
                return (
                  <View style={styles.AddCity}>
                    <Image
                      style={styles.AddCityIconbg}
                      source={item.cityImage}
                    />
                    <Text style={{color: '#fff'}}>{item.cityName}</Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>

      {/* <View style={{flex: 1}}>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 0,
  },
  City: {
    width: 55,
    height: 55,
    borderRadius: 40,
  },
  CityNotification: {
    height: 12,
    width: 12,
    backgroundColor: '#4853ef',
    borderRadius: 6,
    position: 'absolute',
    right: 6,
    borderWidth: 2,
    borderColor: '#000',
  },
  AddCity: {
    height: 140,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0c0c',
    borderRadius: 10,
    marginRight: 14,
  },
  AddCityIconbg: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  weth: {
    height: 100,
    width: 360,
    backgroundColor: '#F9F6F4',
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;
