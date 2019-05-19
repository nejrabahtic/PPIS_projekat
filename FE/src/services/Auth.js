var loggedId = null;
var events = null;

export default {
    getId: () => {
        return loggedId;
    },
    isIdSet: () => {
        return loggedId !== null;
    },
    setId: (id) => {
        loggedId = id; 
        
        if (events !== null){
            events();
        }
    },
    removeId: () => {
        loggedId = null;
        
        if (events !== null){
            events();
        }
    },
    subscribeToUpdate: (f) => {
        events = f;
    }

}