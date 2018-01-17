export function userSignUpRequest(userData) {
    return dispatch => {
        return axios.post('/api/users', userData);
    }
}