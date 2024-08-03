import * as React from "react";
import { Platform, ScrollView, TextInput, View } from "react-native";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";
import { CircleCheck, CircleUser } from "lucide-react-native";
import { ThemedText } from "../ThemedText";

export default function InputScreen() {
  const inputRef = React.useRef<TextInput>(null);
  const [value, setValue] = React.useState<string>("");
  const [err, setErr] = React.useState<string | null>(null);

  function handleOnLabelPress() {
    if (!inputRef.current) {
      return;
    }
    if (inputRef.current.isFocused()) {
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
    }
  }

  function onChangeText(text: string) {
    if (err) {
      setErr(null);
    }
    setValue(text);
  }

  function onSubmitEditing() {
    setErr("Forgot Password?");
  }

  const values = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ];

  return (
    <ScrollView contentContainerClassName="">
      <Input
        placeholder="Write some stuff..."
        rightIcon={
          <View>
            <Select>
              <SelectTrigger className="w-[80px] -top-2 bg-transparent border-transparent">
                <SelectValue
                  className="text-sm border-none outline-none text-foreground native:text-lg"
                  placeholder="Drop"
                />
              </SelectTrigger>
              <SelectContent className="w-[250px]">
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  {values.map((_value, _index) => (
                    <SelectItem
                      key={_value.value}
                      label={_value.label}
                      value={_value.value}
                    >
                      {_value.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </View>
        }
        onChangeText={() => {}}
        onSubmitEditing={() => {}}
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
      <Input
        placeholder="Write some stuff..."
        className="mt-2 border-green-500"
        rightIcon={
          <View>
            <Select>
              <SelectTrigger className="w-[80px] -top-1 bg-transparent border-transparent">
                <SelectValue
                  className="text-sm border-none outline-none text-foreground native:text-lg"
                  placeholder="Drop"
                />
              </SelectTrigger>
              <SelectContent className="w-[250px]">
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  {values.map((_value, _index) => (
                    <SelectItem
                      key={_value.value}
                      label={_value.label}
                      value={_value.value}
                    >
                      {_value.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </View>
        }
        onChangeText={() => {}}
        onSubmitEditing={() => {}}
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
      <Input
        placeholder="Write some stuff..."
        className="!pl-20 mt-2 border-green-500"
        leftIcon={
          <View>
            <Select>
              <SelectTrigger className="w-[75px] -left-4 -top-1 bg-transparent border-transparent">
                <SelectValue
                  className="text-sm border-none outline-none text-foreground native:text-lg"
                  placeholder="NGN"
                />
              </SelectTrigger>
              <SelectContent className="w-[250px]">
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  {values.map((_value, _index) => (
                    <SelectItem
                      key={_value.value}
                      label={_value.label}
                      value={_value.value}
                    >
                      {_value.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </View>
        }
        onChangeText={() => {}}
        onSubmitEditing={() => {}}
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
      />
      <View className="w-full mt-4 web:max-w-xs">
        <Label
          className={cn(err && "text-destructive", "pb-2 native:pb-1 pl-0.5")}
          nativeID="inputLabel"
          onPress={handleOnLabelPress}
        >
          Label
        </Label>
        <Input
          ref={inputRef}
          placeholder="Placeholder"
          value={value}
          leftIcon={
            <View className="w-4 mt-1">
              <CircleUser color={"#8D8A95"} size={19} />
            </View>
          }
          rightIcon={
            <View className="flex-row items-center gap-1 mt-1">
              <Text>Check</Text>
              <CircleCheck color={"#8D8A95"} size={19} />
            </View>
          }
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
          className={`${err ? "border-red-500" : ""}`}
        />
        <View className="flex-row items-center justify-between">
          <Text className="text-sm">Support Text</Text>
          {err ? (
            <ErrorMessage msg={err} />
          ) : (
            <Text className="text-sm py-1.5">Forgot Password?</Text>
          )}
        </View>
        <View className="h-20" />
      </View>
    </ScrollView>
  );
}

function ErrorMessage({ msg }: { msg: string }) {
  if (Platform.OS === "web") {
    return (
      <Text
        className="text-destructive text-sm native:px-1 py-1.5 web:animate-in web:zoom-in-95"
        aria-invalid="true"
        id="inputError"
      >
        {msg}
      </Text>
    );
  }
  return (
    <Animated.Text
      entering={FadeInDown}
      exiting={FadeOut.duration(275)}
      className="text-destructive text-sm native:px-1 py-1.5"
      aria-invalid="true"
      id="inputError"
    >
      {msg}
    </Animated.Text>
  );
}
