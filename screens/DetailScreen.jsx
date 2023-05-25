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
import FavButton from '../components/favButton';
import { colors } from '../utils/styles';

const DetailScreen = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => setDetail(res.data))

    }, [])
    const brand = detail?.brand.replace(/\s/g, '');
    return (
        <View style={styles.container}>
            <Search back={true} />
            <View>
                <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>{detail?.title}</Text>
                    <View style={styles.centerImage}>
                        <Image style={styles.img} resizeMode='contain' source={{ uri: detail?.thumbnail }} />
                    </View>
                    <View style={styles.tag} >
                        <Text style={styles.text}>{detail?.category}</Text>
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
                            <FavButton />
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
        height: hp(80)
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 15
    },
    centerImage: {
        width: wp(100),
        alignItems: 'center'

    },
    img: {
        height: 250,
        width: wp(96),
        borderRadius: 12
    },
    tag: {
        alignItems: 'flex-end',
        margin: 10,
    },
    text: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: colors.bgDark,
        borderRadius: 5,
        color: '#fff',
        fontWeight: 'bold'
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
        color: '#686868'
    },
    rowValue: {
        fontSize: 18,
        color: colors.secundary

    },
    description: {
        marginHorizontal: 15
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
        height: 50,
        width: wp(50),
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    webText: {
        fontWeight: 'bold',
        color: colors.bgDark
    },
    visit: {
        marginTop: 15,
        fontSize: 13,
        color: '#454545'
    },
    brand: {
        color: colors.secundary
    }

});

export default DetailScreen;
