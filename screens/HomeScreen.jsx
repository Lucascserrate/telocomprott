import { View, StyleSheet, ScrollView, Text } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import { getProducts } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../components/Nav';
import Pagination from '../components/Pagination';
import Card from '../components/Card';
import { colors } from '../utils/styles';
import Categories from '../components/Categories';

const HomeScreen = () => {
    const dispatch = useDispatch()
    const sortProducts = useSelector(state => state.sortProducts)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    // Pagination
    const [current, setCurrent] = useState(1)
    const [perPage] = useState(5)
    const max = Math.ceil(sortProducts.length / perPage);
    return (
        <View style={styles.container}>
            <Search searchbar={true} reset={true} setCurrent={setCurrent} />
            <View>
                <ScrollView style={styles.scroll}>
                    <Categories setCurrent={setCurrent} />
                    {
                        sortProducts.length
                            ? sortProducts.slice((current - 1) * perPage, (current - 1) * perPage + perPage).map((e, i) => (
                                <Card key={i} id={e.id} title={e.title} images={e.images} price={e.price} />
                            ))
                            : <Text style={styles.notFound}>No se encontraron resultados</Text>
                    }
                </ScrollView>
            </View>
            <Pagination current={current} setCurrent={setCurrent} max={max} />

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
        height: hp(73)
    },
    notFound: {
        margin: 20,
        fontSize: 18,
        color: '#686868'
    }
});

export default HomeScreen;
