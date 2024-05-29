import React from "react";
import Image from "next/image";
import RichDad from "./../../../assets/richDad.jpg";import { Button } from "@/components/ui/button";
function Singlebook() {
  return (
    <section className="container max-w-6xl mx-auto ">
      <div className="flex flex-row py-9 mt-4 gap-10 space-x-10 ">
        <div className="w-1/2">
          <h1 className="mb-5 text-5xl font-bold leading-[1.1]">
            5 Magic Programming Things
          </h1>

          <span className=" font-sans text-xl">By Rakesh</span>

          
          <p className="text-xl font-sans mt-9" >This is the book for every programmer</p>


          <Button className="mt-8" >Download The Book</Button>
        </div>
        <div className="w-2/2 flex justify-end h-[500px] p-5">
          <Image
            src={RichDad}
            alt={"RichDad"}
            className="rounded-md border"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Singlebook;
