import { use } from "react"

export default function friends({friendsPromise}){

    const friends=use(friendsPromise);
    console.log(friends)

    return(
        <div className="user">
            <h3>Friends:{friends.length}</h3>
        </div>
    )
}