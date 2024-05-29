"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";
import { signOut } from "firebase/auth";
import NoList from "@/utils/NoList";
import { Spinner } from "@nextui-org/spinner";
import ToDoList from "@/utils/ToDoList";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <nav className="flex p-4 justify-between">
        <p className="text-3xl">ToDo</p>
        <div>
          {user && <button onClick={() => signOut(auth)}>Sign Out</button>}
        </div>
      </nav>
      {user ? <ToDoList /> : loading ? <Spinner /> : <NoList />}
    </>
  );
}
