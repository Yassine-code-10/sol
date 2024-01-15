import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import Navbar from "./common/Navbar";

export default function AuthLayout() {
  return (
    <div className="flex flex-col h-full w-full gap-3 p-6 bg-[url('assets/images/bg.png')]">
      <img className="absolute top-0 right-0" src={require('../assets/images/rightOne.png')}/>
      <img className="absolute bottom-0 left-0" src={require('../assets/images/leftOne.png')}/>
      <Navbar />
      <div className="grid w-full h-full place-items-center">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
