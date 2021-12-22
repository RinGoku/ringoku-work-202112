import React, { Suspense } from "react";
import "./App.css";
import LandingContent from "./components/landing/LandingContent";

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <LandingContent />
    </Suspense>
  );
}

export default App;
