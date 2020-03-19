<template>
  <div class="text-center">
    <v-progress-circular
      indeterminate
      rotate="10"
      size="150"
      width="8"
      color="primary"
      class="p-2"
    >
      {{ loading }}
    </v-progress-circular>
  </div>
</template>
<script>
export default {
  props: ["loading"]
};
</script>
