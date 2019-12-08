import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import { AmplifyEventBus } from 'aws-amplify-vue';
import SignIn from './components/signIn.vue';
import SignUp from './components/signUp.vue';
import ConfirmSignUp from './components/signUpConfirm.vue';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/confirm-signup',
        name: 'ConfirmSignUp',
        component: ConfirmSignUp,
    }
  ]
})

AmplifyEventBus.$on('authState', async (state) => {
  const pushPathes = {
    signedOut: () => {
      router.push({path: '/signin'})
    },
    signUp: () => {
      router.push({path: '/signup'})
    },
    confirmSignUp: () => {
      router.push({path: '/confirm-signup'})
    },
    signIn: () => {
      router.push({path: '/signin'})
    },
    signedIn: () => {
      router.push({path: '/'})
    }
  }
  if (typeof pushPathes[state] === 'function') {
    pushPathes[state]()
  }
})

export default router;