"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { TextareaField } from "@/app/components/Form/textareaField";
import { CheckboxField } from "@/app/components/Form/checkboxField";
import { TextField } from "@/app/components/Form/textField";
import { validateEmail } from "@/app/components/Form/validateEmail";
import { StyledModal } from "@/app/components/Form/modal";

export interface FormValues {
  [key: string]: string;
}

export const modalItems = [
  {
    label: "Full Name",
    value: "fullName",
  },
  {
    label: "E-mail",
    value: "email",
  },
  {
    label: "Message",
    value: "description",
  },
];

export const ContactForm = () => {
  const [show, setShow] = useState(false);

  const [submittedFormValues, setSubmittedFormValues] =
    useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setSubmittedFormValues(data);
    setShow(true);
    reset();

    await fetch("https://submit-form.com/u2uKrqT6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Imię: data.fullName,
        Email: data.email,
        Wiadomość: data.description,
      }),
    })
      .then(function (response) {
        console.log(response);
        console.log(
          "Form submitted:",
          data.fullName,
          data.email,
          data.description
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div id="contact" className="my-8 max-w-[600px] w-[90%] mx-auto">
      <p className="text-blue text-center text-2xl mini:text-3xl mt-10 mb-6 tracking-wide">
        get in touch
      </p>
      <p className="text-center text-4xl mini:text-5xl md:text-6xl tracking-wide">
        Contact us
      </p>
      <form
        className="gap-7 flex flex-col my-16"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          type="text"
          register={register}
          errors={errors}
          fieldName="fullName"
          label="Full Name"
          placeholder="Enter your full name"
        />
        <TextField
          type="email"
          register={register}
          errors={errors}
          fieldName="email"
          label="E-mail"
          placeholder="Enter your e-mail"
          validateFunction={validateEmail}
        />
        <TextareaField
          register={register}
          errors={errors}
          fieldName="description"
          placeholder="Write a message"
        />
        <CheckboxField
          control={control}
          errors={errors}
          fieldName="consent"
          label="I consent to the processing of&nbsp;personal data in&nbsp;connection with&nbsp;submitting an&nbsp;inquiry via the&nbsp;contact&nbsp;form."
        />
        <button
          className="text-white bg-blue p-3 focus-visible:outline-none focus-visible:ring-blue focus-visible:ring-1 focus-visible:ring-offset-1 transition-colors mx-auto rounded-none ml-auto mr-0"
          type="submit"
        >
          Send a&nbsp;message
        </button>
      </form>
      <StyledModal
        modalItems={modalItems}
        show={show}
        setShow={setShow}
        data={submittedFormValues}
      />
    </div>
  );
};
