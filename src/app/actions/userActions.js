import firebase from 'firebase';

export function userSignIn(email, password) {
    return function(dispatch) {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({
              type: 'USER_SIGNED_IN_SUCCESS',
              payload: user,
            });

            firebase
              .firestore()
              .collection('users')
              .doc(user.uid)
              .get()
              .then(user => {
                  console.log('working');
                dispatch({
                  type: 'USER_DATA_RECEIVED',
                  payload: user.data(),
                });
                return true;
              });
        })
        .catch(error => {
            dispatch({type: 'USER_SIGN_IN_ERROR', payload: error});
        });
    }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  };
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  };
}
