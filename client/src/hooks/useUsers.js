import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

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
        });
        Swal.fire(
            (user.id === 0) ?
            'User created' : 
            'Updated user',
            (user.id === 0) ? 
            'The user has been created successfully' : 
            'The user has been successfully updated.',
            'success'
            )
        };
    
    const handlerRemoveUser = id => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: "RemoveUser",
                    payload: id,
                });
                Swal.fire(
                    'User deleted!',
                    'The user has been successfully deleted.',
                    'success'
                    )
                }
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