const setUser = (userObj) => {
    return {
        type: "SET_USER",
        payload: userObj
    }
}

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export const addNinjaAction = (ninja) => ({
	type: "ADD_NINJA",
	payload: ninja,
});

export const deleteNinjaAction = (id) => {
	return { type: "DELETE_NINJA", payload: id };
};

export default {
    setUser,
    logOut
}

