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


const Search = ({ back, searchbar, filters, setCurrent, showFilters, setShowFilters }) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <View style={styles.container}>
            {
                back && <TouchableOpacity style={styles.box} onPress={handleNavigate}><Back height={24} width={25} /></TouchableOpacity>

            }
            {
                searchbar && <SearchBar setCurrent={setCurrent} />
            }
            {
                filters && <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
                    <Image style={styles.filtersIcon} source={require('../assets/filters.png')} />
                </TouchableOpacity>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 30,
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(100),
        backgroundColor: colors.bgDark,
    },
    box: {
        paddingVertical: 5
    },
    filtersIcon: {
        height: 25,
        width: 25,
        marginRight: 2,
    }
});

export default Search;
