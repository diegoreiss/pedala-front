import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/welcome';
import Login from '../pages/login';
import CreateAccount from '../pages/createAccount';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: true,
        animationTypeForReplace: 'push',
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
