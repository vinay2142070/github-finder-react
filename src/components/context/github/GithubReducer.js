const GithubReducer = (state, action) => {

    switch (action.type) {
        case "GET_USERS":
            console.log(action.payload)
            return {
                ...state,
                users: action.payload,
                loading: false,


            }

        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            }


        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false,
            }






        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }

        default:
            return state
    }
}

export default GithubReducer
