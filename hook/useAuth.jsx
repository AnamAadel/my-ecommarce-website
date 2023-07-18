'use client';
import app from "@/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function useAuth() {
    const [loading, setLoading] = useState(true);
    const [curUser, setCurrentUser] = useState();

    const router = useRouter();

    useEffect(()=>{
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user);
            setLoading(false);
            
        })
        return unsubscribe;

    },[])

    const signup = async(email, password, userName)=>{
        const auth = getAuth(app);

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {displayName: userName});
            const user = auth.currentUser;
    
            setCurrentUser({...user});

            alert("Register successed");
            router.push("/");
            
        } catch (error) {
            alert(error);
            
        }

    }


    const login = async(email, password)=>{
        const auth = getAuth(app);
        
        try {
        await signInWithEmailAndPassword(auth,email, password);
            alert("Ligin successed")
            router.push("/");
        } catch (error) {
            alert(error)
            
        }
    }

    const logout = async(email)=>{
        const auth = getAuth(app);
        alert("You are logout")
        router.reload();
        return signOut(auth);
    }

  return {
    loading,
    curUser,
    signup,
    login,
    logout

  }
}

export default useAuth