import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Pagination = ({ current, setCurrent, max }) => {
    const next = () => {
        if (current < max) {
            setCurrent(current + 1)
        }
    }
    const previous = () => {
        if (current > 1) {
            setCurrent(current - 1)
        }

    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={previous}><Image style={styles.img} source={require('../assets/arrowLeft.png')} /></TouchableOpacity>
            <Text style={styles.text}>{current}</Text>
            <Text style={styles.text}>de</Text>
            <Text style={styles.text}>{max}</Text>
            <TouchableOpacity onPress={next}><Image style={styles.img} source={require('../assets/arrowRight.png')} /></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(100),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: 30,
        position: 'absolute',
        bottom: hp(8.5)
    },
    img: {
        height: 25,
        width: 14,
        marginHorizontal: 10
    },
    text: {
        fontSize: 18
    }
});

export default Pagination;
