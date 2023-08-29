<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
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
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  components: {
    CoachItem,
    BaseButton,
    CoachFilter
  },
  data(){
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        devops: true
      }
    }
  },  
  computed: {
    coaches() {
      const coaches =  this.$store.getters["coaches/coaches"];
      return coaches.filter(coach => {
        if(this.activeFilters.frontend && coach.areas.includes('frontend')){
          return true;
        }
        if(this.activeFilters.backend && coach.areas.includes('backend')){
          return true;
        }
        if(this.activeFilters.devops && coach.areas.includes('devops')){
          return true;
        }
        return false;
      });
    },
    hasAny() {
      return this.$store.getters["coaches/hasAny"];
    },
  },
  methods: {
    setFilters(updatedFilters){
        this.activeFilters = updatedFilters;
    }
  }
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