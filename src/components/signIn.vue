<template>
    <div>
      <input v-model="username" type="text" placeholder="username" /><br/>
      <input v-model="password" type="password" placeholder="password" /><br/>
      <button @click="submit" type="submit">SignIn</button>
    </div>
</template>

<script>
    import {signIn} from '../utils/auth.js';
    export default {
        name: 'SignIn',
        data() {
            return {
            username: '',
            password: '',
            }
        },
        methods: {
            submit() {
            signIn(this.username, this.password);
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
