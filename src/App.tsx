import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routesConfig } from "./config";

const basename = "/";

const router = createBrowserRouter(routesConfig, {
  basename,
});

function App() {
  const [loading] = useState(false);

  return (
    <div className="App">
      {loading ? <div>loading</div> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
