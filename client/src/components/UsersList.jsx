import { UserRow } from "./UserRow"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const UsersList = ({ users, handlerRemoveUser = [] }) => {
  return (
    <>
        <table className="table table-hover table-striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    // eslint-disable-next-line react/prop-types
                    users.map(({ id, username, email }) => (
                        <UserRow 
                        key={id}
                        id={id}
                        username={username}
                        email={email}
                        handlerRemoveUser={handlerRemoveUser}
                        />
                    ))
                }
            </tbody>
        </table>
    </>
  )
}
