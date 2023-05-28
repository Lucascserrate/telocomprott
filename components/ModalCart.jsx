import CartLottie from 'lottie-react-native';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ModalCart = ({ displayModal }) => {

    return (
        <Modal
            visible={displayModal}
            transparent={true}
            animationType="fade"
        >
            <View style={styles.container} >
                <View style={styles.modal}>
                    <CartLottie style={styles.img} autoPlay loop={false} source={require('../assets/lottie/cart-checkout.json')} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
    },
    modal: {
        width: wp('50%'),
        height: hp('25%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: 5
    },
    img: {
        height: hp(13),
    },
});

export default ModalCart;
