import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { toast } from "sonner";
function useRegister() {
  const dispatch = useDispatch();
  const registerWithEmailAndPassword = async (userInfo) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );
      await updateProfile(auth.currentUser, {
        displayName: userInfo.displayName,
      });

      const user = userCredential.user;
      dispatch(login(user));
      toast.success("Welcome" + user.displayName);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };
  return { registerWithEmailAndPassword };
}

export { useRegister };
