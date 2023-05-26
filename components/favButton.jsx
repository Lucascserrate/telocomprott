//import liraries
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { addFavorites, getFavorites } from '../utils/storage';

const FavButton = ({ detail, setAlert }) => {
    const [favorites, setFavorites] = useState()

    const parse = () => {
        getFavorites().then(value => setFavorites(JSON.parse(value)))
    }
    useEffect(() => {
        parse()
    }, [favorites])
    const timeout = (toggle) => {
        if (!toggle) {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 2000)
        }
    }
    const toggle = favorites?.find(e => e.id === detail?.id);
    const handleAdd = async () => {
        timeout(toggle)
        await addFavorites(detail)
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handleAdd}>
            {
                toggle
                    ? <Image style={styles.img} source={require('../assets/favFull.png')} resizeMode='contain' />
                    : <Image style={styles.img} source={require('../assets/favEmpty.png')} resizeMode='contain' />
            }
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(6.52),
        width: wp(27),
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    img: {
        height: hp(4),
        width: wp(6.4),
    }
});

//make this component available to the app
export default FavButton;
