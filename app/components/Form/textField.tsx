import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { cn } from "@/lib/utils";

export interface TextFieldProps {
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  fieldName: string;
  label: string;
  placeholder: string;
  validateFunction?: (value: string) => boolean | string;
}

export const TextField = ({
  register,
  errors,
  type,
  placeholder,
  fieldName,
  validateFunction,
  label,
}: TextFieldProps) => {
  return (
    <>
      <div className="relative z-0 w-full flex flex-col gap-2">
        <label htmlFor={fieldName}>{label}</label>
        <input
          className={cn(
            "border border-blue focus-visible:outline-none focus-visible:ring-blue focus-visible:ring-offset-1 focus-visible:ring-1 transition-colors p-1"
          )}
          {...register(fieldName, {
            required: "This field is required",
            validate: validateFunction,
          })}
          type={type}
          id={fieldName}
          placeholder={placeholder}
        />
        {errors[fieldName] && (
          <p className="absolute -bottom-5 text-xs text-red">
            {`${errors[fieldName]?.message}` || ""}
          </p>
        )}
      </div>
    </>
  );
};
