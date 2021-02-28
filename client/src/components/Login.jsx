import Axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { lauretteContext } from "../context";

export default function Login(props) {
  const [data, setData] = useState({});
  const { setIsLogged } = useContext(lauretteContext);
  let history = useHistory();

  const getData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
     Axios({
      method: "POST",
      url: "/users/login",
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.data.logged) {
          setIsLogged(true);
          history.push("/entries")
        } else {
          console.log(res.data.logged);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <header>
          <h2>Login</h2>
        </header>
        <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            onInput={getData}
            required={true}
          />
          <label htmlFor="email">Email*</label>
   

        <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            onInput={getData}
            required={true}
          />
          <label htmlFor="password">Password*</label>
                <button>Log in</button>
        
      </form>
    </div>
  );
}
