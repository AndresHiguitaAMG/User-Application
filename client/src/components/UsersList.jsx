import { UserRow } from "./UserRow"

// eslint-disable-next-line react/prop-types
export const UsersList = ({ initialUsers }) => {
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
                    initialUsers.map(({ id, username, email }) => (
                        <UserRow 
                        key={id}
                        id={id}
                        username={username}
                        email={email}
                        />
                    ))
                }
            </tbody>
        </table>
    </>
  )
}
