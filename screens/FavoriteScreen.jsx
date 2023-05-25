import { View, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Search from '../components/Search';
import Nav from '../components/Nav';
import { colors } from '../utils/styles';
const FavoriteScreen = () => {
    return (
        <View style={styles.container}>
            <Search back={true} />
            <Nav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        backgroundColor: colors.bgLight
    },
});

export default FavoriteScreen;
