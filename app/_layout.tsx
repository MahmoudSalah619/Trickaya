import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import WebView from "react-native-webview";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: "#FF6A00" }}
      >
        <WebView
          style={{ flex: 1 }}
          source={{ uri: "https://www.goodreads.com/" }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
