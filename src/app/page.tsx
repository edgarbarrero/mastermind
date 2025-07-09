import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-24">
         <Image
            className="p-4 sm:p-8 md:p-24"
            src="/mastermind.png"
            alt="Next.js Logo"
            width={500}
            height={60}
            style={{
              padding: '0px',
            }}            priority
          />
          <Image
            className="p-4 sm:p-8 md:p-24"
            src="/wooden-mastermind.png"
            alt="Next.js Logo"
            width={400}
            height={60}
            style={{
              padding: '0px',
            }}
            priority
          />
          <Link 
            href="/board" 
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 md:px-30 py-3 sm:py-4 md:py-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base md:text-lg mb-4"
          >
            Play!!
          </Link>
          <Link
            href="/auth" 
            className="inline-block bg-green-700 text-white px-6 sm:px-8 md:px-30 py-3 sm:py-4 md:py-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base md:text-lg"
          >
            Login
          </Link>
      </main>
    </>
  );
}
