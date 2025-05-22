import { Collapsible } from "@/components/Collapsible"
import { HelloWave } from "@/components/HelloWave";
import { View, Text, StyleSheet} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


const Card = () => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Mom's medicine...</Text>
                <Text style={styles.noteContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.</Text>
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
      width:200,
      height:200,
      backgroundColor:'#E8E582',
      borderRadius:20,
      padding:10,
      paddingTop:30
    },
    title:{
        fontSize:24,
        fontWeight:500,
        marginBottom:10, 
    },
    noteContent:{
        fontWeight: 300,
        lineHeight: 20
    }
  
});
  