import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, ScrollView, View } from "react-native";

import { Collapsible } from "~/components/Collapsible";
import { ExternalLink } from "~/components/ExternalLink";
import ParallaxScrollView from "~/components/ParallaxScrollView";
import AlertScreen from "~/components/shared/alert";
import AlertDialogScreen from "~/components/shared/AlertDialog";
import BadgeScreen from "~/components/shared/badge";
import ButtonScreen from "~/components/shared/button";
import CardScreen from "~/components/shared/card";
import CheckboxScreen from "~/components/shared/checkbox";
import CollapsibleScreen from "~/components/shared/collapsible";
import ContextScreen from "~/components/shared/context-menu";
import DialogScreen from "~/components/shared/dialog";
import DropdownMenuScreen from "~/components/shared/dropdown-menu";
import ModalScreen from "~/components/shared/modal";
import PopoverScreen from "~/components/shared/popover";
import ProgressScreen from "~/components/shared/progress";
import RadioGroupScreen from "~/components/shared/radio-group";
import SkeletonScreen from "~/components/shared/skeleton";
import TableScreen from "~/components/shared/table";
import TooltipScreen from "~/components/shared/tooltip";

import TypographyScreen from "~/components/shared/typography";
import { ThemedText } from "~/components/ThemedText";
import { ThemedView } from "~/components/ThemedView";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>
        This app includes example code to help you get started.
      </ThemedText>
      <ScrollView>
        <Collapsible title="File-based routing">
          <ThemedText>
            This app has two screens:{" "}
            <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
            and{" "}
            <ThemedText type="defaultSemiBold">
              app/(tabs)/explore.tsx
            </ThemedText>
          </ThemedText>
          <ThemedText>
            The layout file in{" "}
            <ThemedText type="defaultSemiBold">
              app/(tabs)/_layout.tsx
            </ThemedText>{" "}
            sets up the tab navigator.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        {/* <Collapsible title="Android, iOS, and web support">
          <ThemedText>
            You can open this project on Android, iOS, and the web. To open the
            web version, press <ThemedText type="defaultSemiBold">w</ThemedText>{" "}
            in the terminal running this project.
          </ThemedText>
        </Collapsible>
        <Collapsible title="Images">
          <ThemedText>
            For static images, you can use the{" "}
            <ThemedText type="defaultSemiBold">@2x</ThemedText> and{" "}
            <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to
            provide files for different screen densities
          </ThemedText>
          <Image
            source={require("~/assets/images/react-logo.png")}
            style={{ alignSelf: "center" }}
          />
          <ExternalLink href="https://reactnative.dev/docs/images">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title="Custom fonts">
          <ThemedText>
            Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText>{" "}
            to see how to load{" "}
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              custom fonts such as this one.
            </ThemedText>
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title="Light and dark mode components">
          <ThemedText>
            This template has light and dark mode support. The{" "}
            <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText>{" "}
            hook lets you inspect what the user's current color scheme is, and
            so you can adjust UI colors accordingly.
          </ThemedText>
          <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
            <ThemedText type="link">Learn more</ThemedText>
          </ExternalLink>
        </Collapsible>
        <Collapsible title="Animations">
          <ThemedText>
            This template includes an example of an animated component. The{" "}
            <ThemedText type="defaultSemiBold">
              components/HelloWave.tsx
            </ThemedText>{" "}
            component uses the powerful{" "}
            <ThemedText type="defaultSemiBold">
              react-native-reanimated
            </ThemedText>{" "}
            library to create a waving hand animation.
          </ThemedText>
          {Platform.select({
            ios: (
              <ThemedText>
                The{" "}
                <ThemedText type="defaultSemiBold">
                  components/ParallaxScrollView.tsx
                </ThemedText>{" "}
                component provides a parallax effect for the header image.
              </ThemedText>
            ),
          })}
        </Collapsible>
 */}
        <Collapsible title="Popover">
          <PopoverScreen />
        </Collapsible>
        <Collapsible title="Modal">
          <AlertDialogScreen />
        </Collapsible>
        <Collapsible title="Alert">
          <AlertScreen />
        </Collapsible>
        <Collapsible title="Badges">
          <BadgeScreen />
        </Collapsible>
        <Collapsible title="Button">
          <ButtonScreen />
        </Collapsible>
        <Collapsible title="Card">
          <CardScreen />
        </Collapsible>
        <Collapsible title="Checkbox">
          <CheckboxScreen />
        </Collapsible>
        <Collapsible title="Context menu">
          <ContextScreen />
        </Collapsible>

        <Collapsible title="Dialog">
          <DialogScreen />
        </Collapsible>

        <Collapsible title="Collapsible">
          <CollapsibleScreen />
        </Collapsible>

        <Collapsible title="Dropdown menu">
          <DropdownMenuScreen />
        </Collapsible>

        <Collapsible title="Modal">
          <ModalScreen />
        </Collapsible>

        <Collapsible title="Typography">
          <TypographyScreen />
        </Collapsible>

        <Collapsible title="Progress">
          <ProgressScreen />
        </Collapsible>

        <Collapsible title="Radio Group">
          <RadioGroupScreen />
        </Collapsible>

        <Collapsible title="Skeleton">
          <SkeletonScreen />
        </Collapsible>
        <Collapsible title="Tooltip">
          <TooltipScreen />
        </Collapsible>
        <Collapsible title="table">
          <TableScreen />
        </Collapsible>
        <Collapsible title="theme">
          <View className="flex items-center justify-center w-10 h-10 ">
            <ThemeToggle />
          </View>
        </Collapsible>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
