import * as React from "react";
import { ScrollView, TextInput, View } from "react-native";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export default function TextAreaScreen() {
  const inputRef = React.useRef<TextInput>(null);
  const [value, setValue] = React.useState<string>("");

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
    setValue(text);
  }

  return (
    <ScrollView contentContainerClassName="flex-1 justify-center items-center py-6">
      {/* default */}
      <View className="w-full web:max-w-xs">
        <Label
          className="pb-2 native:pb-1 pl-0.5"
          nativeID="textareaLabel"
          onPress={handleOnLabelPress}
        >
          Label
        </Label>
        <Textarea
          ref={inputRef}
          placeholder="Write some stuff..."
          value={value}
          onChangeText={onChangeText}
          aria-labelledby="textareaLabel"
        />
        <View className="h-5" />
      </View>
      {/* red border */}
      <View className="w-full web:max-w-xs">
        <Label
          className="pb-2 native:pb-1 pl-0.5"
          nativeID="textareaLabel"
          onPress={handleOnLabelPress}
        >
          Label
        </Label>
        <Textarea
          ref={inputRef}
          placeholder="Write some stuff..."
          value={value}
          onChangeText={onChangeText}
          aria-labelledby="textareaLabel"
          className="border-red-500"
        />
        <View className="h-5" />
      </View>
      {/* gray background */}
      <View className="w-full web:max-w-xs">
        <Label
          className="pb-2 native:pb-1 pl-0.5"
          nativeID="textareaLabel"
          onPress={handleOnLabelPress}
        >
          Label
        </Label>
        <Textarea
          ref={inputRef}
          placeholder="Write some stuff..."
          value={value}
          onChangeText={onChangeText}
          aria-labelledby="textareaLabel"
          className="bg-gray-300"
        />
        <View className="h-5" />
      </View>
    </ScrollView>
  );
}
