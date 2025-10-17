import { Redirect } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [user, setUser] = useState(null);
  if (!user) {
    return <Redirect href="/login" />;
  }
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Olá mundo</Text>
    </View>
  );
}
