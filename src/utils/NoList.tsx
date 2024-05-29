import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NoList() {
  return (
    <div className="pt-48 text-center space-y-4">
      <h1 className="text-6xl">To Do App</h1>
      <p className="text-3xl">Login or Sign-Up to track your To Dos</p>

      <div className="space-x-4">
        <Button size="lg" asChild>
          <Link href="/login">Login</Link>
        </Button>
        <Button size="lg" asChild>
          <Link href="/sign-up">Signup</Link>
        </Button>
      </div>
    </div>
  );
}
