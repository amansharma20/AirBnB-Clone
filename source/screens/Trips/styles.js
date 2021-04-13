import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginLeft: 22,
        marginTop: 25
    },
    subtitle: {
        fontWeight: '500',
        padding: 22,
        fontSize: 16.5,
        justifyContent: 'space-around',
    },
    subtitlebold: {
        fontWeight: 'bold',
    },
    tripimage: {
        marginTop: 100,
        width: null,
        height: 300,
        padding: 0,
        resizeMode: 'cover',
    },
    tripbuttoncontainer: {
        marginTop: 575,
        position: 'absolute',
    },
    tripbutton: {
        backgroundColor: 'black',
        height: 45,
        width: Dimensions.get('screen').width - 25,
        borderRadius: 8,
        marginHorizontal: 12.5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
    },
    tripbuttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomcontainer: {
        marginTop: 65,
        padding: 22,
    },
    bottomtext: {
        fontSize: 16
    },
    bottomtextbold: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
});

export default styles;