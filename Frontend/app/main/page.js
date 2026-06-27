"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfilesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProfiles = async () => {
        try {
            const res = await fetch("http://127.0.0.1:8000/profile");
            const json = await res.json();
            setData(json);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfiles();
    }, []);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center text-xl">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">

            <div className="mx-auto max-w-7xl">

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Profiles</h1>

                    <Link
                        href="/"
                        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                    >
                        + Add Profile
                    </Link>
                </div>

                {data.length === 0 ? (
                    <div className="bg-white p-10 text-center rounded-xl">
                        No Data Found
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">

                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl shadow p-6"
                            >

                                {/* PERSONAL */}
                                <h2 className="text-xl font-bold">
                                    {item.personal?.fullName}
                                </h2>

                                <p>{item.personal?.email}</p>
                                <p>{item.personal?.phone}</p>

                                <hr className="my-4" />

                                {/* COMPANY */}
                                <h3 className="font-semibold">
                                    {item.company?.companyName}
                                </h3>

                                <p>{item.company?.companyEmail}</p>
                                <p>{item.company?.website}</p>

                                {/* BUTTONS */}
                                <div className="flex gap-3 mt-5">

                                    {/* EDIT PERSONAL */}
                                    <Link
                                        href={`/profiles/personal/${item.id}`}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded"
                                    >
                                        Edit Personal
                                    </Link>

                                    {/* EDIT COMPANY */}
                                    <Link
                                        href={`/profiles/company/${item.id}`}
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                    >
                                        Edit Company
                                    </Link>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

        </div>
    );
}