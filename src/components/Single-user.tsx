import Image from "next/image";

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function getUsersById(id: string) {
  // Always cache the data
  const response = await fetch(
    "https://66504ac3ec9b4a4a60317b34.mockapi.io/contain",
    {
      cache: "force-cache",
      // SSG
      //   cache: "no-store",
      // 如果要用 SSR 則是設定 cache: 'no-store'
    }
  );

  if (!response.ok) throw Error;

  await delay(2000);
  const data = await response.json();

  return data.find((i: User) => i.id === id);
}

type User = {
  name: string;
  id: string;
  avatar: string;
};

type Props = {
  params: {
    id: string;
  };
};

export default async function SingleUser({ params }: Props) {
  const user: User = await getUsersById(params.id);

  return (
    <main>
      <div>--- component ---</div>
      <div>ID: {user?.id}</div>
      <div>NAME: {user?.name}</div>
      <Image src={user?.avatar} alt={user?.name} width={500} height={500} />
    </main>
  );
}
