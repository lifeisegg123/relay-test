import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Detail = lazy(() => import("./pages/Detail"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>...app loading</div>}>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
