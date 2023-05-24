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
import { useNavigate } from 'react-router-native';


const HomeScreen = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const [skip, setSkip] = useState(0)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    // Pagination
    const [input, setInput] = useState(1)
    const [current, setCurrent] = useState(1)
    const [perPage] = useState(5)
    const max = Math.ceil(products.length / perPage);
    return (
        <View style={styles.container}>
            <Search searchbar={true} />
            {
                products?.slice((current - 1) * perPage, (current - 1) * perPage + perPage).map((e, i) => <Card key={i} id={e.id} title={e.title} images={e.images} price={e.price} />)
            }
            <Pagination current={current} setCurrent={setCurrent} max={max} input={input} setInput={setInput} />
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
