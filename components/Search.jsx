import { View, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchBar from './SearchBar';
import { colors } from '../utils/styles';
import Back from '../assets/back-arrow.svg'


const Search = () => {
    return (
        <View style={styles.container}>
            <Back height={20} width={20} />
            <SearchBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: wp(100),
        height: 55,
        backgroundColor: colors.bgDark,
    },
});

export default Search;
