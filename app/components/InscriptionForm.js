"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nom: yup.string().required("Nom obligatoire").min(5, "Minimum 5 caractères"),

  cin: yup
    .string()
    .required("CIN obligatoire")
    .matches(/^[0-9]{8}$/, "Le CIN doit contenir exactement 8 chiffres"),

  email: yup.string().required("Email obligatoire").email("Email invalide"),

  password: yup
    .string()
    .required("Mot de passe obligatoire")
    .min(6, "Minimum 6 caractères"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Les mots de passe ne correspondent pas")
    .required("Confirmation obligatoire"),

  terms: yup.boolean().oneOf([true], "Vous devez accepter les conditions"),
});

export default function InscriptionForm() {
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
    alert("Inscription réussie !");
    reset();
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
          {...register("nom")}
          className="w-full border rounded-lg px-4 py-2"
        />
        <p className="text-red-500 text-sm">{errors.nom?.message}</p>
      </div>

      {/* CIN */}
      <div>
        <input
          type="text"
          placeholder="CIN"
          {...register("cin")}
          className="w-full border rounded-lg px-4 py-2"
        />
        <p className="text-red-500 text-sm">{errors.cin?.message}</p>
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

      {/* Mot de passe */}
      <div>
        <input
          type="password"
          placeholder="Mot de passe"
          {...register("password")}
          className="w-full border rounded-lg px-4 py-2"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>

      {/* Confirmation */}
      <div>
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          {...register("confirmPassword")}
          className="w-full border rounded-lg px-4 py-2"
        />
        <p className="text-red-500 text-sm">
          {errors.confirmPassword?.message}
        </p>
      </div>

      {/* Conditions */}
      <div className="flex items-center gap-2">
        <input type="checkbox" {...register("terms")} className="w-4 h-4" />
        <label className="text-sm text-gray-700">
          J’accepte les conditions
        </label>
      </div>
      <p className="text-red-500 text-sm">{errors.terms?.message}</p>

      {/* Bouton */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg 
        hover:bg-blue-700 transition font-semibold"
      >
        S’inscrire
      </button>
    </form>
  );
}
