import { View, StyleSheet } from 'react-native';
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
import SearchModal from '../components/SearchModal';

const HomeScreen = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    // const sortProducts = useSelector(state => state.sortProducts)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    // console.log(sortProducts);

    // Pagination
    const [current, setCurrent] = useState(1)
    const [perPage] = useState(5)
    const max = Math.ceil(products.length / perPage);
    return (
        <View style={styles.container}>
            <Search searchbar={true} />
            {
                products?.slice((current - 1) * perPage, (current - 1) * perPage + perPage).map((e, i) => <Card key={i} id={e.id} title={e.title} images={e.images} price={e.price} />)
            }
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
    flat: {
        alignItems: 'center',
        width: wp(100),
    },

});

export default HomeScreen;
