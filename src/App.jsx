import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";

export default function App() {
  return (
    <>
      <div className="text-white">
        <BackgroundImage />

        <div className="min-h-screen flex flex-col ">

          <div className=""><Header /></div>
          <div className="flex-1 flex h-full"><Outlet /></div>
        </div>

      </div>
    </>
  );
}
