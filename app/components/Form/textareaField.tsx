import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface TextareaFieldProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  fieldName: string;
  placeholder: string;
  defaultValue?: string;
}

export const TextareaField = ({
  register,
  errors,
  placeholder,
  fieldName,
  defaultValue,
}: TextareaFieldProps) => {
  return (
    <div className=" flex flex-col w-full relative justify-center gap-2">
      <p>Your message</p>
      <textarea
        className="w-full h-[105px] resize-none text-left p-3 border focus-visible:ring-offset-1 border-blue focus-visible:outline-none  focus-visible:ring-blue focus-visible:ring-1 transition-colors  placeholder:text-sm lg:placeholder:text-base lg:h-[150px]"
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(fieldName, {
          required: "This field is required",
        })}
      />
      {errors[fieldName] && (
        <p className="absolute -bottom-5 text-xs text-red">
          {`${errors[fieldName]?.message}` || ""}
        </p>
      )}
    </div>
  );
};
