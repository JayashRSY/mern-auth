import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";

const OAuth = () => {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(getAuth(app), provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result.user),
      });
      const data = await res.json();
      if (data.success) {
        dispatch(signInSuccess(data.user));
      }
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95"
    >
      {loading ? "Loading..." : "Continue with Google"}
    </button>
  );
};
export default OAuth;
