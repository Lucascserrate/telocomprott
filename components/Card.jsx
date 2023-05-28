import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';
import { getById } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Card = ({ id, title, images, price }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleNavigate = () => {
        dispatch(getById(id))
        navigate(`/home/${id}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.img} source={{ uri: images[0] }} resizeMode='contain' />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{`$.${price}`}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleNavigate} style={styles.arrowBox}>
                <Image resizeMode='contain' style={styles.arrow} source={require('../assets/arrowRight.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 14,
        paddingVertical: 4,
        marginTop: hp(1.3),
        marginHorizontal: wp(3),
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    img: {
        height: hp(10),
        width: wp(21.7),
        borderRadius: 8,
        marginVertical: 4,

    },
    title: {
        fontWeight: 'bold',
        fontSize: hp(2),
        width: wp(50),

    },
    price: {
        fontSize: hp(1.85),
    },
    arrowBox: {
        padding: 5,
    },
    arrow: {
        height: 20,
        height: hp(2.7),
        width: wp(3.7),
    }
});

export default Card;
