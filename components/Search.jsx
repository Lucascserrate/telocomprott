import { View, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchBar from './SearchBar';
import { colors } from '../utils/styles';

const Search = () => {
    return (
        <View style={styles.container}>
            <SearchBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: wp(100),
        height: 50,
        backgroundColor: colors.bgDark,
    },
});

export default Search;
