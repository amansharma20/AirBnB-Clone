import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        backgroundColor: 'white',
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 12,
        marginBottom: 72,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        marginLeft: 14,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchButton: {
        position: 'absolute',
        backgroundColor: 'white',
        height: 45,
        width: Dimensions.get('screen').width - 25,
        borderRadius: 25,
        marginHorizontal: 12.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
        zIndex: 100,
    },
    searchbuttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default styles;