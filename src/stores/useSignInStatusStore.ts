import { create } from "zustand";

interface SignInStatusState {
  signedIn: boolean;
  setSignedIn: (signedIn: boolean) => void;
}

export const useSignInStatusStore = create<SignInStatusState>((set) => ({
  signedIn: false,
  setSignedIn: (signedIn: boolean) => set({ signedIn }),
}));
