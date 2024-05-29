import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import RichDad from "./../../../assets/richDad.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
function Bookscard() {
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10">
        {" "}
        <Card className="flex shadow-md">
          <CardHeader className="w-1/2 flex items-center justify-center">
            <Image width={200} height={120} src={RichDad} alt="ricFaf"></Image>
          </CardHeader>
          <CardContent className="w-2/3 py-5">
            <h2 className="line-clamp-2 text-2xl font-bold text-primary text-balance">
              5 Magic
            </h2>
            <p className="font-bold text-1xl text-primary mt-1">
              Programming Things
            </p>{" "}
            <p className="font-bold text-1xl text-black mt-1">Rakesh</p>
            <Button
              variant={"link"}
              className="border border-primary bg-white text-primary mt-4"
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Bookscard;
