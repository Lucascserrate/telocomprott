import { View } from 'react-native'
import { Routes, Route } from 'react-router-native'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/:id' element={<DetailScreen />} />
      </Routes>
    </View>
  )
}
