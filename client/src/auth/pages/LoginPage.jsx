import { useState } from "react"
import Swal from "sweetalert2";

const initialLoginForm = {
    username: "",
    password: "",
};

export const LoginPage = () => {
    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm;

    const onInputChange = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = e => {
        e.preventDefault();
        if (!username || !password) {
            Swal.fire("Error de validación", "username y password requeridos", "error");
        }
        //Implementación del login
        if (username === "admin" && password === "12345") {
            //handlerLogin();
        } else {
            Swal.fire("Error login", "username o password invalidos", "error");
        }
        setLoginForm(initialLoginForm);
    };

  return (
    <div className="modal" style={{display: "block"}} tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Login Page</h5>
                </div>
                <form onSubmit={onSubmit}>
                <div className="modal-body">
                    <input 
                    className="form-control my-3 w-75"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                    />
                    <input 
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={onInputChange}
                    />
                </div>
                <div className="modal-footer">
                    <button 
                    type="submit" 
                    className="btn btn-primary">
                        Login
                    </button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}
