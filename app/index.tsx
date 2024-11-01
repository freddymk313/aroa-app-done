import { Image, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  // if (!isLoading && isLoggedIn) return <Redirect href={"/home"} />;
  if (true && true) return <Redirect href={"/home"} />;

  console.log(isLoading, isLoggedIn);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={require("@/assets/images/logo.png")}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={require("@/assets/images/cards.png")}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5 px-8">
            <Text className="text-4xl text-white text-center">
              Discover Endless Possibilitis with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={require("@/assets/images/path.png")}
              className="w-[130px] h-[15px] absolute -bottom-2 -right-3"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation: embark on a journey of limitless
            explorations with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
            isLoading={false}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
