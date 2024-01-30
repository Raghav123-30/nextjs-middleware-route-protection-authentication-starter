"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { routes } from "@/constants/routes";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const onLogin = async () => {
    const body = {};
    const response = await axios.post(
      "http://localhost:3000/api/users/login",
      body
    );
    if (response.status == 200) {
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center w-[450px] mx-auto p-4">
      <Card>
        <CardHeader className="flex justify-center items-center">
          <CardTitle>Login to continue!</CardTitle>
          <CardDescription>We missed you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <Input placeholder="Email"></Input>
          <Input placeholder="Password" type="password"></Input>
          <Button onClick={onLogin}>Login</Button>
        </CardContent>
        <CardFooter>
          <Link href={routes.REGISTERPAGE} className="hover:underline">
            New user?Click here to register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
