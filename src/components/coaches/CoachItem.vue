<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4> {{ rate  }}AZN/hour</h4>
        <div>
            <base-badge v-for="area in areas" :key="area" :title="area" :type="area"></base-badge>
        </div>
        <div class="actions">
            <base-button @click="redirectToContachView">Contact Coach</base-button>
            <base-button @click="redirectToDetailsView">View Coach Details</base-button>
        </div>
    </li>
</template>

<script>
import * as views from '../../config/view.js';
import BaseButton from '../base/BaseButton.vue';
export default {
  components: { BaseButton },
    props: ['id','firstName','lastName','areas','rate'],
    computed: {
        fullName(){
            return `${this.firstName} ${this.lastName}`;
        }
    },
    methods: {
        redirectToDetailsView(){
            this.$router.push({
                name: views.CoachDetails,
                params: {
                    id: this.id
                }, 
            });
        },
        redirectToContachView(){
            this.$router.push({
                name: views.ContactCoach,
                params: {
                    id: this.id
                }
            });
        }
    }
}
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>