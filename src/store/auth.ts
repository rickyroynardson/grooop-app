import { StateCreator } from "zustand";

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
  onLogout: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  user: null,
  accessToken: null,
  onAuthSuccess: (payload) => {
    set(() => ({ ...payload }));
  },
  onLogout: () => {
    set(() => ({ user: null, accessToken: null }));
  },
});
