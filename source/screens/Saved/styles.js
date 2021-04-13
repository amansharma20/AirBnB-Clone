import { StyleSheet } from 'react-native';

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
    savedimage: {
        width: 375,
        height: 250,
        resizeMode: 'stretch',
    },
    imagecontainer: {
        paddingTop: 0,
    }
});

export default styles;