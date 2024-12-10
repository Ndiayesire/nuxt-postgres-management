import { defineStore } from "pinia";

export const useSupabaseStore = defineStore("Supabase", {
  state: () => {
    return {
      dataAuth: {} as Record<string, any>
    };
  },
  actions: {
    async authUser(email: string, password: string) {
      const response = await useNuxtApp().$supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (response.error) {
        console.error('Authentication failed:', response.error.message);
        return { success: false, message: response.error.message };
      } else if (response.data) {
        this.dataAuth = response.data;
        return { success: true, data: response.data };
      }

      return { success: false, message: 'Unknown error occurred' };
    }
  }
});
