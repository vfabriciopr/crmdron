import DefaultLayout from "../layout/DefaultLayout";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    /* Aqui se llama la funcion handleSubmit, borre el onSubmit={handleSubmit} */
    <form className="form">
      <DefaultLayout>
        <h1>Signup</h1>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Create account</button>
      </DefaultLayout>
    </form>
  );
}
