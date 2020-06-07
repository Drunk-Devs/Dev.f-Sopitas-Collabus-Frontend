import React, { useState } from "react";
import { usePost } from "seed/api";
//import styles from  '../resources/css/global.module.css';
import '../resources/bootstrap-4.5.0/css/bootstrap.min.css'
function Login(props)
{
  const [state, setState] = useState(0);
  const [cLogin, qLogin] = usePost("/auth/login", {
    onCompleted: (data) =>
    {
      sessionStorage.setItem("token", data.key);
      sessionStorage.setItem("id", data.user);
      props.history.replace("/");
    },
    onError: (error) => setState({ error: "Invalid user or password" })
  });

  const onSubmit = (e) =>
  {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    cLogin({email: email, password: password});
  };

  return (
    <div className="app-container">
        <div className="app-total-center">
          <div className="container mt-5">
            <img className="d-block mx-auto app-image" src={require("../../resources/images/happy-covid.png")}/>
            <span className="d-block display-4 text-center app-name">Collab-us</span>
          </div>
    
          <div className="container mt-5 mb-3">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input type="mail" name="correo_eectronico" className="form-control border-0 p-4" placeholder="&#xf1fa; &nbsp; Correo electronico"/>
              </div>
    
              <div className="form-group">
                <input type="password" name="password" className="form-control border-0 p-4" placeholder="&#xf21b; &nbsp; Contraseña"/>
              </div>
                
              <div className="form-group">
                <button type="submit" className="btn btn-lg btn-block wt-3 shadow border-white text-white app-button">Entra <i className="fas fa-sign-in-alt"></i></button>
              </div>
            </form>
          </div>
    
          <div className="container mt-5 mb-5 text-center">
            <a href="" className="d-block app-enlace-blanco"><i className="fas fa-pencil-alt"></i> Registrar mi negocio</a>
            <a href="" className="d-block app-enlace-blanco"><i className="fas fa-pencil-alt"></i> Registrarme para calificar negocios</a>
          </div>
        </div>
      </div>
      );
    }
    
    export default Login;