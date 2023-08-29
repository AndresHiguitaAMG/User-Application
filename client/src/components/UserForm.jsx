import { useEffect, useState } from "react"
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
export const UserForm = ({ handlerAddUser, initalUserForm, userSelected }) => {
    const [userForm, setUserForm] = useState(initalUserForm);

    useEffect(() => {
        setUserForm({
            ...userSelected,
            password: "",
        });
    }, [userSelected]);
    

    const { id, username, password, email } = userForm;

    const onInputChange = e => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        if (!username || (!password && id === 0) || !email) {
            Swal.fire(
                'Validation error',
                'You must complete the form fields.',
                'error'
              );
            return;
        }
        //Guardar el user form en el listado de usuarios
        handlerAddUser(userForm);
        setUserForm(initalUserForm);
    }

  return (
    <form onSubmit={onSubmit}>
        <input
        placeholder="username"
        name="username"
        onChange={onInputChange}
        value={username}
        className="form-control my-3 w-75"
        />
        {
        id > 0 || <input
        placeholder="password"
        name="password"
        type="password"
        value={password}
        onChange={onInputChange}
        className="form-control my-3 w-75"
        />
        }
        <input 
        placeholder="email"
        name="email"
        onChange={onInputChange}
        value={email}
        className="form-control my-3 w-75"
        />
        <input 
        type="hidden"
        name="id"
        value={id}
        />
        <button
        className="btn btn-primary"
        type="submit"
        >
        {id > 0 ? "Edit" : "Create"}
        </button>
    </form>
  )
}
