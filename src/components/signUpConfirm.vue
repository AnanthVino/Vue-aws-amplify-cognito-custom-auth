<template>
    <div>
      <input v-model="username" type="text" placeholder="username" /><br/>
      <input v-model="code" type="password" placeholder="code" /><br/>
      <button @click="submit" type="submit">Confirm</button>
      <button @click="resend" type="submit">Resend</button>
    </div>
</template>

<script>
    import {confirmSignUp, resendSignUp} from '../utils/auth';
    export default {
        name: 'ConfirmSignUp',
        data() {
            return {
            username: '',
            code: '',
            }
        },
        methods: {
            submit() {
            confirmSignUp(this.username, this.code);
            },
            resend() {
            resendSignUp(this.username);
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
