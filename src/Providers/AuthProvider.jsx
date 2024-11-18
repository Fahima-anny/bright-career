import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true) ;
    const [resetEmail, setResetEmail] = useState(null) ;

    // create a new user 
    const createNewUser = (email, pass) => {
        setLoading(true) ;
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    // login user with email pass 
    const loginUserWithEmPass = (email, pass) => {
        setLoading(true) ;
        return signInWithEmailAndPassword(auth, email, pass);
    }

    // login with google 
    const loginWithGoogle = () => {
        setLoading(true) ;
        return signInWithPopup(auth, googleProvider);
    }

    // log out user 
    const signOutUser = () => {
        setLoading(true) ;
        return signOut(auth);
    }

    // update user profile 
    const updateUserProfile = (updatedInfo) => {
        return updateProfile(auth.currentUser, updatedInfo)
    }

    // send an password reset email 
    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email) ;
    }

    // hold on user after page reload 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log("User from auth", user)

    const authInfo = {
        createNewUser,
        loginUserWithEmPass,
        loginWithGoogle,
        user,
        setUser,
        signOutUser,
        loading,
        updateUserProfile,
        resetEmail,
        setResetEmail,
        resetPass
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;