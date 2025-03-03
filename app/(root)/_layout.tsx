import { useGlobalContext } from "@/lib/global-provider";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function AppLayout() {
  const { isLogged, loading } = useGlobalContext();

  if (loading)
    return (
      <SafeAreaView className="bg-white flex-1 items-center justify-center">
        <ActivityIndicator size="large" className="text-primary-300" />
      </SafeAreaView>
    );

  if (!isLogged) return <Redirect href="/sign-in" />;

  return <Slot />;
}
