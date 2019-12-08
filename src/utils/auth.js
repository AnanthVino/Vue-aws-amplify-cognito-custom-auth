import { Auth } from 'aws-amplify';
import { AmplifyEventBus } from 'aws-amplify-vue';

async function signIn(username, password) {
	try {
    const user = await Auth.signIn(username, password);
    if (user) {
      AmplifyEventBus.$emit('authState', 'signedIn');
    }
	} catch (err) {
		throw err;
	}
}

function signUp(username, email, password) {
  return Auth.signUp({
    username,
    password,
    attributes: {
      email: email,
    }
  })
  .then(data => {
      if (data.userConfirmed === false) {
        AmplifyEventBus.$emit('authState', 'confirmSignUp');
      } else {
        AmplifyEventBus.$emit('authState', 'signIn');
      }
      return data;
    })
    .catch(err => {
      throw err;
    });
}

function confirmSignUp(username, code) {
  return Auth.confirmSignUp(username, code).then(data => {
    AmplifyEventBus.$emit('authState', 'signIn')
    return data;
  })
    .catch(err => {
      throw err;
    });
}

function resendSignUp(username) {
	return Auth.resendSignUp(username).then(() => {
    return 'SUCCESS';
	}).catch(err => {
    throw err;
	});
}

function signOut() {
  return Auth.signOut()
    .then(data => {
      AmplifyEventBus.$emit('authState', 'signedOut');
      return data;
    })
    .catch(err => {
      throw err;
    });
}

export {signUp, confirmSignUp, resendSignUp, signIn, signOut};