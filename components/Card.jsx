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
        navigate(`/${id}`)
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image style={styles.img} source={{ uri: images[0] }} resizeMode='contain' />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{`$.${price}`}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleNavigate} style={styles.arrowBox}>
                <Image style={styles.arrow} source={require('../assets/arrowRight.png')} />
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
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    img: {
        height: 85,
        width: 85,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        width: wp(60),

    },
    arrowBox: {
        paddingVertical: 5,
    },
    arrow: {
        height: 20,
        width: 12,
    }
});

export default Card;
