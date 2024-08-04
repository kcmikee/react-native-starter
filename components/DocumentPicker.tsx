import {
  View,
  Text,
  Pressable,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as DocumentPicker from "expo-document-picker";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { CloudUpload, X } from "lucide-react-native";
import { MAX_FILE_SIZE, NAV_THEME } from "~/lib/constants";
import CircularProgress from "./CircularProgress";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import OTPInput from "./OTPContainer";
import { useColorScheme } from "~/lib/useColorScheme";

interface IProp {
  onChange: (file: any, name: any, setProgress: any) => void;
  placeholder: string;
  name: string;
  accept: string;
  uploadErr: boolean;
  uploadedFile: any;
}
const DocumentPickerScreen = ({
  onChange,
  placeholder = "Upload your document",
  name,
  accept,
  uploadedFile,
  uploadErr,
}: IProp) => {
  const { colorScheme } = useColorScheme();
  const [document, setDocument] =
    useState<DocumentPicker.DocumentPickerAsset | null>(null);
  const [progress, setProgress] = React.useState(0);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: accept ?? ["image/*", "application/pdf", "text/plain"], // Allow multiple file types
        multiple: false, // Allow multiple file selection (Note: This might not be supported on all platforms)
        copyToCacheDirectory: true, // Copy the file to a temporary directory
      });
      console.log(result);
      if (!result.canceled) {
        if (Number(result.assets[0].size) > MAX_FILE_SIZE) {
          Alert.alert(
            "File too large",
            "Please select a file smaller than 5MB."
          );
        } else {
          const file = result.assets?.[0];
          setDocument(file);
          onChange(file, name, setProgress);
        }
      } else {
        console.log("Document picking canceled");
      }
    } catch (error) {
      console.error("Error picking document:", error);
    }
  };

  const fileMeta = {
    name: document ? document.name : "",
    type: document ? document.mimeType : "",
    size: document ? document.size : "",
    sizeKb: document?.size ? document.size / 1024 : "",
    sizeMb: document?.size ? document.size / 1048576 : "",
  };

  return (
    <ScrollView>
      <View className="space-y-4">
        <ThemedView className="flex-row items-center gap-4 p-2 border border-gray-300 rounded-lg">
          <View
            className={`flex items-center justify-center w-8 h-8 ${
              uploadErr
                ? "bg-red-200"
                : uploadedFile
                ? "bg-green-200"
                : "bg-gray-200"
            } rounded-full`}
          >
            {uploadErr ? (
              <FontAwesome
                name="triangle-exclamation"
                size={14}
                color={NAV_THEME?.dark?.red500}
              />
            ) : uploadedFile ? (
              <Ionicons
                name="checkmark-circle"
                size={18}
                color={NAV_THEME?.dark?.brand500}
              />
            ) : (
              <CloudUpload color={"#4F4B5C"} size={19} />
            )}
          </View>
          <View className="flex-1">
            <ThemedText className="!text-sm">
              {document?.name ?? placeholder}
            </ThemedText>
            <ThemedText className="!text-xs">
              PDF format •{" "}
              {document
                ? `${Number(fileMeta?.sizeMb).toFixed(2)}MB`
                : "Max. 5MB"}
            </ThemedText>
          </View>
          {uploadErr ? (
            <TouchableOpacity
              onPress={() => {}}
              className="flex-row items-center gap-2 h-7"
            >
              <ThemedText className="!text-sm font-bold !text-red-500">
                Try again
              </ThemedText>
              <Ionicons
                name="repeat"
                size={20}
                color={NAV_THEME?.dark?.red500}
              />
            </TouchableOpacity>
          ) : document ? (
            <View className="flex-row items-center gap-2">
              <CircularProgress progress={progress} size={40} strokeWidth={4} />
              <TouchableOpacity
                onPress={() => {
                  setDocument(null);
                }}
              >
                <X
                  color={
                    colorScheme === "dark" ? "#fff" : NAV_THEME?.light?.text
                  }
                />
              </TouchableOpacity>
            </View>
          ) : (
            <Pressable
              onPress={() => {
                pickDocument();
              }}
              className="bg-[#3DDC84] px-4 py-2 rounded-full"
            >
              <ThemedText className="!text-white">Upload</ThemedText>
            </Pressable>
          )}
        </ThemedView>
      </View>
    </ScrollView>
  );
};

export default DocumentPickerScreen;
