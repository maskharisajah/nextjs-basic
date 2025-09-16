// server components
// interleaving = merender server dan client components secara berselang-seling (mixed) dalam satu pohon React

import { Counter } from "@/app/counter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Counter />
      <Image
        src='https://images.unsplash.com/photo-1756745678624-f07d39abb496?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='unsplash'
        width={800}
        height={600}
      />
    </div>
  );
}
