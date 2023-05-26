import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../utils/styles';
import { Image } from 'react-native-elements';
import { useNavigate } from 'react-router-native';
const Welcome = () => {
    const navigate = useNavigate()

    const goHome = () => {
        navigate('/home')
    }
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.img} resizeMode='contain' source={require('../assets/phone.png')} />
                <Text style={styles.title}>Bienvenidos a CatalogoApp</Text>
            </View>
            <Text style={styles.text}>Contamos con una gran cantidad de productos</Text>
            <View style={styles.row}>
                <Image style={styles.rowImg} resizeMode='contain' source={require('../assets/phone1.png')} />
                <Text style={styles.text}>Telefonos</Text>
            </View>
            <View style={styles.row}>
                <Image style={styles.rowImg} resizeMode='contain' source={require('../assets/laptop.png')} />
                <Text style={styles.text}>Laptops</Text>
            </View>
            <View style={styles.row}>
                <Image style={styles.rowImg} resizeMode='contain' source={require('../assets/perfume.png')} />
                <Text style={styles.text}>Fragancias</Text>
            </View>
            <View style={styles.row}>
                <Image style={styles.rowImg} resizeMode='contain' source={require('../assets/crema.png')} />
                <Text style={styles.text}>Skincare</Text>
            </View>
            <View style={styles.row}>
                <Image style={styles.rowImg} resizeMode='contain' source={require('../assets/comestibles.png')} />
                <Text style={styles.text}>Comestibles</Text>
            </View>
            <View style={styles.row}>
                <Image style={styles.rowImg} resizeMode='contain' source={require('../assets/hogar.png')} />
                <Text style={styles.text}>Hogar</Text>
            </View>
            <Text style={styles.text}>Te invitamos a vivir la experiencia CatalogoApp</Text>
            <View style={styles.boxButton}>
                <TouchableOpacity onPress={goHome}>
                    <Text style={styles.btn}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(100),
        height: hp(100),
        backgroundColor: colors.bgLight,
        alignItems: 'center',
    },
    box: {
        alignItems: 'center',
        width: wp(100),
        height: hp(30),
        backgroundColor: colors.bgDark,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        gap: 10,
        paddingTop: hp(7),
    },
    img: {
        width: wp(23),
        height: hp(11.8),
        marginRight: 20
    },
    title: {
        color: '#fff',
        fontSize: hp(3.2)
    },
    row: {
        width: wp(70),
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    rowImg: {
        width: wp(8),
        height: hp(4),
    },
    text: {
        fontSize: hp(2.1),
        paddingVertical: hp(2),
    },
    boxButton: {
        alignItems: 'center',
        width: wp(100),
        height: hp(12),
        position: 'absolute',
        bottom: 0
    },
    btn: {
        color: '#fff',
        backgroundColor: colors.bgDark,
        fontSize: hp(2.5),
        marginVertical: hp(2),
        paddingVertical: hp(1.1),
        width: wp(50),
        borderRadius: 5,
        textAlign: 'center',
    }
});

export default Welcome;
