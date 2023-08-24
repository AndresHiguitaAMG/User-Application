import { useReducer } from "react";
import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
  {
    id: 1,
    userName: "Andres",
    password: 12345,
    email: "andreshiguitaamg@gmail.com",

  },
];

const initalUserForm = {
  username: "",
  password: "",
  email: "",
}

export const UsersApp = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  const handlerAddUser = (user) => {
    // console.log(user);
    dispatch({
      type: "addUser",
      payload: user,
    })
  }

  const handlerRemoveUser = (id) => {
    // console.log(id)
    dispatch({
      type: "RemoveUser",
      payload: id,
    })
  }

  return (
  <div className="container my-4">
    <h2>Users App</h2>
    <div className="row">
      <div className="col">
        <UserForm
          handlerAddUser={handlerAddUser}
          initalUserForm={initalUserForm}
        />
      </div>
      <div className="col">
        {
          users.length === 0 ?
          <div className="alert alert-warning">
            No hay usuarios en el sistema
          </div>
          :
          <UsersList
            handlerRemoveUser={handlerRemoveUser}
            users={users}
          />
        }
      </div>
    </div>
  </div>
  )
}
