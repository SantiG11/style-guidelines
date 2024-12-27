import "./App.css";

import { useEffect, useState } from "react";
import DemoPage from "./payments/page";

function App() {
  const [demoPageComponent, setDemoPageComponent] =
    useState<JSX.Element | null>(null);

  useEffect(() => {
    const loadDemoPage = async () => {
      const component = await DemoPage();
      setDemoPageComponent(component);
    };
    loadDemoPage();
  }, []);

  return (
    <>
      <div className="container mx-auto py-10">{demoPageComponent}</div>
    </>
  );
}

export default App;
