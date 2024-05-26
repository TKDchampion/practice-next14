import Image from "next/image";
import Link from "next/link";

async function getUsers() {
  // Always cache the data
  const response = await fetch(
    "https://66504ac3ec9b4a4a60317b34.mockapi.io/contain",
    {
      next: { revalidate: 5 },
      // cache: "force-cache",
      // SSG
      // cache: "no-store",
      // 如果要用 SSR 則是設定 cache: 'no-store'
    }
  );

  if (!response.ok) throw Error;

  const data = await response.json();

  return data;
}

type User = {
  name: string;
  id: string;
  avatar: string;
};

export default async function Users() {
  const data = await getUsers();

  return (
    <main>
      <h1>Users</h1>
      {data.map((user: User) => {
        return (
          <Link key={user.id} href={`/pages/users/${user.id}`}>
            <div>
              <p>
                id: {user.id} name: {user.name}
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={30}
                  height={30}
                />
              </p>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
