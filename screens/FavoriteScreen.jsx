import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Search from '../components/Search';
import Nav from '../components/Nav';
import { colors } from '../utils/styles';
import FavoriteCard from '../components/FavoriteCard';
import { getFavorites, removeFavorite } from '../utils/storage';
import { useEffect, useState } from 'react';
const FavoriteScreen = () => {
    const [favorites, setFavorites] = useState()
    const parse = () => {
        getFavorites().then(value => setFavorites(JSON.parse(value)))
    }
    const handleRemove = (id) => {
        removeFavorite(id)
    }
    useEffect(() => {
        parse()
    }, [handleRemove])

    return (
        <View style={styles.container}>
            <Search back={true} />
            <Text style={styles.title}>Tus Favoritos</Text>
            <View style={styles.cardBox}>
                <ScrollView contentContainerStyle={styles.scroll}>
                    {
                        favorites?.length
                            ? favorites.map(e => <FavoriteCard key={e.id} id={e.id} title={e.title} price={e.price} images={e.images} handleRemove={handleRemove} />)
                            : <Text style={styles.empty}>Tu lista de favoritos esta vacia</Text>
                    }
                </ScrollView>
            </View>
            <Nav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: hp(100),
        backgroundColor: colors.bgLight
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 15
    },
    cardBox: {
        height: hp(75),
    },
    scroll: {
        gap: 10,
    },
    empty: {
        color: '#686868',
        marginHorizontal: 15
    }
});

export default FavoriteScreen;
