import { useState } from "react";
export default function LoginForm() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const[error ,setError]= useState<{email?:string ;password?:string}>({});

    const handlesubmit = (e:React.FormEvent) =>{
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);

    
    const newErrors :{email?:string ; password?:string}={}

    if (!email.trim()){
        newErrors.email="Email is required";

    }
    else if (!email.includes("@")){
        newErrors.email="Email must be valid";
    }
    if(!password.trim()){
        newErrors.password="Password is required";
    }else if (password.length<6){
        newErrors.password="Password must be at least 6 characters";
    }
    if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
        return;
    }
    setError({});
     alert("Form submitted successfully");
    setEmail("");
    setPassword("");
    }
  return (
    <form
      action="" onSubmit={handlesubmit}
      className="text-center text-gray-700 bg-pink-200 space-y-4 flex items-center justify-center flex-col p-10 rounded-lg shadow-lg h-[100vh]"
    >
      <div>
        <h1 className="mt-3 font-bold">Form Validation</h1>
        <label className="px-4">Email:</label>
        <input
          type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
          className=" gap-4 mt-4 p-4 px-4 py-2  bg-gray-50 border-2 border-gray-100 rounded-lg shadow-lg  "
        />
        {error.email &&<p className="text-red-500">{error.email}</p>}
      </div>
      <div>
        <label className="px-2">Password:</label>
        <input
          type="password"value={password} onChange={(e)=>setPassword(e.target.value)}
          className=" gap-4mt-4 p-4 px-4 py-2  bg-gray-50 border-2 border-gray-100 rounded-lg shadow-lg"
        />
        {error.password &&<p className="text-red-500">{error.password}</p>}
      </div>
      <button
        type="submit"
        className="px-10 py-2 flex justify-center items-center shadow-xl rounded-lg bg-blue-950 text-white"
      >
        Login
      </button>
    </form>
  );
}
