import { ColumnTaxFile } from "@columntax/column-tax-react-native-sdk";
import { useState } from "react";
import { Button, View } from "react-native";

// Replace with your own Column Tax SDK URL
const sdkUrl = '';

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);

  const onButtonPress = () => {
    setIsVisible(true);
  }
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onPress={onButtonPress}
        title="Open Tax Filing"
        color="#841584"
        accessibilityLabel="open tax filing flow"
      />
      {isVisible && (
        <ColumnTaxFile userUrl={sdkUrl} handleClose={handleClose} />
      )}
    </View>
  );
}
