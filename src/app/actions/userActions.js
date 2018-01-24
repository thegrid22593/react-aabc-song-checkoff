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

export function getAllMembersByPartName(singingPart) {
  return function(dispatch) {
    dispatch({type: 'FETCH_PART_MEMBERS_PENDING', payload: true})
    firebase
    .firestore()
    .collection('users')
    .where('singingPart', '==', singingPart)
    .get()
    .then(snapshot => {
      let members = [];
      snapshot
      .forEach(doc => {
        members.push(doc.data());
      })
      dispatch({type: 'FETCH_PART_MEMBERS_SUCCESS', payload: members})
    }).catch(err => {
      console.log('Error getting part members', err);
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
