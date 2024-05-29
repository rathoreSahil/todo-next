"use client";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);

      sessionStorage.setItem("email", email);
      setEmail("");
      setPassword("");

      router.push("/"); // Redirect to home page after login
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Link className="text-3xl absolute top-4 left-4" href="/">
        ToDo
      </Link>
      <div className="flex h-screen items-center justify-center">
        <Card className="w-1/3 m-auto ">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Email:</Label>
              <Input
                className="shadow-sm border-4"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label>Password:</Label>
              <Input
                className="shadow-sm border-4"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="bg-primary text-white py-2 px-4 rounded-md mt-4"
              onClick={handleLogin}
            >
              Login
            </button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
