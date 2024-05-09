import { useState, type FormEvent } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuth();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // TODO: Hacer la verificacion
    setIsAuthenticated(true);

    navigate("/dashboard");
  };

  return (
    /* Aqui se llama la funcion handleSubmit, borre el onSubmit={handleSubmit} */
    <DefaultLayout>
      <form className="p-3" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="flex flex-col gap-1 w-fit">
          <label>Username</label>
          <input
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-1 text-sm rounded"
          />
        </div>

        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Submit</button>
      </form>
    </DefaultLayout>
  );
}
