import Image from "next/image";
import { Button } from "@/components/ui/button";
import paperImage from "./../assets/paper-bg.jpg";
import BookImage from "../assets/book.png";
import Bookscard from "./components/Card/page";
import Signin from "./pages/Signin/page";
import Signup from "./pages/Signup/page";
import Singlebook from "./pages/Singlebook/page";
export default function Home() {
  return (
    <>
      {/* <section>
        <div className="mx-auto max-w-7xl py-10">
          <div className="relative">
            {" "}
            <Image
              src={paperImage}
              alt="billboard"
              className="h-72 w-full rounded-lg"
              height={0}
              width={0}
              sizes="100vw"
            />{" "}
            <div className="absolute inset-0  h-full w-full rounded-lg bg-gray-950 opacity-30" />
            <Image
              src={BookImage}
              alt="billboard"
              className="absolute bottom-0 right-5"
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "auto", height: "18rem" }}
            />
            <h3 className="absolute left-10 top-1/2 w-full max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white">
              Connect, Share and Trade Your Favourite Reads...
            </h3>
          </div>
        </div>
      </section>{" "}
      <section>
        <Bookscard />
      </section> */}

      <Singlebook/>
    </>
  );
}
