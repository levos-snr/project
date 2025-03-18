import { api, HydrateClient } from "~/trpc/server";
import { Navbar } from "./components/Navbar";

export default async function Home() {
  // const hello = await api.user.hello({ text: "from tRPC" });

  void api.user.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <Navbar />
      </main>
    </HydrateClient>
  );
}
