import userRepo from '../repos/UserRepo'
export const LOAD_PROFILE = 'LOAD_PROFILE';
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';

export const loadDashboard = (id) => (dispatch) => {
    dispatch(getUserProfile); 
    return userRepo.findUser(id)
        .then(profile => { 
            dispatch(receiveProfile([profile]))
        }
    );
};


export const getUserProfile = () => ({
    type: LOAD_PROFILE
});

export const receiveProfile =  (profile) => ({
    type: RECEIVE_PROFILE,
    profile: profile,
});

