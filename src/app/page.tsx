import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
         <Image
            className="p-24"
            src="/mastermind.png"
            alt="Next.js Logo"
            width={500}
            height={100}
            style={{
              padding: '0px',
            }}            priority
          />
          <Image
            className="p-24"
            src="/wooden-mastermind.png"
            alt="Next.js Logo"
            width={600}
            height={100}
            style={{
              padding: '0px',
            }}
            priority
          />
          <Link 
            href="/board" 
            className="inline-block bg-blue-600 text-white px-30 py-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Play!!
          </Link>
      </main>
    </>
  );
}
