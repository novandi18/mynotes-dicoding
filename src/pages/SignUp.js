import useInput from "../hooks/useInput";
import useAlert from "../hooks/useAlert";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Mode from "../components/Mode";
import Translate from "../components/Translate";
import Modal from "../components/Modal";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { register } from "../utils/network-data";
import { useEffect } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirm, setConfirm] = useInput("");
  const [alert, setAlert] = useAlert();
  const { translate } = useContext(AppContext);

  useEffect(() => {
    document.title = translate === "en" ? "Sign Up" : "Daftar Akun";
  }, [translate]);

  const onSignUp = (e) => {
    e.preventDefault();
    if (password.length < 6)
      setAlert(true, "Password must contain at least 6 characters");

    if (confirm !== password || password !== confirm)
      setAlert(true, "Password and password confirm must be same.");

    registProcess();
  };

  const registProcess = async () => {
    const data = await register({ name, email, password });
    if (data.error) {
      setAlert(true, data.message);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-10">
      <div className="mb-4 flex gap-2 rounded-full bg-gray-300 p-1 dark:bg-gray-700">
        <Mode />
        <Translate />
      </div>
      <div className="rounded-lg bg-gray-300 p-7 dark:bg-gray-800">
        <span className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          {translate === "id" ? "Daftar Akun" : "Account Register"}
        </span>
        <form
          className="mt-5 text-gray-700 dark:text-gray-300"
          onSubmit={onSignUp}
        >
          <div className="mb-3 flex flex-col">
            <label className="text-sm">
              {translate === "id" ? "Nama Lengkap" : "Full name"}
            </label>
            <input
              type="text"
              onChange={setName}
              value={name}
              placeholder={
                translate === "id"
                  ? "Masukkan Nama Lengkap"
                  : "Insert Full Name"
              }
              className="mt-1 rounded-lg border-2 border-transparent bg-gray-400 bg-opacity-30 py-3 px-4 text-gray-700 outline-none transition-all duration-100 hover:bg-opacity-50 focus:border-blue-700 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-300 dark:hover:bg-opacity-70 sm:w-[400px]"
              required
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="text-sm">Email</label>
            <input
              type="email"
              onChange={setEmail}
              value={email}
              placeholder={`${
                translate === "id" ? "Masukkan" : "Insert"
              } Email`}
              className="mt-1 rounded-lg border-2 border-transparent bg-gray-400 bg-opacity-30 py-3 px-4 text-gray-700 outline-none transition-all duration-100 hover:bg-opacity-50 focus:border-blue-700 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-300 dark:hover:bg-opacity-70"
              required
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="text-sm">Password</label>
            <input
              type="password"
              onChange={setPassword}
              value={password}
              placeholder={`${
                translate === "id" ? "Masukkan" : "Insert"
              } Password`}
              className="mt-1 rounded-lg border-2 border-transparent bg-gray-400 bg-opacity-30 py-3 px-4 text-gray-700 outline-none transition-all duration-100 hover:bg-opacity-50 focus:border-blue-700 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-300 dark:hover:bg-opacity-70"
              required
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="text-sm">
              {translate === "id"
                ? "Konfirmasi Password"
                : "Password Confirmation"}
            </label>
            <input
              type="password"
              onChange={setConfirm}
              value={confirm}
              placeholder={
                translate === "id"
                  ? "Masukkan Konfirmasi Password"
                  : "Insert Password Confirmation"
              }
              className="mt-1 rounded-lg border-2 border-transparent bg-gray-400 bg-opacity-30 py-3 px-4 text-gray-700 outline-none transition-all duration-100 hover:bg-opacity-50 focus:border-blue-700 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-300 dark:hover:bg-opacity-70"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 mb-2 w-full rounded-lg bg-blue-700 py-3 text-gray-300 outline-none transition-all duration-100 hover:bg-blue-800"
          >
            {translate === "id" ? "Daftar" : "Register"}
          </button>
        </form>
      </div>
      <div className="mt-5 flex text-sm">
        <span className="mr-1 text-gray-700 dark:text-gray-300">
          {translate === "id"
            ? "Sudah punya akun?"
            : "Already have an account?"}
        </span>
        <Link to="/" className="text-blue-500 hover:underline">
          {translate === "id" ? "Masuk disini" : "Login here"}
        </Link>
      </div>
      <Modal isOpen={alert.isOpen} setIsOpen={setAlert} title={alert.title} />
    </div>
  );
};

SignUp.propTypes = {
  translate: PropTypes.string,
};

export default SignUp;
