import { StateCreator } from "zustand";
import { AuthSlice } from "./auth";

export interface CooldownSlice {
  cooldown: string | null;
  onSetCooldown: (cooldown: string) => void;
}

export const createCooldownSlice: StateCreator<
  AuthSlice & CooldownSlice,
  [],
  [],
  CooldownSlice
> = (set) => ({
  cooldown: null,
  onSetCooldown: (cooldown: string) => {
    set(() => ({ cooldown }));
  },
});
