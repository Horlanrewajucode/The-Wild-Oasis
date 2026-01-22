import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signupApi,

    onSuccess: (user) => {
      toast.success(
        "Account Successfully created, Please verify the newly created account from the user's email address",
      );
    },
  });

  return { signUp, isPending };
}
