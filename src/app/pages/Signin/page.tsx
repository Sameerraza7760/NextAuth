import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function Signin() {
  return (
    <div className="w-full py-6 bg-blue-100  min-h-screen">
      <div className="container w-[60%] mx-auto items-center">
        <div className="text-blue-900  font-serif p-2">
          <h1 className="text-3xl font-bold font-serif">Create Account</h1>
        </div>
        <div className="container w-full flex flex-col gap-6 p-2">
          <div className="flex flex-col gap-2">
            {" "}
            <Label htmlFor="email">Enter Your Email </Label>
            <Input type="email" name="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-2">
            {" "}
            <Label htmlFor="password">Enter Your password </Label>
            <Input type="password" placeholder="Password" />{" "}
            <p>
              <span className="text-primary">Note:</span> Password Contain
              should be 6 digits
            </p>
          </div>{" "}
          <div className="flex flex-col gap-2">
            {" "}
            <Button className="rounded-md">Signin</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
