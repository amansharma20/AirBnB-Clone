import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    maintext: {
        color: 'black',
        fontSize: 16
    },
  container: {
    // marginTop: 10,
    height: 300,
    padding: 7,
  },
    innerContainer: {
        // marginTop: 10,
        width: 250
  },
    title: {
        marginTop: 10,
        fontWeight: 'bold',
  },
    titletext: {
        fontSize: 18,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
  },
    subtitleOnetext: {
        fontSize: 16,
        fontWeight: 'bold',
        
  },
    subOnetext: {
        color: 'grey'
    
  },
    row: {
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginBottom: 20,
        paddingVertical: 10,
    },
    lastrow: {
        // width: 250,
        marginBottom: 20,
        paddingVertical: 10,
    },
  
});

export default styles;
