import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {data} from '../data';
import {Product} from '../../store/types';
import {
  StyledView,
  StyledText,
  StyledImage,
  StyledTouchableOpacity,
} from '../../../styles';

const ProductList = () => {
  const navigation = useNavigation();

  const renderItem = useCallback(
    ({item, index}: {item: Product; index: number}) => (
      <StyledTouchableOpacity
        onPress={() =>
          navigation.navigate(
            'ProductDetails' as never,
            {data: data?.[index]} as never,
          )
        }
        classes={[
          'm:5',
          'bg:indigo-300',
          'p:5',
          'justify:center',
          'items:center',
          'rounded:md',
        ]}>
        <StyledImage
          classes={['w:40', 'h:40', 'rounded:md', 'resize:cover']}
          source={{uri: item?.images?.[0]?.thumb}}
        />
        <StyledText classes={['text:xl', 'color:gray-900', 'pb:2', 'pt:6']}>
          {item?.title}
        </StyledText>
        <StyledText classes={['text:2xl', 'color:gray-900', 'pb:2', 'pt:6']}>
          {item?.price} €
        </StyledText>
      </StyledTouchableOpacity>
    ),
    [navigation],
  );

  return (
    <StyledView
      classes={['flex:1', 'bg:purple-100', 'justify:center', 'items:center']}>
      <FlatList data={data} renderItem={renderItem} />
    </StyledView>
  );
};
export default ProductList;
