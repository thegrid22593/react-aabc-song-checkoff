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
            dispatch({ type: 'USER_SIGN_IN_ERROR', payload: error });
         });
   };
}

export function fetchUser(userid) {
   return function(dispatch) {
      dispatch({ type: 'FETCHING_USER_PENDING', payload: { loading: true } });
      firebase
         .firestore()
         .collection('users')
         .doc(userid)
         .get()
         .then(user => {
            console.log('user', user.data());
            dispatch({ type: 'FETCHING_USER_SUCCESS', payload: user.data() });
         })
         .catch(error => {
            console.log('could not get the user', error);
         });
   };
}

export function userSignUp(email, password) {
   return function(dispatch) {
      dispatch({ type: 'USER_SIGNED_UP_PENDING', payload: { loading: true } });
      firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(user => {
            if (user) {
               dispatch({ type: 'USER_SIGNED_UP_SUCCESS', payload: user });
            }
         })
         .catch(error => {
            dispatch({ type: 'USER_SIGNED_UP_ERROR', payload: error });
            console.log('could not create this user', error);
         });
   };
}

export function updateUserData(user) {
   console.log('user action', user);
   return function(dispatch) {
      dispatch({ type: 'UPDATE_USER_PENDING', payload: { loading: true } });
      firebase
         .firestore()
         .collection('users')
         .doc(user.uid)
         .update(user)
         .then(() => {
            dispatch({
               type: 'UPDATE_USER_SUCCESS',
               payload: { loading: false },
            });
            dispatch(fetchUser(user.uid));
         })
         .catch(error => {
            dispatch({ type: 'UPDATE_USER_ERROR', payload: error });
            firebase
               .firestore()
               .collection('users')
               .doc(user.uid)
               .set(user)
               .then(() => {
                  dispatch({
                     type: 'UPDATE_USER_SUCCESS',
                     payload: { loading: false },
                  });
                  dispatch(fetchUser(user.uid));
               });
            console.log('could not update user data', error);
         });
   };
}

export function getAllMembersByPartName(singingPart) {
   return function(dispatch) {
      dispatch({ type: 'FETCH_PART_MEMBERS_PENDING', payload: true });
      firebase
         .firestore()
         .collection('users')
         .where('singingPart', '==', singingPart)
         .get()
         .then(snapshot => {
            let members = [];
            snapshot.forEach(doc => {
               members.push(doc.data());
            });
            dispatch({ type: 'FETCH_PART_MEMBERS_SUCCESS', payload: members });
         })
         .catch(err => {
            console.log('Error getting part members', err);
         });
   };
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
