import { Outlet } from "react-router";

import ComponentLayout from "./components/ui/Layout/ComponentLayout";

function App() {
  return (
    <>
      <ComponentLayout>
        <Outlet></Outlet>
      </ComponentLayout>
    </>
  );
}

export default App;
