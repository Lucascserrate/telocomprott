import { View, Text, StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Search from '../components/Search';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Search />
            <Text>MyComponent</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default HomeScreen;
