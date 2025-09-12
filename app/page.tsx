// server components
// interleaving = merender server dan client components secara berselang-seling (mixed) dalam satu pohon React

import { Counter } from "@/app/counter";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Counter />
    </div>
  );
}
