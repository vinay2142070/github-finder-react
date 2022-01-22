import axios from "axios";

const github = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT, headers: {
        Authorization: `token ${process.env.REACT_APP_GIT_REPO_TOKEN}`
    }
});
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text
    })

    const response = await github.get(`/search/users?${params}`);
    // dispatch({
    //     type: "GET_USERS",
    //     payload: items,
    // })

    return response.data.items
}


// Get user and repos
export const getUserAndRepos = async (login) => {
    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`),
    ])

    return { user: user.data, repos: repos.data }
}

//TODO need to be handled from component later
// const clearUsers = () => {
//     dispatch({
//         type: "CLEAR_USERS",

//     })
// }

