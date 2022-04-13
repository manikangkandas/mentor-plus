import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Modal from "./components/Modal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-slate-50">
      {/* header */}
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className="min-h-screen relative xl:grid xl:grid-cols-4">
        {/* modal🤔 */}
        <Modal isModalOpen={isModalOpen} />
        {/* body */}
        <Body />
      </div>
    </div>
  );
}
