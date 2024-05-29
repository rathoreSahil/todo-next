"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";
import { signOut } from "firebase/auth";
import NoList from "@/utils/NoList";
import { Spinner } from "@nextui-org/spinner";
import ToDoList from "@/utils/ToDoList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <nav className="flex p-4 justify-between">
        <p className="text-3xl">ToDo</p>
        <div>
          {user && (
            <div className="space-x-2">
              <Button className="bg-blue-500 rounded-3xl" asChild>
                <Link href="/profile">Profile</Link>
              </Button>

              <Button
                className="bg-red-500 rounded-3xl"
                onClick={() => {
                  signOut(auth);
                  sessionStorage.clear();
                }}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </nav>
      {user ? <ToDoList /> : loading ? <Spinner /> : <NoList />}
    </>
  );
}
