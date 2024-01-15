import { log } from "console";
import { MouseEventHandler, useState } from "react";

export default function SignIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const connect = (e: any) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  };

  return (
    <div className="bg-neutral2 shadow-lg p-10 flex flex-col gap-6 min-w-[400px]">
      <h1 className="text-center text-secondary font-semibold">Connectez vous a votre compte</h1>
      <div className="grid gap-2">
        <select className="px-5 py-2 rounded-lg border border-gray-300">
          <option value="umamezmiz">UM Amezmiz</option>
        </select>
        <select className="px-5 py-2 rounded-lg border border-gray-300">
          <option value="box1">BOX 1</option>
        </select>
      </div>
      <div className="grid gap-2">
        <input
          type="text"
          className="px-5 py-2 rounded-lg border border-gray-300"
          placeholder="Entrez votre identifiant"
          value = {username}
          onChange={e => {setUsername(e.target.value)}}
        />
        <input
          type="password"
          className="px-5 py-2 rounded-lg border border-gray-300"
          placeholder="Tapez votre mot de passe"
          value = {password}
          onChange={e => {setPassword(e.target.value)}}
        />
      </div>
      <button className="flex items-center justify-center gap-2 rounded-lg shadow-lg px-5 py-2 bg-gradient-to-br from-primary1 to-primary2 text-neutral2 font-semibold"
          onClick={connect}>
        <span className="">Connexion</span>
        <i className="fa fa-arrow-right"></i>
      </button>
    </div>
  );
}
