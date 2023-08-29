import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
  {
    id: 1,
    username: "Andres",
    password: 12345,
    email: "andreshiguitaamg@gmail.com",

  },
];

const initalUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
}

export const UsersApp = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setUserSelected] = useState(initalUserForm);

  const handlerAddUser = user => {
    // console.log(user);
    let type;
    //Si es igual a 0 se crea el usuario si por el contrario es mayor a 0 se actualiza el usuario
    if (user.id === 0) {
      type = "addUser";
    } else {
      type = "updateUser"
    } 
    dispatch({
      type,
      payload: user,
    })
  };

  const handlerRemoveUser = id => {
    // console.log(id)
    dispatch({
      type: "RemoveUser",
      payload: id,
    })
  };

  const handlerUserSelectedForm = user => {
    // console.log(user)
    setUserSelected({
      ...user
    });
  }

  return (
  <div className="container my-4">
    <h2>Users App</h2>
    <div className="row">
      <div className="col">
        <UserForm
          handlerAddUser={handlerAddUser}
          initalUserForm={initalUserForm}
          userSelected={userSelected}
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
            handlerUserSelectedForm={handlerUserSelectedForm}
          />
        }
      </div>
    </div>
  </div>
  )
}
