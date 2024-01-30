"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";
const HomePage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const onLogOut = async () => {
    const response = await axios.post("http://localhost:3000/api/users/logout");
    if (response.status == 200) {
      toast({
        title: "Goodbye",
        description: "See you soon",
      });
      setTimeout(() => {
        router.push(routes.LOGINPAGE);
      }, 2000);
    }
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={onLogOut}>Logout</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
