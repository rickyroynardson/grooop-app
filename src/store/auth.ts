import { StateCreator } from "zustand";
import { CooldownSlice } from "./cooldown";

interface AuthUser {
  userId: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  emailVerifiedAt: Date | null;
}

export interface AuthSlice {
  user: AuthUser | null;
  accessToken: string | null;
  onAuthSuccess: ({
    user,
    accessToken,
  }: {
    user: AuthUser;
    accessToken: string;
  }) => void;
  onProfileUpdate: (user: AuthUser) => void;
  onLogout: () => void;
}

export const createAuthSlice: StateCreator<
  AuthSlice & CooldownSlice,
  [],
  [],
  AuthSlice
> = (set) => ({
  user: null,
  accessToken: null,
  onAuthSuccess: (payload) => {
    set(() => ({ ...payload }));
  },
  onProfileUpdate: (user: AuthUser) => {
    set(() => ({ user }));
  },
  onLogout: () => {
    set(() => ({ user: null, accessToken: null }));
  },
});
