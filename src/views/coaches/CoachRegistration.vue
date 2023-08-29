<template>
  <section>
    <base-card>
      <h2>Register as a coach!</h2>
      <coach-form @save-data="registerCoach"></coach-form>
    </base-card>
  </section>
</template>
<script>
import CoachForm from "@/components/coaches/CoachForm.vue";
export default {
  components: { CoachForm },
  methods: {
        registerCoach(data){
            this.$store.dispatch('coaches/addCoach',data);
            this.$router.replace('/coaches');
        }
    }
};
</script>