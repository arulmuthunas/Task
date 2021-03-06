import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Navigation from "./Navigation";
export default function Router() {
   return (
      <>
         <StatusBar barStyle='dark-content' />
         <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <Navigation/>
         </SafeAreaView>
      </>
   );
}
