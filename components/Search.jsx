import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchBar from './SearchBar';
import { colors } from '../utils/styles';
import Back from '../assets/back-arrow.svg'
import { useNavigate } from 'react-router-native';
import { Image } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { resetFilters } from '../redux/actions';
import { useState } from 'react';


const Search = ({ back, searchbar, reset, setCurrent }) => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/home')
    }
    const handleReset = () => {
        dispatch(resetFilters())
        setInput('')
    }
    return (
        <View style={styles.container}>
            {
                back && <TouchableOpacity style={styles.box} onPress={handleNavigate}>
                    <Back height={24} width={25} />
                </TouchableOpacity>

            }
            {
                searchbar && <SearchBar setCurrent={setCurrent} input={input} setInput={setInput} />
            }
            {
                reset && <TouchableOpacity onPress={handleReset}>
                    <Image style={styles.reloadIcon} source={require('../assets/reload.png')} />
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: hp(1.5),
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(100),
        backgroundColor: colors.bgDark,
    },
    box: {
        paddingVertical: 5
    },
    reloadIcon: {
        height: 20,
        width: 20,
        marginRight: 5,
    }
});

export default Search;
