import { TeamLeafItem } from "@/components/tea-leaf-item";
import { getData } from "@/lib/data";

export default function Home() {
  const data = getData();
  return (
    <main className="min-h-screen p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 grid-rows-2">
      {data.map((item) => <TeamLeafItem key={item.name} {...item}/>)}
    </main>
  );
}
