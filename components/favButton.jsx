//import liraries
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { addFavorites } from '../utils/storage';

const FavButton = ({ detail }) => {
    const [toggle, setToggle] = useState(false);

    const handleAdd = async () => {
        setToggle(!toggle)
        await addFavorites(detail)
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handleAdd}>
            {
                toggle
                    ? <Image style={styles.img} source={require('../assets/favFull.png')} />
                    : <Image style={styles.img} source={require('../assets/favEmpty.png')} />
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
        height: 50,
        width: wp(27),
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    img: {
        height: 25,
        width: 25
    }
});

//make this component available to the app
export default FavButton;
