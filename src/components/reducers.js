const initialState = {
    value: 0,
    user: {
        _id: '6291b4891d16c114c96d9e47',
        userName: "Hardik",
        firstName: "Hardiksinh",
        lastName: "Rajput",
        mobileNumber: "8140187327",
        email: "hardiksinh98@gmail.com",
        password: "123"
    },
};

function addReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: state.value + 1 };
        case 'DECREASE':
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}

export default addReducer;
