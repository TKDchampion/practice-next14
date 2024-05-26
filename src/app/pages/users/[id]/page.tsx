import SingleUser from "@/components/Single-user";
import { Suspense } from "react";

type Props = {
  params: {
    id: string;
  };
};

type User = {
  name: string;
  id: string;
  avatar: string;
};

// Return a list of `params` to populate the [id] dynamic segment
export async function generateStaticParams() {
  const users: User[] = await fetch(
    "https://66504ac3ec9b4a4a60317b34.mockapi.io/contain"
  ).then((res) => res.json());

  const ids = users.map(({ id }) => ({
    id: id.toString(),
  }));

  return ids;
}

export default async function Users({ params }: Props) {
  return (
    <main>
      <h1>User id from route {params.id}</h1>
      <Suspense fallback={<p>Loading feed...</p>}>
        <SingleUser params={params} />
      </Suspense>
    </main>
  );
}
