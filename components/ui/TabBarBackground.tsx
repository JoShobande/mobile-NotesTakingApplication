import { View, Text } from "react-native";

// This is a shim for web and Android where the tab bar is generally opaque.
export default undefined;

export function useBottomTabOverflow() {
  return (
    <View>
        <Text>hello</Text>
    </View>
  )
}
