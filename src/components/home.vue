<template>
    <div id="home">
        <h1>Welcome to homepage...</h1>
        <button @click="submit" type="submit">Sign Out</button>
    </div>
</template>

<script>
    import {signOut} from '../utils/auth.js';
    export default {
        name: 'Home',
        methods: {
            submit() {
                signOut().then(data => {
                    return data;
                })
                .catch(err => {
                    throw err;
                });
            }
        }
    }
</script>