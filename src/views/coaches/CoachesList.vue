<template>
  <section>Filter</section>
  <section>
    <base-card>
    <div class="controls">
      <base-button>Refresh</base-button>
      <base-button>Register as Coach</base-button>
    </div>
    <ul v-if="hasAny">
      <coach-item v-for="coach in coaches" :key="coach.id"
      :id="coach.id"
      :firstName="coach.name"
      :lastName="coach.surname"
      :areas="coach.areas"
      :rate="coach.hourlyRate"></coach-item>
    </ul>
    <h2 v-else>No coaches found.</h2>
    </base-card>
  </section>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import CoachItem from "../../components/coaches/CoachItem.vue";
export default {
  components: {
    CoachItem,
    BaseButton,
  },
  computed: {
    coaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasAny() {
      return this.$store.getters["coaches/hasAny"];
    },
  },
};
</script>
<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>