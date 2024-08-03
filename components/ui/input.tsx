import * as React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { cn } from "../../lib/utils";

interface IProps extends TextInputProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  placeholderClassName?: string;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, IProps>(
  ({ className, leftIcon, rightIcon, placeholderClassName, ...props }, ref) => {
    return (
      <View className={cn("relative w-full")}>
        {!!leftIcon && (
          <View className="absolute left-3 z-10 top-[20%]">{leftIcon}</View>
        )}
        <TextInput
          ref={ref}
          className={cn(
            `web:flex h-10 native:h-12 web:w-full rounded-md border border-input border-slate-400 bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] text-foreground placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 ${
              !!leftIcon ? "pl-10" : ""
            } ${!!rightIcon ? "pr-14" : ""}`,
            props.editable === false && "opacity-50 web:cursor-not-allowed",
            className
          )}
          placeholderClassName={cn(
            "text-muted-foreground",
            placeholderClassName
          )}
          {...props}
        />
        {!!rightIcon && (
          <View className="absolute right-3 top-[20%]">{rightIcon}</View>
        )}
      </View>
    );
  }
);

Input.displayName = "Input";

export { Input };
