import React, { useEffect,useState} from "react";
import { Text, RefreshControl,FlatList, TouchableOpacity, SafeAreaView, Image, Dimensions, View, ScrollView } from "react-native";
import { styles } from './Styles'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '../../Redux/Action'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel from 'react-native-banner-carousel';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = wp(65);

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { festivalOfferData, topSellerData, weeklySpecialData, featuredProductsData } = useSelector(state => state.getReducer);
  const dispatch = useDispatch();

  //Screen Refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    dispatch(getList())
  }, []);

  const renderItem = ({ item }) => {
    const ImgPath = item.images.map((items) => items.src)
    return (
      <TouchableOpacity style={[styles.listView,{backgroundColor: "#f7e945"}]} onPress={()=>navigation.push("ListPage",{flag:"1"})}>
        <Image style={styles.productImg} source={{ uri: ImgPath[0] }} />
        <View style={styles.absolute}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  const renderItemFeaturedProducts= ({ item }) => {
    const ImgPath = item.images.map((items) => items.src)
    return (
      <TouchableOpacity style={[styles.listView,]} onPress={()=>navigation.push("ListPage",{flag:"3"})}>
      <Image style={styles.productImg} source={{ uri: ImgPath[0] }} />
      <View style={styles.absolute}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
      </TouchableOpacity>
    )
  }
  const renderItemWeeklySpecial= ({ item }) => {
    const ImgPath = item.images.map((items) => items.src)
    return (
      <TouchableOpacity style={[styles.listView,{backgroundColor: "#45f4f7"}]} onPress={()=>navigation.push("ListPage",{flag:"2"})}>
      <Image style={styles.productImg} source={{ uri: ImgPath[0] }} />
      <View style={styles.absolute}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
      </TouchableOpacity>
    )
  }
  const renderPage = (image, index) => {
    return (
      <View key={index}>
        <Image style={{ borderRadius: wp(3), width: BannerWidth - wp(5), height: BannerHeight, alignSelf: 'center' }} source={{ uri: image.banner }} />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView   refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
         
        <View style={styles.Bannercontainer}>
          <Carousel
            autoplay
            autoplayTimeout={5000}
            loop
            index={0}
            pageSize={BannerWidth}
            showsPageIndicator={false}
          >
            {festivalOfferData.map((image, index) => renderPage(image, index))}
          </Carousel>
        </View>
        
          <View style={styles.productRow}>
        <Text style={styles.topSellers}>{topSellerData ? "Top Sellers": ""}</Text>
        <TouchableOpacity onPress={()=>navigation.push("ListPage",{flag:"1"})}>
        <Text style={styles.view}>{topSellerData ? "View":""}</Text>
        </TouchableOpacity>
        </View>
         
        <View>
          <FlatList
            horizontal={true}
            data={topSellerData}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        
        <View style={styles.productRow}>
        <Text style={styles.topSellers}>{weeklySpecialData ? "Weekly Special" : ''}</Text> 
        <TouchableOpacity onPress={()=>navigation.push("ListPage",{flag:"2"})}>
        <Text style={styles.view}>{weeklySpecialData ? "View":""}</Text>
        </TouchableOpacity>
        </View> 

        <View>
          <FlatList
            horizontal={true}
            data={weeklySpecialData}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItemWeeklySpecial}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        
        <View style={styles.productRow}>
        <Text style={styles.topSellers}>{featuredProductsData ? "Feature Products": ""}</Text> 
        <TouchableOpacity onPress={()=>navigation.push("ListPage" ,{flag:"3"})}>
        <Text style={styles.view}>{featuredProductsData ?"View":""}</Text>
        </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal={true}
            data={featuredProductsData}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItemFeaturedProducts}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
