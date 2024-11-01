import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

interface FormFieldInterface {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles: string;
  placeholder: string;
  keyboardType?: string;
}

const FormField = ({
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
    <View className={`gap-y-2 ${otherStyles}`}>
      <Text className="text-base text-white font-pmedium">{title}</Text>

      <View
        className={`flex-row w-full h-16 items-center border-2 rounded-2xl ${
          isFocused ? "border-secondary" : "border-black-200"
        } bg-black-100`}
      >
        <TextInput
          className="flex-1 text-white px-4 font-psemibold"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="mr-4">
            <Image
              source={
                !showPassword
                  ? require("@/assets/icons/eye.png")
                  : require("@/assets/icons/eye-hide.png")
              }
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
