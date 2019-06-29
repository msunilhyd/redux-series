const initialState = {
    age: 21,
    salary: 90
};

const reducer = (state = initialState, action) => {

    const newState = { ...state };

    if (action.type === 'AGE_UP') {
        newState.age += action.payload;
    }
    if (action.type === 'AGE_DOWN') {
        newState.age -= action.payload;
    }

    return newState;
}

export default reducer;