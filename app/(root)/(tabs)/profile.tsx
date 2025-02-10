import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { settings } from "@/constants/data";
type SettingsItemProps = {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
};

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between py-3">
    <View className="items-center gap-3 flex-row">
      <Image source={icon} className="size-6" />
      <Text className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}>
        {title}
      </Text>
    </View>

    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);

function profile() {
  const handleLogout = async () => {};
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerClassName="px-7 pb-32">
        <View className="flex-row justify-between items-center mt-5">
          <Text className="text-xl font-rubik-bold">Explore</Text>
          <Image source={icons.bell} className="size-5" />
        </View>

        <View className="flex-row justify-center mt-5">
          <View className="flex-col items-center mt-5 relative">
            <Image
              source={images.avatar}
              className="size-44 relative rounded-full"
            />
            <TouchableOpacity className="absolute bottom-11 right-2">
              <Image source={icons.edit} className="size-9" />
            </TouchableOpacity>

            <Text className="text-2xl font-rubik-bold mt-2">Canis-Latrans</Text>
          </View>
        </View>

        <View className="mt-10">
          <SettingsItem icon={icons.calendar} title="My Bookings" />
          <SettingsItem icon={icons.wallet} title="Payments" />
        </View>

        <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default profile;
