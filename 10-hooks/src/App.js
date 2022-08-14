import { useState } from "react";
import { useInput } from "./useInput";
import UseClick from "./components/useClick";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" <UseClick/> />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
