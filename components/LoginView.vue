<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");

const supabase = useSupabaseStore()
const toast = useToast()


const signIn = async () => {
  try {
    const response = await supabase.authUser(username.value, password.value);
    
    if (response.success) {
      toast.add({
        title: 'Success',
        description: 'Your action was completed successfully.',
        color: 'primary'
      });
    } else {
      console.error("Sign-in error:", response.message);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
  }
};


</script>

<template>
  <div class="w-[25rem] flex flex-col gap-2">
    <NuxtImg src="/post.png" class="h-32 mb-5 rounded-md" />
    <UCard>
      <div class="space-y-3">
        <UFormGroup label="Nom utilisateur" name="username">
          <UInput v-model="username" />
        </UFormGroup>
        <UFormGroup label="Mot de passe" name="password">
          <UInput type="password" v-model="password" />
        </UFormGroup>
      </div>
    </UCard>
    <div class="w-full"></div>
    <UButton
      block
      label="Se connecter"
      color="primary"
      activeClass="hover:color-primary-600"
      @click="signIn"
    />
  </div>
</template>
