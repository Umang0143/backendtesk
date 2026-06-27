// "use client";

// import { useFormContext } from "react-hook-form";

// export default function CompanyInfoForm() {
//     const {
//         register,
//         formState: { errors },
//     } = useFormContext();

//     return (
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

//             {/* Company Name */}
//             <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Company Name <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                     type="text"
//                     placeholder="Enter Company Name"
//                     {...register("companyName", {
//                         required: "Company Name is required",
//                         minLength: {
//                             value: 3,
//                             message: "Minimum 3 characters required",
//                         },
//                     })}
//                     className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
//                         errors.companyName
//                             ? "border-red-500"
//                             : "border-gray-300 focus:border-blue-500"
//                     }`}
//                 />

//                 {errors.companyName?.message && (
//                     <p className="mt-1 text-sm text-red-500">
//                         {errors.companyName.message}
//                     </p>
//                 )}
//             </div>

//             {/* GST Number */}
//             <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     GST Number <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                     type="text"
//                     placeholder="22AAAAA0000A1Z5"
//                     {...register("gstNumber", {
//                         required: "GST Number is required",
//                         pattern: {
//                             value:
//                                 /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/,
//                             message: "Please enter a valid GST Number",
//                         },
//                     })}
//                     className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
//                         errors.gstNumber
//                             ? "border-red-500"
//                             : "border-gray-300 focus:border-blue-500"
//                     }`}
//                 />

//                 {errors.gstNumber?.message && (
//                     <p className="mt-1 text-sm text-red-500">
//                         {errors.gstNumber.message}
//                     </p>
//                 )}
//             </div>

//             {/* Company Email */}
//             <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Company Email <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                     type="email"
//                     placeholder="company@example.com"
//                     {...register("companyEmail", {
//                         required: "Company Email is required",
//                         pattern: {
//                             value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                             message: "Please enter a valid email",
//                         },
//                     })}
//                     className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
//                         errors.companyEmail
//                             ? "border-red-500"
//                             : "border-gray-300 focus:border-blue-500"
//                     }`}
//                 />

//                 {errors.companyEmail?.message && (
//                     <p className="mt-1 text-sm text-red-500">
//                         {errors.companyEmail.message}
//                     </p>
//                 )}
//             </div>

//             {/* Website */}
//             <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Website <span className="text-red-500">*</span>
//                 </label>

//                 <input
//                     type="url"
//                     placeholder="https://example.com"
//                     {...register("website", {
//                         required: "Website is required",
//                         pattern: {
//                             value:
//                                 /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/,
//                             message: "Please enter a valid website URL",
//                         },
//                     })}
//                     className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
//                         errors.website
//                             ? "border-red-500"
//                             : "border-gray-300 focus:border-blue-500"
//                     }`}
//                 />

//                 {errors.website?.message && (
//                     <p className="mt-1 text-sm text-red-500">
//                         {errors.website.message}
//                     </p>
//                 )}
//             </div>

//             {/* Address */}
//             <div className="md:col-span-2">
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Company Address <span className="text-red-500">*</span>
//                 </label>

//                 <textarea
//                     rows={4}
//                     placeholder="Enter Company Address"
//                     {...register("companyAddress", {
//                         required: "Company Address is required",
//                         minLength: {
//                             value: 10,
//                             message: "Address must be at least 10 characters",
//                         },
//                     })}
//                     className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
//                         errors.companyAddress
//                             ? "border-red-500"
//                             : "border-gray-300 focus:border-blue-500"
//                     }`}
//                 />

//                 {errors.companyAddress?.message && (
//                     <p className="mt-1 text-sm text-red-500">
//                         {errors.companyAddress.message}
//                     </p>
//                 )}
//             </div>

//         </div>
//     );
// }

"use client";

import { useFormContext } from "react-hook-form";

export default function CompanyInfoForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      {/* COMPANY NAME */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Company Name <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Enter Company Name"
          {...register("companyName", {
            required: "Company Name is required",
            minLength: {
              value: 3,
              message: "Minimum 3 characters required",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
            errors.companyName
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.companyName?.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.companyName.message}
          </p>
        )}
      </div>

      {/* GST NUMBER */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          GST Number <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="22AAAAA0000A1Z5"
          {...register("gstNumber", {
            required: "GST Number is required",
            pattern: {
              value:
                /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/,
              message: "Enter valid GST Number",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
            errors.gstNumber
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.gstNumber?.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.gstNumber.message}
          </p>
        )}
      </div>

      {/* COMPANY EMAIL */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Company Email <span className="text-red-500">*</span>
        </label>

        <input
          type="email"
          placeholder="company@example.com"
          {...register("companyEmail", {
            required: "Company Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter valid email",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
            errors.companyEmail
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.companyEmail?.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.companyEmail.message}
          </p>
        )}
      </div>

      {/* WEBSITE */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Website <span className="text-red-500">*</span>
        </label>

        <input
          type="url"
          placeholder="https://example.com"
          {...register("website", {
            required: "Website is required",
            pattern: {
              value:
                /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/,
              message: "Enter valid URL",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
            errors.website
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.website?.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.website.message}
          </p>
        )}
      </div>

      {/* ADDRESS */}
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-semibold text-gray-700">
          Company Address <span className="text-red-500">*</span>
        </label>

        <textarea
          rows={4}
          placeholder="Enter Company Address"
          {...register("companyAddress", {
            required: "Company Address is required",
            minLength: {
              value: 10,
              message: "Minimum 10 characters required",
            },
          })}
          className={`w-full rounded-lg border px-4 py-3 outline-none transition ${
            errors.companyAddress
              ? "border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />

        {errors.companyAddress?.message && (
          <p className="mt-1 text-sm text-red-500">
            {errors.companyAddress.message}
          </p>
        )}
      </div>

    </div>
  );
}