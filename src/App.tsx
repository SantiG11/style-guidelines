import "./App.css";

import { useEffect, useState } from "react";
import { ColorTable } from "./tables/ColorTable";
import { FontTable } from "./tables/FontTable";

function App() {
  const [components, setComponents] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    const loadDemoPage = async () => {
      const components = [await ColorTable(), await FontTable()];
      setComponents(components);
    };
    loadDemoPage();
  }, []);

  return (
    <>
      <div className="container mx-auto py-10 w-1/4">{components}</div>
    </>
  );
}

export default App;
