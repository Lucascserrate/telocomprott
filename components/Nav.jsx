import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goHome}>
                <Image source={require('../assets/home.png')} style={styles.img} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/heart.png')} style={styles.img} />
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
        height: 55,
        backgroundColor: colors.bgDark,
        position: 'absolute',
        bottom: 0
    },
    img: {
        height: 22,
        width: 22,
    }
});

export default Nav;
