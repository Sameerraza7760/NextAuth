"use client";
import React from "react";
import { BookOpen } from "lucide-react";
import { Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
function Navbar() {
  const router = useRouter();
  return (
    <section className=" border-b">
      <nav className="py-4 mx-auto items-center max-w-7xl  justify-between flex">
        <div className="flex gap-2 items-center ">
          {" "}
          {/* <Link href={"/"}> */}{" "}
          <div className="relative">
            <Hexagon size={50} className="bg-primary text-primary" />
            <div className="absolute inset-0 flex items-center justify-center">
              <BookOpen className="text-white fill-current" />
            </div>
          </div>
          <span className="text-xl font-bold uppercase text-primary">
            Coders Book
          </span>
        </div>
        {/* </Link> */}

        <div className="gap-5 flex">
          <Button
            onClick={() => router.push("/pages/Signin")}
            variant={"link"}
            className="border border-primary bg-white text-primary"
          >
            Signin
          </Button>
          <Button onClick={() => router.push("/pages/Signup")}>Signup</Button>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
