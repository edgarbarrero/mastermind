import Board from "./components/Board";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-24">
         <Image
            className="p-24"
            src="/mastermind.png"
            alt="Next.js Logo"
            width={800}
            height={100}
            priority
          />
          
          <Board />
      </main>
    </>
  );
}
