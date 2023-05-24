import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Search from '../components/Search';
import { Image } from 'react-native-elements';
import Nav from '../components/Nav';
import { useEffect } from 'react';
import { cleanDetail } from '../redux/actions';

const DetailScreen = () => {
    // const dispatch = useDispatch()
    const detail = useSelector(state => state.detail);
    /*     useEffect(() => {
            return dispatch(cleanDetail())
    
        }, []) */
    console.log('detail', detail);
    return (
        <View style={styles.container}>
            <Search back={true} />
            <ScrollView>
                <Text style={styles.title}>{detail?.title}</Text>
                <Image style={styles.img} resizeMode='contain' source={{ uri: detail?.images[0] }} />
                <View style={styles.box}>
                    <View style={styles.row}>
                        <Text style={styles.rowKey}>Precio:</Text>
                        <Text style={styles.rowValue}>$.{detail.price}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.rowKey}>Stock:</Text>
                        <Text style={styles.rowValue}>{detail.stock}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.rowKey}>Categoria:</Text>
                        <Text style={styles.rowValue}>{detail.category}</Text>
                    </View>
                </View>
            </ScrollView>
            <Nav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        width: wp(100),
        backgroundColor: '#E2E7EE'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 15
    },
    img: {
        height: 250,
        width: wp(100),

    },
    box: {
        marginTop: 20,
        width: wp(100),
        alignItems: 'center',
        gap: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    rowKey: {
        color: '#686868'
    },
    rowValue: {
        fontSize: 18,
        color: '#2887AD'

    }
});

export default DetailScreen;
