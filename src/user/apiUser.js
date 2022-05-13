import {API} from '../config';
import queryString from 'query-string';
import {reject} from 'q';
                                                                    //GET METHOD
export const getProfile = (userId, token) => {
    return fetch(`${API}/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        return reject({err});
    });
};
                                                                        //PUT METHOD
export const updateProfile = (userId, token, userProfile) => {                //usER PROFILE
    return fetch(`${API}/user/${userId}`, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(userProfile)                              //additional to get 
    }).then(response => {
        return response.json();
    }).catch(err => {
        return reject({err});
    });
};

export const updateUser = (user, next) => {
    if (typeof window != undefined) {
        if (localStorage.getItem('jwt')) {
            let auth = JSON.parse(localStorage.getItem('jwt'));
            auth.user = user;
            localStorage.setItem('jwt', JSON.stringify(auth));
            next();
        }
    };
};

export const getPurchaseHistory = (userId, token) => {
    return fetch(`${API}/orders/by/users/${userId}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => {
        return reject({err});
    });
};