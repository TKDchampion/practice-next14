import Buttons from "@/components/Buttons";
import "./about.scss";
import { getServerSideFakeFtnRromise } from "@/services/fake";

export default async function About() {
  const data = await getServerSideFakeFtnRromise();
  console.log(data);

  return (
    <main className="about">
      <h1>About</h1>
      <p>auto to CSR</p>
      {data.map((item: any) => {
        return <p key={item.name}>{item.name}</p>;
      })}
      <Buttons />
    </main>
  );
}
