import { View, StyleSheet, TextInput } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchIcon from '../assets/search.svg'
import { useDispatch } from 'react-redux';
import { getByName, setCurrent } from '../redux/actions';

const SearchBar = ({ input, setInput }) => {
    const dispatch = useDispatch()

    const handleInput = (input) => {
        dispatch(setCurrent(1))
        setInput(input)
        dispatch(getByName(input))
    }
    return (
        <View style={styles.container}>
            <SearchIcon />
            <TextInput
                placeholder='Nombre del producto...'
                onChangeText={handleInput}
                value={input}
                placeholderTextColor='#999'
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp('80%'),
        backgroundColor: '#FEFEFE',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: wp(5),
        paddingVertical: hp(0.7),
    },
    input: {
        fontSize: hp(1.85)
    }
});

export default SearchBar;
