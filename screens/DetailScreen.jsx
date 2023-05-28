import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Search from '../components/Search';
import { Image } from 'react-native-elements';
import Nav from '../components/Nav';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-native';
import axios from 'axios';
import FavButton from '../components/FavButton';
import { colors } from '../utils/styles';
import FavAlert from '../components/FavAlert';
import Carousel from '../components/Carousel';

const DetailScreen = () => {
    const [detail, setDetail] = useState()
    const [alert, setAlert] = useState(false)
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => setDetail(res.data))

    }, [])
    const brand = detail?.brand.replace(/\s/g, '');
    return (
        <View style={styles.container}>
            <Search back={true} />
            {alert && <FavAlert />}
            <View>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>{detail?.title}</Text>
                    <Carousel />
                    <View style={styles.tag} >
                        <Text style={styles.text}>{detail?.category}</Text>
                        <View style={styles.boxRow}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: hp(1.85) }}>{detail?.rating}</Text>
                            <Image resizeMode='contain' style={styles.star} source={require('../assets/star.png')} />
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.flexStart}>
                            <View style={styles.row}>
                                <Text style={styles.rowKey}>Precio:</Text>
                                <Text style={styles.rowValue}>$.{detail?.price}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.rowKey}>Stock:</Text>
                                <Text style={styles.rowValue}>{detail?.stock}</Text>
                            </View>
                            <Text style={styles.rowKey}>Descripcion:</Text>
                        </View>
                        <Text style={styles.description}>{detail?.description}</Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.webButton}>
                                <Text style={styles.webText}>Sitio Web</Text>
                            </TouchableOpacity>
                            <FavButton detail={detail} setAlert={setAlert} />
                        </View>
                        <Text style={styles.visit} >Si quieres saber mas visitanos en:</Text>
                        <TouchableOpacity>
                            <Text style={styles.brand}>www.{brand}.com</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <Nav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        width: wp(100),
        backgroundColor: colors.bgLight
    },
    scroll: {
        height: hp(80),
    },
    title: {
        fontSize: hp(3),
        fontWeight: 'bold',
        margin: 15
    },
    tag: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        width: wp(96),
        alignSelf: 'center',
    },
    text: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: colors.bgDark,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: hp(1.85)
    },
    boxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        backgroundColor: colors.bgDark,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,

    },
    star: {
        height: hp(2.5),
        width: wp(4.6),
    },
    box: {
        width: wp(100),
        alignItems: 'center',
        gap: 5
    },
    flexStart: {
        width: wp(100),
        paddingHorizontal: 25,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    rowKey: {
        color: '#686868',
        fontSize: hp(1.85)
    },
    rowValue: {
        fontSize: hp(2.4),
        color: colors.secundary

    },
    description: {
        alignItems: 'flex-start',
        width: wp(100),
        paddingHorizontal: 25,
        fontSize: hp(1.85)
    },
    buttons: {
        marginTop: 10,
        width: wp(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    webButton: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(6.52),
        width: wp(55),
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    webText: {
        fontWeight: 'bold',
        color: colors.bgDark,
        fontSize: hp(1.85)

    },
    visit: {
        marginTop: 15,
        fontSize: hp(1.7),
        color: '#454545'
    },
    brand: {
        color: colors.secundary,
        fontSize: hp(1.85),
        paddingBottom: 10

    }

});

export default DetailScreen;
