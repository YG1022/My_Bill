import { create } from 'zustand'
import { fetchProfile, fetchUser } from '../constants/types'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AccountStore {
  user: fetchUser | null,
  profile: fetchProfile | null,
  setUser: (user: fetchUser) => void,
  setProfile: (profile: fetchProfile) => void,
}

export const useAccountStore = create<AccountStore>()(persist(
    (set) => ({
      user: null,
      profile: null,
      setUser: (user: fetchUser) => set({ user }),
      setProfile: (profile: fetchProfile) => set({ profile }),
    }),
    {
      name: 'account-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)