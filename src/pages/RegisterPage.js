import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthContext";

export const RegisterPage = () => {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "Pablo1",
    email: "pablo1@test.com",
    password: "123",
  });

  const todoOk = () => {
    return (
      form.email.length > 0 && form.password.length > 0 && form.name.length > 0
    );
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const { name, email, password } = form;
    const msg = await register(name, email, password);

    if (msg !== true) {
      Swal.fire({
        title: "Error",
        text: msg,
        icon: "error",
      });
    }
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmit}
    >
      <span className="login100-form-title mb-3">Chat - Registro</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={onChange}
          value={form.name}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
          value={form.email}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
          value={form.password}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          className="login100-form-btn"
          type="submit"
          disabled={!todoOk()}
        >
          Crear cuenta
        </button>
      </div>
    </form>
  );
};
