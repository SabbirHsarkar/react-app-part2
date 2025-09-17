import { use } from "react"

  export default function Users({fetchUsers}){

    const users=use(fetchUsers);

    console.log(users)
    return(
      <div className="user">
        <h3>User:{users.length}</h3>
      </div>

    )
 }