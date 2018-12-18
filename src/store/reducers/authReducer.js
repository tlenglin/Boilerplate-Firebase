const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state
        case 'SIGNUP_ERROR':
            console.log('signup failed', action.err)
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null,
            }
        default:
            return state
    }
}

export default authReducer