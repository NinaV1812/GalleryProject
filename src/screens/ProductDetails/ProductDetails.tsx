import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Image,
  ScrollView,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Carousel from 'react-native-reanimated-carousel';
import {Text} from '@rneui/themed';
import {styles, screen} from './ProductDetails.style';
import {Images} from '../../store/types';

interface Props {
  comment: any;
  addComment: any;
}
const ProductDetails = ({comment, addComment}: Props) => {
  const {
    params: {data},
  } = useRoute<any>();
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {});
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {});

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const dispatch = useDispatch();
  console.log('text', text);
  const onChangeText = (t: string) => setText(t);

  const onSubmitText = useCallback(() => {
    dispatch(addComment({id: data.id, content: text}));
  }, [dispatch, addComment, data.id, text]);

  const imagesArray = useMemo(
    () => data?.images?.map((image: Images) => image?.original),
    [data.images],
  );

  const productsComment = useMemo(
    () => comment.find((commentary: any) => commentary.id === data.id),
    [comment, data.id],
  );
  console.log('productsComment', productsComment);
  const textValue = useMemo(
    () => (text.length ? text : productsComment?.content),
    [text, productsComment?.content],
  );
  console.log('textValue', textValue);

  const renderItem = ({item}: {item: string}) => {
    return (
      <View style={styles.productContainer}>
        <Image style={styles.image} source={{uri: item}} resizeMode={'cover'} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={100}>
        <ScrollView>
          <Carousel
            width={screen}
            height={300}
            data={imagesArray}
            renderItem={renderItem}
          />
          <View style={styles.textContainer}>
            <Text h3 style={styles.titleText}>
              {data?.title}
            </Text>
            <Text h4>{data?.price} €</Text>
            <Text h4 style={styles.subtitles}>
              About product:{' '}
            </Text>
            <Text h4>{data?.description}</Text>
            <Text h4 style={styles.subtitles}>
              Specification:{' '}
            </Text>
            <Text h4>{data?.specification}</Text>
            <Text h4 style={styles.subtitles}>
              Leave your comment here:
            </Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={t => onChangeText(t)}
            value={textValue}
            onSubmitEditing={onSubmitText}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
export default ProductDetails;
