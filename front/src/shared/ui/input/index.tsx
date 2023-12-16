import React from "react";
import { FieldErrors, UseFormRegister,Path,FieldValues } from "react-hook-form";
import { TAuthSchema } from "../../zodSchema"



export const Input = <T extends FieldValues ,>({
type,
name,
placeholder,
errors,
register,
} : {
type: string,
name: Path<T>,
placeholder:string,
errors: FieldErrors<T>,
register:UseFormRegister<T>,

}) => {
   return(   
      <>
      <input  type={type}  placeholder={placeholder} {...register(name)}/>
      {errors[name] && <span>{`${errors[name]?.message}`}</span>}
      </>
   )
}