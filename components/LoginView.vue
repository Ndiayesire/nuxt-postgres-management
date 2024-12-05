<script setup lang="ts">
import { ref } from "vue";

const hostname = ref("");
const username = ref("");
const port = ref("");
const password = ref("");
const message = ref("");

const connectToDatabase = async () => {
  try {
    const { data, error } = await useFetch("api/connect", {
      method: "POST",
      body: {
        hostname: hostname.value,
        username: username.value,
        port: port.value,
        password: password.value,
      },
    });
  } catch (err: unknown) {
    // Check if `err` is an instance of Error
    if (err instanceof Error) {
      console.log("An error occurred", err.message);
    } else {
      // Handle other unknown errors gracefully
      console.log("An unknown error occurred", err);
    }
  }
};
</script>

<template>
  <div class="w-[25rem] flex flex-col gap-2">
    <NuxtImg src="/post.png" class="h-42" />
    <UCard>
      <div class="space-y-3">
        <UFormGroup label="Host" name="host">
          <UInput v-model="hostname" />
        </UFormGroup>
        <UFormGroup label="Port" name="port">
          <UInput type="number" v-model="port" />
        </UFormGroup>
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
      label="Button"
      color="primary"
      activeClass="hover:color-primary-600"
      @click="connectToDatabase"
    />
  </div>
</template>
