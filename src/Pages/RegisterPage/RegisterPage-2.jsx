import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import {
  registerWithEmailAndPassword,
  register_pt2,
  signInWithFacebook,
  signInWithGoogle,
} from "../../firebase/auth-service";
import { LOGIN_URL, USER_PAGE } from "../../constants/urls";

function RegisterPage2() {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "pacient", text: "Pacient" },
    { value: "doctor", text: "Doctor" },
  ];
  const [formData, setFormData] = useState({
    name: data.displayname,
    email: data.email,
    uid: data.uid,
    age: 0,
    photoURL: "gs://afterglow-c7ada.appspot.com/Perfil_generico.png",
    job: options[0].value,
    degree: "",
    cv: "",
  });

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
      const { email, uid, ...extraData } = formData;
      await register_pt2(email, uid, extraData);
      alert("Prueba completada, eres el puto amo");
      navigate(USER_PAGE);
    } catch (error) {
      console.log(error);
      console.log("This email is already in our DataBase");
      alert("This email is already in our DataBase, Login!!");
    }
  };
  console.log(options);
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={onSubmit}>
          <h1 className={styles.title}>Terminemos tu registro!!</h1>
          {/* Profesion field */}
          <div className={styles.inputContainer}>
            <h3 htmlFor="job">Roll</h3>
            <select name="job" id="job" onChange={handleOnChange} required>
              {options.map((option) => (
                <option key={option.value} name={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>

          {formData.job === "" ? (
            <h2>Select an option to deploy the form</h2>
          ) : (
            <>
              {formData.job === "Doctor" ? (
                // {/* USERNAME FIELD */}
                <div>
                  {/* AGE FIELD */}
                  <div className={styles.inputContainer}>
                    <h3 htmlFor="age">Age</h3>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Ejmp. 24"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  {/* master's degree */}
                  <div className={styles.inputContainer}>
                    <h3 htmlFor="age">Master's degree</h3>
                    <input
                      type="text"
                      name="degree"
                      id="degree"
                      placeholder="Ejmp. Axiety"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  {/* CV */}
                  <div className={styles.inputContainer}>
                    <h3 htmlFor="age">CV</h3>
                    <input
                      type="text"
                      name="cv"
                      id="cv"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </div>
              ) : (
                <div>
                  {/* AGE FIELD */}
                  <div className={styles.inputContainer}>
                    <h3 htmlFor="age">Age</h3>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Ejmp. 24"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <button type="submit" className={styles.submitBtn}>
            SING UP!
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage2;
