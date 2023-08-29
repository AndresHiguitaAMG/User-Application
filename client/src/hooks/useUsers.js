import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";

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

export const useUsers = () => {
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
    
    return {
        users,
        userSelected,
        initalUserForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
    }
}