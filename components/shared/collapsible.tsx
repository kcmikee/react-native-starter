import * as React from "react";
import { Platform, Text, View } from "react-native";
import Animated, {
  FadeInDown,
  LinearTransition,
} from "react-native-reanimated";
import { ChevronsDownUp } from "~/lib/icons/ChevronsDownUp";
import { ChevronsUpDown } from "~/lib/icons/ChevronsUpDown";
import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

export default function CollapsibleScreen() {
  const [open, setOpen] = React.useState(false);
  return (
    <View className="items-center justify-center flex-1 p-6">
      <Collapsible asChild open={open} onOpenChange={setOpen}>
        <Animated.View
          layout={Platform.OS !== "web" ? LinearTransition : undefined}
        >
          <View className="w-full max-w-full gap-2">
            <View className="flex flex-row items-center justify-between px-4 space-x-4">
              <Text className="text-sm font-semibold text-foreground native:text-lg">
                @peduarte starred 3 repositories
              </Text>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon">
                  {open ? (
                    <ChevronsDownUp size={16} className="text-foreground" />
                  ) : (
                    <ChevronsUpDown size={16} className="text-foreground" />
                  )}
                  <Text className="sr-only">Toggle</Text>
                </Button>
              </CollapsibleTrigger>
            </View>
            <View className="px-4 py-3 border rounded-md border-border ">
              <Text className="text-sm text-foreground native:text-lg">
                @radix-ui/primitives
              </Text>
            </View>
            <CollapsibleContent className="gap-2">
              <CollapsibleItem delay={100}>@radix-ui/react</CollapsibleItem>
              <CollapsibleItem delay={200}>@stitches/core</CollapsibleItem>
            </CollapsibleContent>
          </View>
        </Animated.View>
      </Collapsible>
    </View>
  );
}

function CollapsibleItem({
  children,
  delay,
}: {
  children: string;
  delay: number;
}) {
  if (Platform.OS === "web") {
    return (
      <View className="px-4 py-3 border rounded-md border-border">
        <Text className="text-sm text-foreground">{children}</Text>
      </View>
    );
  }

  return (
    <Animated.View
      entering={FadeInDown.duration(200).delay(delay)}
      className="px-4 py-3 border rounded-md border-border"
    >
      <Text className="text-lg text-foreground">{children}</Text>
    </Animated.View>
  );
}
