import firebase from 'firebase';
import 'firebase/firestore';

export function userSignIn(email, password) {
   return (dispatch) => {
      dispatch({ type: 'USER_SIGNED_IN_PENDING', payload: { loading: true } });
      return firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(user => {
            dispatch({
               type: 'USER_SIGNED_IN_SUCCESS',
               payload: user,
            });
         })
         .catch(error => {
            dispatch({ type: 'USER_SIGN_IN_ERROR', payload: error });
         });
   };
}

export function fetchUser(userid) {
   return (dispatch) => {
      dispatch({ type: 'FETCHING_USER_PENDING', payload: { loading: true } });
      return firebase
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
   return (dispatch) => {
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
   return (dispatch) => {
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

export function updateOtherUserData(data) {
   console.log('user data', data);
   return (dispatch) => {
      dispatch({ type: 'UPDATE_USER_PENDING', payload: { loading: true } });
      firebase
         .firestore()
         .collection('users')
         .doc(data.uid)
         .update(data)
         .then(() => {
            dispatch({
               type: 'UPDATE_USER_SUCCESS',
               payload: { loading: false },
            });
         });
   };
}

export function getAllMembersByPartName(singingPart) {
   return (dispatch) => {
      dispatch({ type: 'FETCH_PART_MEMBERS_PENDING', payload: true });
      firebase
         .firestore()
         .collection('users')
         .where('singingPart', '==', singingPart)
         .get()
         .then(snapshot => {
            const members = [];
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

export function userSignOut() {
   return (dispatch) => {
      dispatch({ type: 'USER_SIGN_OUT_PENDING', payload: { loading: true } });
      firebase
         .auth()
         .signOut()
         .then(() => {
            dispatch({
               type: 'USER_SIGN_OUT_SUCCESSFUL',
               payload: { loading: false },
            });
         })
         .catch(error => {
            dispatch({ type: 'USER_SIGN_OUT_ERROR', payload: error });
         });
   };
}
