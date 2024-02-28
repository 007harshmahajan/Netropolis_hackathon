import { Suspense } from "react";
import { Header } from "./components/header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <div className="fixed w-full bg-neutral-100 z-50">
        <Header />
      </div>
      <div className="h-[calc(100vh-64px)] overscroll-y-auto mt-16">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
