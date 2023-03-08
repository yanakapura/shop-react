import { Routes, Route, Navigate } from "react-router-dom";

import "./App.scss";

import Hero from "./pages/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/pages">
            <Route path=":id" />
            <Route path="shop" >
              <Route index element={<Shop />}/>
              <Route path=":id" element={<ProductPage/>}/>
            </Route>
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
