import { useMutation } from "@tanstack/react-query";
import { loginQuery } from "./request";
import { redirect } from "react-router";

export const useMutationLogin = () => {

   return useMutation({
    mutationFn: loginQuery,
    onSuccess:() => {
     redirect('/')
    }
   })
}
