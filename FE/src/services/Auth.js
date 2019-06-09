const ID = "ID";
const USERNAME = "USERNAME";
const ROLE = "ROLE";

var events = {};

var callEvents = () => {
    Object.values(events).map(f => f());
}

export default {
    getId: () => {
        return localStorage.getItem(ID);
    },
    isIdSet: () => {
        return localStorage.getItem(ID) !== null;
    },
    setId: (id) => {
        localStorage.setItem(ID, id); 
        callEvents();
    },
    removeId: () => {
        localStorage.removeItem(ID);
        callEvents();
    },
    setRole: (role) => {
        localStorage.setItem(ROLE, role);
        callEvents();
    },
    removeRole: () => {
        localStorage.removeItem(ROLE)
        callEvents();
    },
    getRole: () => {
        return localStorage.getItem(ROLE);
    },
    setUsername: (username) => {
        localStorage.setItem(USERNAME, username);
        callEvents();
    },
    removeUsername: () => {
        localStorage.removeItem(USERNAME);
        callEvents();
    },
    getUsername: () => {
        return localStorage.getItem(USERNAME);
    },
    clear: () => {
        localStorage.removeItem(USERNAME);
        localStorage.removeItem(ROLE);
        localStorage.removeItem(ID);
        callEvents();

    },
    subscribeToUpdate: (eventName, f) => {
        events[eventName] = f;
    },
    unsubscribeToUpdate: (eventName) => {
        if(events[eventName])
            delete events[eventName];
    },
    isLoggedIn(){
        return localStorage.getItem(ID) !== null &&
               localStorage.getItem(ROLE) !== null &&
               localStorage.getItem(USERNAME) !== null;
    }
}