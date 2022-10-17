<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <fieldset class="card">
    <legend>{{ msg }}</legend>
    <button id="test_buttong" type="button" @click="count++">count is {{ count }}</button>
  </fieldset>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
