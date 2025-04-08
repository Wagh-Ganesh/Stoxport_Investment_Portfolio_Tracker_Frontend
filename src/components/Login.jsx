import { useState} from 'react';

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        identifier,
        password,
      });
      setMessage(response.data);
      // Navigate to OTP Verification page after successful password check
    } catch (error) {
      setMessage("Login failed.");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="container-auto rounded-md w-96 border border-slate-200 shadow-lg flex justify-center">
        <div className="w-full p-4">
          <form onSubmit={handleLogin}>
            <h1 className="p-2 text-black text-center text-xl font-bold">Login</h1>
            <div className="mb-4">
             <input
          placeholder="Email or Mobile"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
            </div>
           <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
 <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Login
        </button>
          </form>
           {message && <p className="mt-4">{message}</p>}
        </div>
      </div>
    </div>
  );
};
export default Login;