import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthSlice, createAuthSlice } from "./auth";

const STORAGE_KEY = "grooop-app-storage";

export const useStore = create<
  AuthSlice,
  [["zustand/persist", Pick<AuthSlice, "accessToken">]]
>(
  persist((...a) => ({ ...createAuthSlice(...a) }), {
    name: STORAGE_KEY,
    partialize: (state) => ({
      user: state.user,
      accessToken: state.accessToken,
    }),
    storage: createJSONStorage(() => AsyncStorage),
  })
);
