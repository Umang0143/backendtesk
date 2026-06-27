"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";

export default function EditCompany() {
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

      setValue("companyName", data.company.companyName);
      setValue("gstNumber", data.company.gstNumber);
      setValue("companyEmail", data.company.companyEmail);
      setValue("website", data.company.website);
      setValue("companyAddress", data.company.companyAddress);
    };

    fetchData();
  }, [id]);

  const onSubmit = async (formData) => {
    await fetch(`http://127.0.0.1:8000/profile/company/${id}`, {
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
        Edit Company Info
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input
          placeholder="Company Name"
          {...register("companyName")}
          className="w-full border p-2 rounded"
        />

        <input
          placeholder="GST Number"
          {...register("gstNumber")}
          className="w-full border p-2 rounded"
        />

        <input
          placeholder="Company Email"
          {...register("companyEmail")}
          className="w-full border p-2 rounded"
        />

        <input
          placeholder="Website"
          {...register("website")}
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Address"
          {...register("companyAddress")}
          className="w-full border p-2 rounded"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Update Company
        </button>

      </form>

    </div>
  );
}