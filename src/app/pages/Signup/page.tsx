"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useEffect } from "react";

import axios from "axios";
import { toast } from "react-hot-toast";

function Signup() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="w-full py-6 bg-blue-100  min-h-screen  ">
      <div className="container w-[60%] mx-auto items-center">
        <div className="text-blue-900  font-serif p-2">
          <h1 className="text-3xl font-bold font-serif">Create Account</h1>
        </div>
        <div className="container w-full flex flex-col gap-6 p-2">
          <div className="flex flex-col gap-2">
            {" "}
            <Label htmlFor="email">Enter Your Email </Label>
            <Input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <Label htmlFor="Username">Enter Your Username </Label>
            <Input
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              name="Username"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <Label htmlFor="password">Enter Your password </Label>
            <Input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              placeholder="Password"
            />{" "}
            <p>
              <span className="text-primary">Note:</span> Password Container
              should be 6 digits
            </p>
          </div>{" "}
          <div className="flex flex-col gap-2">
            {" "}
            <Button className="rounded-md" onClick={onSignup}>
            {buttonDisabled ? "No signup" : "Signup"}
            </Button>
          </div>
        </div>
        <div className="flex justify-between py-5">
          {" "}
          <h1> Have your Account Already ?? </h1>
          <Button
            variant="outline"
            onClick={() => router.push("/pages/Signin")}
          >
            Signin
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
