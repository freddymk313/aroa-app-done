import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { icons } from "@/constants";

interface FormFieldInterface {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles: string;
  placeholder: string;
  keyboardType?: string;
}

const SearchInput = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeholder,
  ...props
}: FormFieldInterface) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={`flex-row w-full h-16 items-center border-2 rounded-2xl ${
        isFocused ? "border-secondary" : "border-black-200"
      } bg-black-100`}
    >
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <TouchableOpacity className="">
        <Image source={icons.search} className="w-5 h-5 mr-4" resizeMode="contain" />
      </TouchableOpacity>

      <View className="w-full flex-1 pt-5 pb-8">
        <Text>Latest Videos</Text>
      </View>
    </View>
  );
};

export default SearchInput;
