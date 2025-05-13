// app/signin.tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();
  const onLogin = async () => {
    // ...do your auth logic, then:
    router.replace('/home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Welcome back!</Text>
      {/* your TextInputs */}
      <Button title="Sign In" onPress={onLogin} />
    </View>
  );
}
