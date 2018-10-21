import userRepo from '../repos/UserRepo'
export const LOAD_USER = 'LOAD_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

export const loadUser = (id) => (dispatch) => {
    dispatch(loadingUser); 
    return userRepo.findUser(id)
        .then(user => { 
            dispatch(receiveUser(user))
        }
    );
};

export const loadingUser = () => ({
    type: LOAD_USER
});

export const receiveUser =  (user) => ({
    type: RECEIVE_USER,
    user
});

