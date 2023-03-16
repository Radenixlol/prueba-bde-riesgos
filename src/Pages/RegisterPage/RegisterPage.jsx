import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import {
  registerWithEmailAndPassword,
  signInWithFacebook,
  signInWithGoogle,
} from "../../firebase/auth-service";
import { LOGIN_URL, REGISTER_URL2, USER_PAGE } from "../../constants/urls";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    uid: "",
    password: "",
    age: 0,
    photoURL: "gs://afterglow-c7ada.appspot.com/Perfil_generico.png",
    job: "",
    degree: "",
    cv: "",
  });

  const handleSignWithGoogle = async () => {
    try {
      regis = await signInWithGoogle();
      console.log(regis);
      if (regis !== null && regis !== undefined) {
        navigate(REGISTER_URL2, { state: regis });
      } else {
        alert("Oops, Google no pudo procesar tu pedido");
      }
    } catch (error) {
      alert("Oops, Google no pudo procesar tu pedido");
      console.log(error);
    }
  };
  const handleSignWithFacebook = async () => {
    regis = await signInWithFacebook();
    navigate(USER_PAGE);
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const { email, password, uid, ...extraData } = formData;
      regis = await registerWithEmailAndPassword(
        email,
        password,
        uid,
        extraData
      );
      console.log("Todo salio bien");
      alert("Register complete...Enjoy!");
      navigate(USER_PAGE);
    } catch (error) {
      console.log(error);
      console.log("This email is already in our DataBase");
      alert("This email is already in our DataBase, Login!!");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h1 className={styles.title}>SIGN UP!</h1>
          <p className={styles.welcomeTxt}>
            Welcome! Join us in this experience.
          </p>
          {/* USERNAME FIELD */}
          <div>
            <div className={styles.inputContainer}>
              <h3 htmlFor="name">User Name</h3>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ejmp. simonm2001"
                onChange={handleOnChange}
                required
              />
            </div>
            {/* EMAIL FIELD */}
            <div className={styles.inputContainer}>
              <h3 htmlFor="email">Email</h3>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ejmp. simon@email.com"
                onChange={handleOnChange}
                required
              />
            </div>
            {/* PASSWORD FIELD */}
            <div className={styles.inputContainer}>
              <h3 htmlFor="password">Password</h3>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                onChange={handleOnChange}
                required
              />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            SING UP!
          </button>

          <button
            type="button"
            className={styles.googleBtn}
            onClick={handleSignWithGoogle}
          >
            Register with Google
          </button>
          {/* TODO : regoster with facebook  */}
          <button
            type="button"
            className={styles.facebookBtn}
            onClick={handleSignWithFacebook}
          >
            Register with Facebook
          </button>

          <Link to={LOGIN_URL} className={styles.loginRedirect}>
            ¿Already sing up? <span className={styles.redirectLink}>Login</span>
          </Link>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
