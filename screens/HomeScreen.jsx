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


const HomeScreen = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const [skip, setSkip] = useState(0)

    useEffect(() => {
        dispatch(getProducts(skip))
    }, [dispatch])
    return (
        <View style={styles.container}>
            <Search />
            {
                products?.map(e => <Card title={e.title} images={e.images} price={e.price} />)
            }
            <Pagination />
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
    flat: {
        alignItems: 'center',
        width: wp(100),
    },

});

export default HomeScreen;
