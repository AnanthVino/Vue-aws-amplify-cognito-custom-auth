<template>
    <div>
      <input v-model="username" type="text" placeholder="username" /><br/>
      <input v-model="email" type="text" placeholder="email" /><br/>
      <input v-model="password" type="password" placeholder="password" /><br/>
      <button @click="submit" type="submit">SignUp</button>
    </div>
</template>

<script>
    import {signUp} from '../utils/auth.js';
    export default {
        name: 'SignUp',
        data() {
            return {
            username: '',
            email: '',
            password: '',
            }
        },
        methods: {
            submit() {
            signUp(this.username, this.email, this.password);
            }
        }
    }
</script>

<style>
    input {
        padding: 10px;
        margin-top: 15px;
    }
    button {
        margin-top: 15px
    }
</style>
