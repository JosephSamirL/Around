import create from 'zustand'
import { authh } from "./firebase"
import { provider } from "./firebase"
export const useStore = create((set) => ({
    user: null,
    loading: true,
    setUser: (inp) => set((state) => ({ user: inp })),
    setLoading: (inp) => set((state) => ({ loading: inp })),
    login: () => {authh.signInWithPopup(provider)},
    logout: () => {authh.signOut()},
   
  }));