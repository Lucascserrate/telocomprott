import { View } from 'react-native'
import { Routes, Route } from 'react-router-native'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import FavoriteScreen from './screens/FavoriteScreen'

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/:id' element={<DetailScreen />} />
        <Route path='/fav' element={<FavoriteScreen />} />
      </Routes>
    </View>
  )
}
