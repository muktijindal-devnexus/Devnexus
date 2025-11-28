"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function GlobalError({ error, reset }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-center p-6">
      <div className="w-144 h-124">
        <DotLottieReact
          src="https://lottie.host/f5e62fcb-e1ea-45e0-909d-9857298a66e8/wW6XccXclO.lottie"
          autoplay
          loop
        />
      </div>

      <h1 className="text-xl font-bold text-red-400 ">
        Oops! We're making improvements
      </h1>

      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-2 bg-[#00357A] text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
