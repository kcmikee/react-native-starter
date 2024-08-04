import { Label } from "@rn-primitives/context-menu";
import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
  useColorScheme,
} from "react-native";

interface OTPInputProps {
  length: number;
  onOTPChange: (otp: string) => void;
  label?: string;
}

const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  onOTPChange,
  label,
}) => {
  const theme = useColorScheme() ?? "light";
  const [otp, setOTP] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChangeText = (text: string, index: number) => {
    if (/^[0-9]$/.test(text)) {
      const newOTP = [...otp];
      newOTP[index] = text;
      setOTP(newOTP);
      onOTPChange(newOTP.join(""));

      if (text && index < length - 1) {
        inputs.current[index + 1]?.focus();
      }
    } else if (!text) {
      const newOTP = [...otp];
      newOTP[index] = "";
      setOTP(newOTP);
      onOTPChange(newOTP.join(""));

      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-col">
      {label && <Label className="text-sm text-[#110C22]">{label}</Label>}
      <View style={styles.container}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs.current[index] = input)}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
            //   style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            textAlign="center"
            className={`w-12 h-16 mx-1 text-2xl font-bold ${
              theme === "light" ? "!text-gray-600" : "text-white"
            } border border-gray-300 rounded-lg`}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: 10,
  },
});

export default OTPInput;
