import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Header() {
  return (
    <div className="container-fluid text-center bg-dark text-white p-3 mb-3">
      <h1>FakeStore Api</h1>
    </div>
  );
}
