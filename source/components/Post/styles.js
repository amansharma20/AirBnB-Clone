import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    bedroom: {
        marginVertical: 10,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        color: '#000000',
        fontSize: 18,
        marginVertical: 0,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    newprice: {
        color: '#000000',
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 18,
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    },
});

export default styles;