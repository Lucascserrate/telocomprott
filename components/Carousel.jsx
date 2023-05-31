import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useParams } from 'react-router-native';

const Carousel = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState()
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => setDetail(res.data))

    }, [])

    return (
        <>
            <View style={styles.centerImage}>
                <Image style={styles.img} resizeMode='contain' source={{ uri: detail?.images[display] }} />
            </View>
            <View style={styles.smallImgBox}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {
                        detail?.images.map((e, i) => (
                            <TouchableOpacity key={e} onPress={() => setDisplay(i)} /* style={styles.tag} */ >
                                <Image style={styles.smallImg} source={{ uri: e }} resizeMode='contain' />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    centerImage: {
        width: wp(100),
        alignItems: 'center'

    },
    img: {
        height: hp(33),
        width: wp(96),
        borderRadius: 12,
    },
    smallImgBox: {
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 2,
    },
    smallImg: {
        borderRadius: 8,
        height: hp(9),
        width: wp(29.2),
        marginRight: 10
    },
});

export default Carousel;
