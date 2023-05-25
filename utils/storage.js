import AsyncStorage from '@react-native-async-storage/async-storage'

export const getFavorites = async () => {
    return await AsyncStorage.getItem('favorites')
}
export const setFavorites = async (value) => {
    return await AsyncStorage.setItem('favorites', JSON.stringify(value))
}
export const clean = async () => {
    return await AsyncStorage.clear()
}

export const addFavorites = async (detail) => {
    const fav = getFavorites();
    fav.then((value) => {
        const arr = JSON.parse(value);
        const index = arr.findIndex(e => e.id === detail.id)
        if (index === -1) {
            arr.push(detail)
            return setFavorites(arr)
        }
        arr.splice(index, 1)
        return setFavorites(arr)
    })
}
export const removeFavorite = async (id) => {
    const fav = getFavorites();
    fav.then((value) => {
        const arr = JSON.parse(value);
        return setFavorites(arr.filter(e => e.id !== id))
    })
}