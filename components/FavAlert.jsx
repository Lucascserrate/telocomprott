import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FavAlert = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>Añadido a favoritos</Text>
                <Image style={styles.img} source={require('../assets/check.gif')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: hp(4),
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 20
    },
    box: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    img: {
        height: 25,
        width: 25,
    },
});

export default FavAlert;
