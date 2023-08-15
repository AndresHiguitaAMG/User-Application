import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"

export const UsersApp = () => {
  const initialUsers = [
    {
      id: 1,
      userName: "Andres",
      password: 12345,
      email: "andreshiguitaamg@gmail.com",

    },

  ];

  return (
  <div className="container my-4">
    <h2>Users App</h2>
    <div className="row">
      <div className="col">
        <UserForm />
      </div>
      <div className="col">
        <UsersList 
          initialUsers = {initialUsers}
        />
      </div>
    </div>
  </div>
  )
}
