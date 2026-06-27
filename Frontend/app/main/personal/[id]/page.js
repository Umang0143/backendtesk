"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

export default function EditPersonal() {
  const { id } = useParams();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://127.0.0.1:8000/main/${id}`);
      const data = await res.json();

      setValue("fullName", data.personal.fullName);
      setValue("email", data.personal.email);
      setValue("phone", data.personal.phone);
      setValue("dob", data.personal.dob);
    };

    fetchData();
  }, [id]);

  const onSubmit = async (formData) => {
    await fetch(`http://127.0.0.1:8000/profile/personal/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    router.push("/profiles");
  };

  return (
    <div className="p-10 max-w-2xl mx-auto bg-white mt-10 rounded-xl">

      <h1 className="text-2xl font-bold mb-5">
        Edit Personal Info
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input
          placeholder="Full Name"
          {...register("fullName")}
          className="w-full border p-2 rounded"
        />

        <input
          placeholder="Email"
          {...register("email")}
          className="w-full border p-2 rounded"
        />

        <input
          placeholder="Phone"
          {...register("phone")}
          className="w-full border p-2 rounded"
        />

        <input
          type="date"
          {...register("dob")}
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Update
        </button>

      </form>

    </div>
  );
}