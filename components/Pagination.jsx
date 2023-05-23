import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Pagination = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity><Image style={styles.img} source={require('../assets/arrowLeft.png')} /></TouchableOpacity>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>de</Text>
            <Text style={styles.text}>1</Text>
            <TouchableOpacity><Image style={styles.img} source={require('../assets/arrowRight.png')} /></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: 30
    },
    img: {
        height: 25,
        width: 14,
        marginHorizontal: 10
    },
    text: {
        fontSize: 18
    }
});

export default Pagination;
