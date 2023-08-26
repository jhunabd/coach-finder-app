<template>
  <section>
    <base-card>
      <h2>
        {{ fullName }}
      </h2>
      <h3>{{ selectedCoach.hourlyRate }}AZN/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button @click="contact(id)">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
    <base-badge v-for="area in selectedCoach.areas" :key="area" :type="area" :title="area"></base-badge>
    <p>{{  selectedCoach.description }}</p>
    </base-card>
  </section>
</template>
<script>

import * as views from '../../config/view.js';
export default {
    props: ['id'],
    created(){
        this.selectedCoach = this.$store.getters['coaches/coaches'].find(coach => coach.id === this.id);
    },
    data(){
        return {
            selectedCoach: null,
        }
    },
    computed: {
        fullName(){
            return `${this.selectedCoach.name} ${this.selectedCoach.surname}`; 
        }
    },
    methods: {
        contact(id){
            this.$router.push({
                name: views.ContactCoach,
                params: {
                    id: id
                }
            })
        }
    }
};
</script>