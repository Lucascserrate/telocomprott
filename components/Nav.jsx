import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../utils/styles';
import { useNavigate } from 'react-router-native';


const Nav = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/')
    }
    const goFav = () => {
        navigate('/fav')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goHome} style={styles.box}>
                <Image source={require('../assets/home.png')} style={styles.img} />
                <Text style={styles.dot}>━</Text>
            </TouchableOpacity>
            <Image source={require('../assets/phone.png')} style={styles.logo} />
            <TouchableOpacity onPress={goFav} style={styles.box}>
                <Image source={require('../assets/heart.png')} style={styles.img} />
                <Text style={styles.dot}>━</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: wp(100),
        height: hp(7.2),
        backgroundColor: colors.bgDark,
        position: 'absolute',
        bottom: 0
    },
    box: {
        alignContent: 'center',
        gap: 2,
        paddingTop: 10
    },
    img: {
        height: 22,
        width: 22,
    },
    dot: {
        alignSelf: 'center',
        color: '#fff',
        lineHeight: 12
    },
    logo: {
        height: 30,
        width: 30,
    }
});

export default Nav;
