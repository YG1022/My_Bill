import { create } from 'zustand'
import { fetchProfile, fetchUser } from '../constants/types'

interface AccountStore {
  user: fetchUser | null,
  profile: fetchProfile | null,
  setUser: (user: fetchUser) => void,
  setProfile: (profile: fetchProfile) => void,
}

export const useAccountStore = create<AccountStore>((set) => ({
  user: null,
  profile: null,
  setUser: (user: fetchUser) => set({ user }),
  setProfile: (profile: fetchProfile) => set({ profile }),
}))