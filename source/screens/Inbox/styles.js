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
    subtitlebold: {
        fontWeight: 'bold',
        padding: 22,
        fontSize: 16.5,
        justifyContent: 'space-around',
    },
    subtitle: {
        paddingRight: 100,
        marginTop: -35,
        fontWeight: '500',
        padding: 22,
        fontSize: 16,
        justifyContent: 'space-around',
    }
});

export default styles;