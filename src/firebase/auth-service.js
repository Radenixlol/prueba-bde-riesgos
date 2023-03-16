// TODOS LOS METODOS DE AUTENTICACION

import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAdditionalUserInfo,
  updateProfile
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./config";
import { createUserProfile } from "./users-service";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const { isNewUser } = getAdditionalUserInfo(result);
    console.log(isNewUser)
    if (isNewUser) {
      
      try {
        await updateProfile(result.user, {
          name: result.user.displayName,
          photoURL: result.user.photoURL,
        });
      } catch (error) {
        console.log(error);
      }
      var regis
      return regis = {
        email: result.user.email,
        name: result.user.displayName,
        uid: result.user.uid,
        age: 0,
        photoURL: result.user.photoURL,
        roll: "",
        deegre: "",
        cv: "",
      };
    }
  } catch (error) {
    console.log(error)
    return null;
  }
};

export const register_pt2 = async (email, uid, extraData) => {
  try {
    return createUserProfile(uid, {
      email,
      ...extraData,
    });
  } catch (error) {
    console.error(error);
  }
};

export const registerWithEmailAndPassword = async (
  email,
  password,
  uid,
  extraData
) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);

};

export const loginWithEmailAndPassword = async (
  email,
  password,
  onSuccess,
  onFail
) => {
  return signInWithEmailAndPassword(auth, email, password);
  // try {
  //   const result = await signInWithEmailAndPassword(auth, email, password);
  //   console.log("LOGIN", result);
  //   if (onSuccess){
  //     onSuccess();
  //   }
  // } catch (error) {
  //   console.error(error);
  //   if(onFail){
  //     onFail(error);
  //   }
  // }
};

export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);

    const { isNewUser } = getAdditionalUserInfo(result);

    if (isNewUser) {
      await createUserProfile(result.user.uid, {
        email: result.user.email,
        name: result.user.displayName,
        uid: result.user.uid,
        age: 0,
        photoURL: result.user.photoURL,
        roll: "",
      });
      try {
        await updateProfile(result.user, {
          name: result.user.displayName,
          photoURL: result.user.photoURL,
        });
      } catch (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.error(error);
  }
};
