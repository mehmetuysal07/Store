import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({

item: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
  outOfStock: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
}
)
export default styles;