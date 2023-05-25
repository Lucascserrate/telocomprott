import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../utils/styles';
import { useDispatch } from 'react-redux';
import { getByCategory } from '../redux/actions';
import { useEffect } from 'react';

const categories = [
    'smartphones',
    'laptops',
    'fragrances',
    'skincare',
    'groceries',
    'home-decoration',
]
const Categories = () => {
    const dispatch = useDispatch()
    const setCategory = (category) => {
        dispatch(getByCategory(category))
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    categories?.map(e => (
                        <TouchableOpacity onPress={() => setCategory(e)} style={styles.tag} key={e}>
                            <Text style={styles.text}>{e}</Text>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 12,
    },
    scroll: {
    },
    tag: {
        backgroundColor: colors.bgDark,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginRight: 8,
        flexDirection: 'row',

    },
    text: {
        color: '#fff'
    }
});

export default Categories;
