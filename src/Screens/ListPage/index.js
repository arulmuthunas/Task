import React, { useEffect } from "react";
import { Text,FlatList, TouchableOpacity, SafeAreaView, Image, View, } from "react-native";
import { styles } from './Styles'
import { useSelector, useDispatch } from 'react-redux'
import { getList } from '../../Redux/Action'
const ListPage = ({ route }) => {
  const { topSellerData, weeklySpecialData, featuredProductsData } = useSelector(state => state.getReducer);
  const dispatch = useDispatch();
  const { flag } = route.params;

  useEffect(() => {
    dispatch(getList())
  }, []);

  const renderItem = ({ item }) => {
    const ImgPath = item.images.map((items) => items.src)
    return (
      <TouchableOpacity style={styles.listView}>
        <Image style={styles.productImg} source={{ uri: ImgPath[0] }} />
        <View style={styles.absolute}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>₹{item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.topSellers}>{flag == 1 && "Top Sellers"}{flag == 2 && "Weekly Special"}{flag == 3 && "Featured Products"}</Text> 
          <FlatList
          style={styles.flatlistView}
            numColumns={2}
            data={ flag == 1 && topSellerData || flag == 2 && weeklySpecialData || flag == 3 && featuredProductsData}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
    </SafeAreaView>
  );
};
export default ListPage;
