import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const Card = ({ title, images, price }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <ImageBackground style={styles.img} source={{ uri: images[0] }} resizeMode='contain' />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{`$.${price}`}</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Image style={styles.arrow} source={require('../assets/arrowRight.png')} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10
    },
    img: {
        height: 85,
        width: 85,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15
    },
    arrow: {
        height: 21,
        width: 13
    }
});

export default Card;
