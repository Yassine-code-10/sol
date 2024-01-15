import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "./common/Navbar";

export default function HomeLayout() {
  return (
    <div className="flex flex-col h-full w-full gap-3 p-6 bg-[url('assets/images/bg.png')]">
      <Navbar />
      <div className="w-full h-full bg-neutral2 rounded-xl shadow-lg p-6">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
