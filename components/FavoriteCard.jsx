import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from '../utils/styles';
import { useNavigate } from 'react-router-native';

const FavoriteCard = ({ id, title, price, images, handleRemove }) => {
    const navigate = useNavigate()
    const goProduct = () => {
        navigate(`/home/${id}`)
    }
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: images[0] }} />
            <View style={styles.between}>
                <View style={styles.textBox}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>{`$.${price}`}</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity onPress={goProduct}>
                        <Text style={styles.buttonText}>Ver producto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleRemove(id)}>
                        <Text style={styles.buttonClose}>✖</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        gap: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    img: {
        borderRadius: 8,
        height: hp(21),
        width: wp(31),
    },
    between: {
        justifyContent: 'space-between'
    },
    textBox: {
        gap: 5
    },
    title: {
        fontWeight: '500',
        fontSize: hp(1.85)
    },
    price: {
        fontWeight: 'bold',
        fontSize: hp(2.4),

    },
    buttonBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
    },
    buttonText: {
        backgroundColor: colors.bgDark,
        color: '#fff',
        fontSize: hp(2),
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
        textAlign: 'center',

    },
    buttonClose: {
        backgroundColor: colors.bgDark,
        color: '#fff',
        fontSize: hp(2),
        paddingTop: 6,
        paddingBottom: 10,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignSelf: 'center'
    },
});

export default FavoriteCard;
