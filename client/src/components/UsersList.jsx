import { UserRow } from "./UserRow"

// eslint-disable-next-line react/prop-types, no-unused-vars
export const UsersList = ({ users, handlerRemoveUser = [], handlerUserSelectedForm }) => {
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
                    users.map(({ id, username, email, password }) => (
                        <UserRow 
                        key={id}
                        id={id}
                        username={username}
                        password={password}
                        email={email}
                        handlerRemoveUser={handlerRemoveUser}
                        handlerUserSelectedForm={handlerUserSelectedForm}
                        />
                    ))
                }
            </tbody>
        </table>
    </>
  )
}
