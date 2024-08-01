import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice"; // Import your login action
import { toast } from "sonner";
export const useLogin = () => {
  const dispatch = useDispatch();

  const signIn = async (userInfo) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      const user = result.user;

      // Dispatch the login action to update Redux state
      dispatch(login(user));

      toast.success(`Welcome ${user.displayName}`);
    } catch (error) {
      const errorMessage = error.message;
      toast.error("Email or Password is wrong");
    }
  };

  return { signIn };
};
