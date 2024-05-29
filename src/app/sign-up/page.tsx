"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { auth } from "@/lib/firebaseConfig";

import { useRouter } from "next/navigation";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { addUser } from "@/utils/users";
import Link from "next/link";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  async function handleSubmit() {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res);
      sessionStorage.setItem("email", email);

      const newUser = {
        firstName,
        lastName,
        email,
      };

      await addUser(newUser);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");

      router.push("/"); // Redirect to home page after login
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Link className="text-3xl absolute top-4 left-4" href="/">
        ToDo
      </Link>
      <div className="flex h-screen items-center justify-center">
        <Card className="w-max m-auto ">
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>Sign up for a new account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-8">
              <div>
                <Label className="text-lg" htmlFor="firstName">
                  First Name
                </Label>
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="shadow-sm border-4"
                  type="text"
                  id="firstName"
                  name="firstName"
                />
              </div>
              <div>
                <Label className="text-lg" htmlFor="lastName">
                  Last Name
                </Label>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="shadow-sm border-4"
                  type="text"
                  id="lastName"
                  name="lastName"
                />
              </div>
            </div>
            <div>
              <Label className="text-lg" htmlFor="email">
                Email
              </Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm border-4"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div>
              <Label className="text-lg" htmlFor="password">
                Password
              </Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-sm border-4"
                type="password"
                id="password"
                name="password"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-primary text-white py-2 px-4 rounded-md mt-4"
            >
              Submit
            </button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
