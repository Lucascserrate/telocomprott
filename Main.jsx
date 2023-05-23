import { View } from 'react-native'
import { Routes, Route } from 'react-router-native'
import HomeScreen from './screens/HomeScreen'

export default function Main() {
  return (
    <View>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </View>
  )
}
