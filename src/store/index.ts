import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthSlice, createAuthSlice } from "./auth";
import { CooldownSlice, createCooldownSlice } from "./cooldown";

const STORAGE_KEY = "grooop-app-storage";

export const useStore = create<
  AuthSlice & CooldownSlice,
  [["zustand/persist", Pick<AuthSlice, "accessToken">]]
>(
  persist(
    (...a) => ({ ...createAuthSlice(...a), ...createCooldownSlice(...a) }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({
        user: state.user,
        cooldown: state.cooldown,
        accessToken: state.accessToken,
      }),
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
