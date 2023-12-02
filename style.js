import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    
    padding: 20,
    backgroundColor: '#ffffff',
  },
  heading: {
    alignItems: 'center',
    marginBottom: 20,
   
  },
  headWord: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000'
  },
  headline: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  form: {
    marginTop: 20,
    justifyContent: 'center',
    color: '#000000'
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color: '#000000',
  },
  input: {
    fontSize: 16,
    borderColor: '#000000',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#000000'
  },
  button: {
    marginTop: 10,
    height: 50,
    width: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  content:{
    alignItems: 'flex-start',
    // backgroundColor: 'red',
    marginTop: 20,
    borderRadius: 10
  },
  content1:{
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  mainButtons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  safeArea:{
    height: 'auto'
  }
});

export default styles;
