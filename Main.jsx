import { View } from 'react-native'
import { Routes, Route } from 'react-router-native'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import FavoriteScreen from './screens/FavoriteScreen'
import { useEffect } from 'react'
import { clean, getFavorites, setFavorites } from './utils/storage'
import Welcome from './screens/Welcome'

export default function Main() {

  useEffect(() => {
    // clean()
    getFavorites()
      .then((value) => {
        !value && setFavorites([])
      })
    /*     getFavorites()
          .then((value) => {
            console.log('Valor recuperado de AsyncStorage:', value);
          }) */
  }, [])
  return (
    <View>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/home/:id' element={<DetailScreen />} />
        <Route path='/fav' element={<FavoriteScreen />} />
      </Routes>
    </View>
  )
}
