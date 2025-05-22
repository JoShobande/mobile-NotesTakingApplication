import Card from "@/components/Card";
import { Collapsible } from "@/components/Collapsible"
import { HelloWave } from "@/components/HelloWave";
import { View, Text, StyleSheet} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


const Home = () => {
    return(
        <SafeAreaView style={styles.container}>
            {/* <Text>home</Text> */}
           <Card/>
           
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20
    },
  
  });
  