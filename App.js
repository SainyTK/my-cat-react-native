import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Cat, { Cat2 as CCC, Cat3 } from './components/Cat'

const CAT = "https://cataas.com/cat"

export default function App() {

  // let count = 1;
  const [count, setCount] = useState(1)

  const handlePress = () => {
    // count = count + 1;
    setCount(count + 1)
  }

  return (
    <View>

      <TouchableOpacity onPress={handlePress}>
        <Image source={{ url: CAT }} style={{ width: 300, height: 300 }} />
      </TouchableOpacity>

      <Text style={{ textAlign: 'center' }}>{count}</Text>

      <Cat abc={"ABCDE"} />
      <CCC />
      <Cat3 />

    </View>
  )

}