"use client";

import { FormProvider, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

import PersonalInfoForm from "@/app/Profile/profileInfo";
import CompanyInfoForm from "@/app/Company/CompanyInfo";

export default function Home() {
  const router = useRouter();

  const methods = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      companyName: "",
      gstNumber: "",
      companyEmail: "",
      website: "",
      companyAddress: "",
    },
  });

  const onSubmit = async (data) => {
    const toastId = toast.loading("Saving profile...");

    try {
      // NEW STRUCTURE (important for backend)
      const payload = {
        personal: {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          dob: data.dob,
        },
        company: {
          companyName: data.companyName,
          gstNumber: data.gstNumber,
          companyEmail: data.companyEmail,
          website: data.website,
          companyAddress: data.companyAddress,
        },
      };

      const response = await fetch("http://127.0.0.1:8000/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Save failed");
      }

      await response.json();

      toast.update(toastId, {
        render: "Profile Saved Successfully",
        type: "success",
        isLoading: false,
        autoClose: 1500,
      });

      setTimeout(() => {
        router.push("/profiles");
      }, 1500);
    } catch (err) {
      toast.update(toastId, {
        render: "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  };

  const onError = () => {
    toast.error("Please fill all required fields");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onError)}>

          {/* HEADER */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

              <div className="flex items-center gap-5">
                <img
                  src="https://ui-avatars.com/api/?name=User&background=random&size=128"
                  className="h-24 w-24 rounded-full border-4 border-white shadow-lg"
                />

                <div>
                  <h1 className="text-3xl font-bold">Profile Settings</h1>
                  <p className="mt-2 text-blue-100">
                    Manage personal & company info
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 shadow hover:scale-105 transition"
              >
                Save Changes
              </button>

            </div>
          </div>

          {/* BODY */}
          <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">

            {/* PERSONAL */}
            <div className="rounded-2xl bg-white shadow-lg">
              <div className="border-b px-6 py-5">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                <p className="text-gray-500 mt-1">
                  Update your personal details
                </p>
              </div>

              <div className="p-6">
                <PersonalInfoForm />
              </div>
            </div>

            {/* COMPANY */}
            <div className="rounded-2xl bg-white shadow-lg">
              <div className="border-b px-6 py-5">
                <h2 className="text-2xl font-bold">Company Information</h2>
                <p className="text-gray-500 mt-1">
                  Update your company details
                </p>
              </div>

              <div className="p-6">
                <CompanyInfoForm />
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow hover:bg-blue-700"
              >
                Save Profile
              </button>
            </div>

          </div>

        </form>
      </FormProvider>

      <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
}


// "use client";

// import { FormProvider, useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { useRouter } from "next/navigation";

// import PersonalInfoForm from "@/app/Profile/profileInfo";
// import CompanyInfoForm from "@/app/Company/CompanyInfo";

// export default function Home() {
//   const methods = useForm({
//     mode: "onSubmit",
//     reValidateMode: "onChange",
//     shouldFocusError: true,
//     defaultValues: {
//       fullName: "",
//       email: "",
//       phone: "",
//       dob: "",
//       companyName: "",
//       gstNumber: "",
//       companyEmail: "",
//       website: "",
//       companyAddress: "",
//     },
//   });

//   const router = useRouter();

//   const onSubmit = async (data) => {
//     console.log("Form Data:", data);

//     const toastId = toast.loading("Saving profile...");

//     try {

//       const response = await fetch("http://127.0.0.1:8000/profile", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error("Save failed");
//       }
//       const result = await response.json();
//       console.log(result);

//       toast.update(toastId, {
//         render: "Profile Saved Successfully",
//         type: "success",
//         isLoading: false,
//         autoClose: 1500,
//       });

//       setTimeout(() => {
//         router.push("/main");
//       }, 1500);

//     } catch (err) {
//       console.log(err);

//       toast.update(toastId, {
//         render:
//           "Something went wrong ",
//         type: "error",
//         isLoading: false,
//         autoClose: 3000,
//       });
//     }
//   };

//   const onError = () => {
//     toast.error(
//       "Please fill all required fields "
//     );
//   };

//   return (
//     <div className="min-h-screen bg-slate-100">

//       <FormProvider {...methods}>

//         <form
//           onSubmit={methods.handleSubmit(
//             onSubmit,
//             onError
//           )}
//         >

//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">

//             <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">

//               <div className="flex items-center gap-5">

//                 <img
//                   src="https://ui-avatars.com/api/?name=User&background=random&size=128"
//                   alt="Profile"
//                   className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
//                 />

//                 <div>

//                   <h1 className="text-3xl font-bold">
//                     Profile Settings
//                   </h1>

//                   <p className="mt-2 text-blue-100">
//                     Manage your personal and company information.
//                   </p>

//                 </div>

//               </div>

//               <button
//                 type="submit"
//                 className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 shadow-lg transition hover:scale-105 hover:bg-gray-100"
//               >
//                 Save Changes
//               </button>

//             </div>

//           </div>

//           {/* Body */}
//           <div className="mx-auto max-w-7xl space-y-8 px-5 py-8">

//             {/* Personal */}
//             <div className="rounded-2xl bg-white shadow-lg">

//               <div className="border-b px-6 py-5">

//                 <h2 className="text-2xl font-bold">
//                   Personal Information
//                 </h2>

//                 <p className="mt-1 text-gray-500">
//                   Update your personal details.
//                 </p>

//               </div>

//               <div className="p-6">
//                 <PersonalInfoForm />
//               </div>

//             </div>

//             {/* Company */}
//             <div className="rounded-2xl bg-white shadow-lg">

//               <div className="border-b px-6 py-5">

//                 <h2 className="text-2xl font-bold">
//                   Company Information
//                 </h2>

//                 <p className="mt-1 text-gray-500">
//                   Update your company details.
//                 </p>

//               </div>

//               <div className="p-6">
//                 <CompanyInfoForm />
//               </div>

//             </div>

//             {/* Footer */}
//             <div className="flex justify-end">

//               <button
//                 type="submit"
//                 className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow hover:bg-blue-700"
//               >
//                 Save Profile
//               </button>

//             </div>

//           </div>

//         </form>

//       </FormProvider>

//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         closeOnClick
//         pauseOnHover
//       />

//     </div>
//   );
// }