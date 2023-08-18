import { useState } from "react"

const initalUserForm = {
    username: "",
    password: "",
    email: "",
}

// eslint-disable-next-line react/prop-types
export const UserForm = ({ handlerAddUser }) => {
    const [userForm, setUserForm] = useState(initalUserForm);

    const { username, password, email } = userForm;

    const onInputChange = e => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        if (!username || !password || !email) {
            alert("Debe completar los campos del formulario")
            return;
        }
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
        <input 
        placeholder="password"
        name="password"
        type="password"
        value={password}
        onChange={onInputChange}
        className="form-control my-3 w-75"
        />
        <input 
        placeholder="email"
        name="email"
        onChange={onInputChange}
        value={email}
        className="form-control my-3 w-75"
        />
        <button
        className="btn btn-primary"
        type="submit"
        >
        Crear
        </button>
    </form>
  )
}
