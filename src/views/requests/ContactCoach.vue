<template>
    <form @submit.prevent="submitRequest">
        <div>
            <label for="email" class="form-control">Your E-mail</label>
            <input type="email" id="email" v-model.trim="email"/>
        </div>
        <div>
            <label for="message" class="form-control">Message</label>
            <textarea rows="5" id="message" v-model.trim="message"></textarea>
        </div>
        <p v-if="!formIsValid" class="errors">You have errors in the form please fix and try again!</p>
        <div class="actions">
            <base-button>Send Message</base-button>
        </div>
    </form>
</template>
<script>
export default {
    data(){
        return {
            email: '',
            message: '',
            formIsValid: true,
        }
    },
    methods: {
            submitRequest(){
                this.validateForm();
                if(!this.formIsValid){
                    return;
                }
                const coachId = this.$route.params.id;
                const newRequest = {
                   coachId: coachId,
                    userEmail: this.email,
                    message: this.message
                }
                this.$store.dispatch('requests/addRequest', newRequest);
                this.$router.replace('/coaches');
            },
            validateForm(){
                this.formIsValid = true;
                if(this.email === '' || !this.email.includes('@') || this.message === ''){
                    this.formIsValid = false;
                }
            }
        }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>