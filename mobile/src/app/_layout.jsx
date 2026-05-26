import { Slot, Redirect } from "expo-router";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import SafeScreen from "../components/SafeScreen";

function RootLayoutNav() {
  const { isSignedIn, isLoaded } = useAuth();
  
  if (!isLoaded) return null;
  if (!isSignedIn) return <Redirect href="/auth/sign-in" />;
  
  return <Slot />;
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeScreen>
        <RootLayoutNav />
      </SafeScreen>
    </ClerkProvider>
  );
}