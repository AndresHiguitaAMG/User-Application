/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import { UserForm } from "./UserForm";

// eslint-disable-next-line react/prop-types
export const UserModalForm = ({ userSelected, initalUserForm, handlerAddUser, handlerCloseForm }) => {
  return (
    <div className="abrir-modal animacion fadeIn">
            <div className="modal" style={{display: "block"}} tabIndex="-1">
              <div className="modal-dialog" role="document">
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <div className="modal-content">
                  // eslint-disable-next-line react/jsx-no-comment-textnodes
                  <div className="modal-header">
                    // eslint-disable-next-line react/jsx-no-comment-textnodes
                    <h5 className="modal-title">
                      // eslint-disable-next-line react/prop-types
                      {userSelected.id > 0 ? "Editar" : "Crear"} Modal Usuarios
                    </h5>
                  </div>
                  <div className="modal-body">
                    <UserForm
                      handlerAddUser={handlerAddUser}
                      initalUserForm={initalUserForm}
                      userSelected={userSelected}
                      handlerCloseForm={handlerCloseForm}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}
