import {StyleSheet, Dimensions} from 'react-native';

export const screen = Dimensions.get('screen').width;
const imageHeightWidth = 150;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169e1',
    paddingBottom: 50,
  },
  productContainer: {
    marginVertical: 40,
    backgroundColor: '#6941e1',
    alignContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: imageHeightWidth,
    width: imageHeightWidth,
    borderRadius: 8,
    marginVertical: 40,
  },
  titleText: {
    fontWeight: '700',
    paddingVertical: 20,
    color: '#e1b941',
  },
  subtitles: {
    fontWeight: '500',
    color: '#e1b941',
    marginVertical: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
  },
  input: {
    height: 100,
    padding: 10,
    backgroundColor: '#e1b941',
    borderRadius: 8,
    marginHorizontal: 10,
  },
  textInputContainer: {
    marginBottom: 40,
    marginHorizontal: 20,
  },
});
