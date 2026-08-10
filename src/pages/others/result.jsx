import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    const message = location.state?.message || "Something went wrong";
    const value = location.state?.value || false;
    const next = location.state?.next || "/";

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(next);
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate, next]);

    return (
        <div className="w-full h-dvh flex justify-center items-center bg-gray-50 dark:bg-black px-5">
            <div className="w-full max-w-md p-8 rounded-2xl bg-white dark:bg-zinc-950 shadow-lg border border-gray-200 dark:border-zinc-800 text-center">
                <div className={`mx-auto w-20 h-20 rounded-full flex justify-center items-center ${value ? "bg-green-100 dark:bg-green-950" : "bg-red-100 dark:bg-red-950"}`}>
                    {value ? <i className="fa-solid fa-circle-check text-green-500 text-4xl"></i> : <i className="fa-solid fa-circle-xmark text-red-500 text-4xl"></i>}
                </div>
                <h2 className="mt-5 text-xl font-semibold text-gray-800 dark:text-white">{value ? "Success" : "Failed"}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{message}</p>
                <p className="mt-5 text-xs text-gray-400">Redirecting...</p>
            </div>
        </div>
    );
}

export default Result;


