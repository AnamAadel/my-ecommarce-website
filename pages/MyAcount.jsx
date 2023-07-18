import Facilities from "@/components/Facilities";
import HeroBanner from "@/components/HeroBanner";
import useAuth from "@/hook/useAuth";
import { useState } from "react";

function MyAcount() {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [logEmail, setLogEmail] = useState();
    const [password, setPassword] = useState();
    const [logPassword, setLogPassword] = useState();
    const [photo, setPhoto] = useState();
    const {signup, login} = useAuth();
    

    const handleRegister = ()=>{
        signup(email, password, userName)
    }
    const handleLogin = ()=>{
        login(logEmail, logPassword);
    }

    const handleUplodFile = (e)=>{
        if(e.target.files && e.target.files[0]){
            setPhoto(e.target.files[0]);

        }
    }
  return (
    <>
        <HeroBanner pageName="My Acount" />
            <div
                className="flex flex-wrap md:flex-nowrap w-[90%] m-auto gap-12 py-[4.12rem]">
                <div className="flex flex-col w-full md:w-1/2 p-[2.9rem] space-y-[2.25rem]">
                <h3 className="text-[2.25rem] font-semibold">Register </h3>

                <form action="" className="flex flex-col gap-[1.25rem]" >
                    <label for="name" className="flex flex-col gap-4">
                    <span className="text-[1rem] font-medium">User Name</span>
                    <input
                        type="text"
                        id="name"
                        className="border-2 rounded-md py-3 px-2 mb-3" value={userName} onChange={(e)=> setUserName(e.target.value)} />
                    </label>
                    <label for="email" className="flex flex-col gap-4">
                    <span className="text-[1rem] font-medium">Email address</span>
                    <input
                        type="email"
                        id="email"
                        className="border-2 rounded-md py-3 px-2 mb-3" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    </label>
                    <label className="flex flex-col gap-4">
                    <span className="text-[1rem] font-medium">Password</span>
                    <input
                        type="password"
                        className="border-2 rounded-md py-3 px-2 mb-3" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    </label>
                    <label className="text-[1rem] font-medium">
                    <input type="checkbox" /> Remember me</label>
                    <label className="flex flex-wrap justify-between items-center gap-2">
                    <button
                        type="button"
                        className="border-2 border-gray-600 py-4 px-16 rounded-3xl hover:bg-stone-600 hover:text-white cursor-pointer" onClick={handleRegister}>
                        Register 
                    </button>
                    <span className="text-[1rem] font-medium"> Lost Your Password?</span>
                    </label>
                </form>
                </div>

                <div className="flex flex-col w-full md:w-1/2 p-[2.9rem] space-y-[2.25rem]">
                <h3 className="text-[2.25rem] font-semibold">Log In</h3>

                <form action="" className="flex flex-col gap-[1.25rem]">
                    <label for="email" className="flex flex-col gap-4">
                    <span className="text-[1rem] font-medium">Email address</span>
                    <input
                        type="email"
                        id="email"
                        value={logEmail}
                        className="border-2 rounded-md py-3 px-2 mb-3" onChange={(e)=> setLogEmail(e.target.value)}/>
                    </label>

                    <label for="password" className="flex flex-col gap-4">
                    <span className="text-[1rem] font-medium">Password</span>
                    <input
                        type="password"
                        id="passowrd"
                        value={logPassword}
                        className="border-2 rounded-md py-3 px-2 mb-3" onChange={(e)=> setLogPassword(e.target.value)}/>
                    </label>

                    <p>
                    A link to set a new password will be sent to your email address.
                    <br />
                    <br />
                    Your personal data will be used to support your experience
                    throughout this website, to manage access to your account, and for
                    other purposes described in our <b> privacy policy</b>.
                    </p>

                    <button
                    type="button"
                    onClick={handleLogin}
                    className="border-2 border-gray-600 py-4 px-16 rounded-3xl self-start hover:bg-stone-600 hover:text-white cursor-pointer" >
                    Log In
                    </button>
                </form>
                </div>
            </div>
        <Facilities />
    </>
  )
}

export default MyAcount