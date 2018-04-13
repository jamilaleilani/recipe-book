import { StyleSheet } from 'react-native';

const styling = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgb(115,150,100)',
    padding: 10,
    width: 300,
    margin: 10,
  },
  loginbutton: {
    alignItems: 'center',
    backgroundColor: 'rgb(119,77,117)',
    padding: 10,
    width: 300,
    margin: 10,
    marginBottom: 180,
  },
  buttontext: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    fontFamily: 'Avenir',
  },
  input: {
    backgroundColor: 'rgb(230,230,230)',
    width: 300,
    padding: 10,
    margin: 10
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: 'rgb(119,77,117)',
    fontWeight: '600'
  },
  launch: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(119,77,117)',
  },
  launchtitle: {
    fontSize: 40,
    paddingTop: 270,
    paddingBottom: 30,
    textAlign: 'center',
    color: 'rgb(115,150,100)',
    fontFamily: 'Avenir',
    fontWeight: '600'
  },
  launchtextbox: {
    justifyContent: 'space-between',
  },
  launchtext: {
    fontSize: 20,
    paddingBottom: 30,
    color: 'white',
    fontFamily: 'Avenir',
  },
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(193,216,170)'
  },
  navbutton: {
    fontFamily: 'Avenir',
    color: 'black',
  }
})

export default styling;
