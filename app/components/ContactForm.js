"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Nom obligatoire").min(4, "Minimum 4 caractères"),
  email: yup.string().required("Email obligatoire").email("Email invalide"),
  telephone: yup
    .string()
    .required("Téléphone obligatoire")
    .matches(/^[0-9]{8}$/, "Doit contenir exactement 8 chiffres"),
  message: yup
    .string()
    .required("Message obligatoire")
    .max(30, "Maximum 30 caractères"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    alert("Message envoyé !");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      {/* Nom */}
      <div>
        <input
          type="text"
          placeholder="Nom"
          {...register("name")}
          className="w-full border rounded-lg px-4 py-2"
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full border rounded-lg px-4 py-2"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Téléphone */}
      <div>
        <input
          type="text"
          placeholder="Téléphone"
          {...register("telephone")}
          className="w-full border rounded-lg px-4 py-2"
        />
        <p className="text-red-500 text-sm">{errors.telephone?.message}</p>
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder="Message"
          {...register("message")}
          className="w-full border rounded-lg px-4 py-2"
          rows={4}
        />
        <p className="text-red-500 text-sm">{errors.message?.message}</p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Envoyer
      </button>
    </form>
  );
}
