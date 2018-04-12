import { StyleSheet } from 'react-native';

const styling = StyleSheet.create({
  container: {
    paddingTop: 50,
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
  nav: {
    fontSize: 20,
  },
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    height: 60,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    width: '100%',
    flexDirection: "row",
  },
  endnav: {
    fontSize: 15,
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
  },
  launch: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  launchtitle: {
    fontSize: 40,
  },
  launchtextbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  launchtext: {
    fontSize: 20,
  }
})

export default styling;
