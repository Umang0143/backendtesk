// "use client";

// import { useFormContext } from "react-hook-form";

// export default function PersonalInfoForm() {
//     const {
//         register,
//         formState: { errors },
//     } = useFormContext();

//     return (
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

//             {/* Full Name */}
//             <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Full Name <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                     type="text"
//                     placeholder="Enter Full Name"
//                     {...register("fullName", {
//                         required: "Full Name is required",
//                         minLength: {
//                             value: 3,
//                             message: "Minimum 3 characters required",
//                         },
//                     })}
//                     className={`w-full rounded-lg border px-4 py-3 outline-none transition ${errors.fullName
//                             ? "border-red-500"
//                             : "border-gray-300 focus:border-blue-500"
//                         }`}
//                 />

//                 {errors.fullName?.message && (
//                     <p className="mt-1 text-sm text-red-500">
//                         {errors.fullName.message}
//                     </p>
//                 )}
//             </div>

//             {/* Email */}
//             <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Email <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                     type="email"
//                     placeholder="Enter Email"
//                     {...register("email", {
//                         required: "Email is required",
//                         pattern: {
//                             value:
//                                 /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                             message: "Please enter a valid email",
//                         },
//                     })}
//                     className={`w-full rounded-lg border px-4 py-3 outline-none transition ${errors.email
//                             ? "border-red-500"
//                             : "border-gray-300 focus:border-blue-500"
//                         }`}
//                 />

//                 {errors.email?.message && (
//                     <p className="mt-1 text-sm text-red-500">
//                         {errors.email.message}
//                     </p>
//                 )}
//             </div>

//             {/* Phone */}
//             <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Phone Number <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                     type="text"
//                     placeholder="Enter Phone Number"
//                     {...register("phone", {
//                         required: "Phone Number is required",
//                         pattern: {
//                             value: /^[6-9]\d{9}$/,
//                             message: "Enter a valid 10-digit mobile number",
//                         },
//                     })}
//                     className={`w-full rounded-lg border px-4 py-3 outline-none transition ${errors.phone
//                             ? "border-red-500"
//                             : "border-gray-300 focus:border-blue-500"
//                         }`}
//                 />

//                 {errors.phone?.message && (
//                     <p className="mt-1 text-sm text-red-500">
//                         {errors.phone.message}
//                     </p>
//                 )}
//             </div>

//             {/* Date of Birth */}
//             <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Date of Birth <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                     type="date"
//                     {...register("dob", {
//                         required: "Date of Birth is required",
//                     })}
//                     className={`w-full rounded-lg border px-4 py-3 outline-none transition ${errors.dob
//                             ? "border-red-500"
//                             : "border-gray-300 focus:border-blue-500"
//                         }`}
//                 />

//                 {errors.dob?.message && (
//                     <p className="mt-1 text-sm text-red-500">
//                         {errors.dob.message}
//                     </p>
//                 )}
//             </div>

//         </div>
//     );
// }

"use client";

import { useFormContext } from "react-hook-form";

export default function PersonalInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      {/* FULL NAME */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Enter Full Name"
          {...register("fullName", {
            required: "Full Name is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters required",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
            errors.fullName
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.fullName?.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter valid email",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
            errors.email
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.email?.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* PHONE */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Enter Phone Number"
          {...register("phone", {
            required: "Phone Number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter valid 10-digit number",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
            errors.phone
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.phone?.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* DOB */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Date of Birth <span className="text-red-500">*</span>
        </label>

        <input
          type="date"
          {...register("dob", {
            required: "Date of Birth is required",
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
            errors.dob
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.dob?.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.dob.message}
          </p>
        )}
      </div>

    </div>
  );

  
}