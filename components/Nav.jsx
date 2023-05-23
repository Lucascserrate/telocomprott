import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../utils/styles';
import { useNavigate } from 'react-router-native';


const Nav = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
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
        height: 60,
        backgroundColor: colors.bgDark,
        position: 'absolute',
        bottom: 20
    },
    img: {
        height: 30,
        width: 30,
    }
});

export default Nav;
