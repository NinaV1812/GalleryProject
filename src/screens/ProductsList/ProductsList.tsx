import React, {useCallback} from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from '@rneui/themed';
import {data} from '../data';
import {styles} from './ProductsList.style';
import {Product} from '../../store/types';

const ProductList = () => {
  const navigation = useNavigation();

  const renderItem = useCallback(
    ({item, index}: {item: Product; index: number}) => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetails', {data: data?.[index]})
        }
        style={styles.productContainer}>
        <Image
          style={styles.image}
          source={{uri: item?.images?.[0]?.thumb}}
          resizeMode={'cover'}
        />
        <Text h4 style={styles.titleText}>
          {item?.title}
        </Text>
        <Text h4 style={styles.priceText}>
          {item?.price} €
        </Text>
      </TouchableOpacity>
    ),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
export default ProductList;
