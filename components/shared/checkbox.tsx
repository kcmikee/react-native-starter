import * as React from "react";
import { View } from "react-native";
import { Checkbox } from "~/components/ui/checkbox";
import { Label } from "~/components/ui/label";

export default function CheckboxScreen() {
  const [checked, setChecked] = React.useState(false);
  return (
    <View className="items-center justify-center flex-1 gap-12 py-6 space-y-2">
      <View className="flex-row items-center gap-3">
        <Checkbox
          aria-labelledby="terms"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label nativeID="terms" onPress={() => setChecked((prev) => !prev)}>
          Accept terms and conditions
        </Label>
      </View>
      <View className="flex-row items-center gap-3">
        <Checkbox
          aria-labelledby="terms"
          checked={checked}
          onCheckedChange={setChecked}
          className={`bg-transparent border-2 !rounded-full ${
            checked && "checked:bg-green-500 shadow-lg"
          } checked:border-green-500 shadow-green-500`}
        />
        <Label nativeID="terms" onPress={() => setChecked((prev) => !prev)}>
          Accept terms and conditions
        </Label>
      </View>
    </View>
  );
}
