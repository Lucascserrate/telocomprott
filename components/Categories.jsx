import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '../utils/styles';
import { useDispatch } from 'react-redux';
import { getByCategory, setCurrent } from '../redux/actions';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const categories = [
    'Celulares',
    'Laptops',
    'Fragancias',
    'Skincare',
    'Comestibles',
    'Hogar',
]
const Categories = () => {
    const dispatch = useDispatch()
    const setCategory = (category) => {
        dispatch(getByCategory(category))
        dispatch(setCurrent(1))
    }
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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

const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 2,
    },
    tag: {
        backgroundColor: colors.bgDark,
        borderRadius: 5,
        paddingHorizontal: 16,
        paddingVertical: 6,
        marginRight: 8,
        flexDirection: 'row',

    },
    text: {
        color: '#fff',
        fontSize: hp(1.85)
    }
});

export default Categories;
