import React from "react";
import Todo from "./components/Todo";
import "./index.css";

export default function App() {
  return (
    <div className="grid bg-animated py-4 min-h-screen">
      <Todo />
    </div>
  )
}