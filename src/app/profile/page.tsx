"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

import { getUser } from "@/utils/users";
import Link from "next/link";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      // Fetch Profile
      const currentUser = await getUser();
      setUser(currentUser);
      console.log(currentUser);
    }
    fetchProfile();
  }, []);
  return (
    <>
      <Link className="text-3xl absolute top-4 left-4" href="/">
        ToDo
      </Link>
      <Card className="text-center h-screen pt-48">
        <CardHeader>
          <CardTitle className="text-6xl mb-12">Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <div>{user.email}</div>
        </CardContent>
      </Card>
    </>
  );
}
