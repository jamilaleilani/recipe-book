import { StyleSheet } from 'react-native';

const styling = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    position: 'absolute',
    top: 0,
    height: 60,
    backgroundColor: 'pink',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
    width: '100%'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 10,
    width: 200,
    margin: 10
  },
  input: {
    backgroundColor: 'rgb(230,230,230)',
    width: 200,
    padding: 10,
    margin: 10
  },
  heading: {
    fontSize: 20,
    paddingTop: 10,
    textAlign: 'center'
  },
  logout: {
    alignItems: 'center',
    backgroundColor: 'rgb(200,200,255)',
    padding: 10,
    width: 200,
    marginTop: 50
  }
})

export default styling;
