import { useEffect, useState } from "react";
import GithubContext from "../components/context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import UserItem from "../components/users/UserItem";
import { useContext } from "react";

function UserResults() {

    const { loading, users } = useContext(GithubContext);




    return loading ? <Spinner /> : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2" >
            {users.map((user) => {
                return <UserItem user={user} />
            })}

        </div>
    )
}

export default UserResults
