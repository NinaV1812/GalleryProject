import {StyleSheet} from 'react-native';

const imageHeightWidth = 150;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4169e1',
  },
  productContainer: {
    margin: 20,
    backgroundColor: '#6941e1',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  image: {
    height: imageHeightWidth,
    width: imageHeightWidth,
    borderRadius: 8,
  },
  titleText: {
    fontWeight: '500',
    paddingVertical: 20,
    color: '#e1b941',
  },
  priceText: {
    padding: 10,
  },
});
