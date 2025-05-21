import { Stack } from "expo-router";
import React from 'react';

import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "../database/initializeDatabase";

export default function Index() {
  return (
    <SQLiteProvider databaseName="myDatabase.db" onInit={initializeDatabase}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#35306d"
          },
          headerTintColor: "#FFF"
        }}
      > 
          <Stack.Screen name="(auth)/login" options={{ title: "Login", headerShown: false }} />
          <Stack.Screen name="(auth)/register" options={{ title: "Registro", headerShown: false }} />
          <Stack.Screen name="(details)/details" options={{ title: "Detalhes", headerShown: true }} />
          <Stack.Screen name="(tabs)" options={{ title: "Home", headerShown: false }} />
          <Stack.Screen name="+not-found"/>
      </Stack>
    </SQLiteProvider>
  );
}
