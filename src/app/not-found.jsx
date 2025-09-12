"use client"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <section>
       <DotLottieReact
      src="https://lottie.host/ec812c63-3e18-4052-8c6f-86a8dfb2edd0/ZW4w6MmYtz.lottie"
      loop
      autoplay
className=''
    />

           <div className="flex justify-center mt-1">
            <Link href="/">
              <button className="px-6 py-2 border border-[#00357A] text-[#00357A] rounded-md font-medium transition-all hover:bg-[#00357A] hover:text-white hover:cursor-pointer">
                Go to Home Page
              </button>
            </Link>
          </div>
    </section>
  )
}