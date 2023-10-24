import { UserButton, auth, useAuth } from "@clerk/nextjs";

function Home() {
  const { userId } = auth();
  console.log(userId);

  return (
    <div>
      Welcome to StackOverFlow Clone
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Home;
