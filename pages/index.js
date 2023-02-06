
import { Inter } from "@next/font/google";
import React from "react";
import HomeComponents from '../src/components/app/Home'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <HomeComponents/>
    </>
  );
}
