import { useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import loginClient from "../../clients/login/login.client";
import useLogin from "../../hooks/useLogin";

/* Use tailwind for styling */

const Login = () => {
  const login = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useDocumentTitle("Login");

  const handleOnLogin = () => {
    login.onLogin({
      username,
      password,
    });
  };

  return (
    <div className="p-4">
      <label className="block mb-4">
        Username:
        <input
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="block mb-4">
        Password:
        <input
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        onClick={handleOnLogin}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={login.loading}
      >
        {login.loading ? "Cargando..." : "Iniciar sesión"}
      </button>
      {login.email && <strong>Hola usuario: {login.email}</strong>}
    </div>
  );
};

export default Login;
