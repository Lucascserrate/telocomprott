import { View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchIcon from '../assets/search.svg'
import { useDispatch } from 'react-redux';
import { getByName } from '../redux/actions';

const SearchBar = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    const handleInput = (input) => {
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
        paddingHorizontal: 20,
        paddingVertical: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
});

export default SearchBar;
