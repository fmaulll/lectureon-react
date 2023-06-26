import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./layout";
import LayoutProvider from "./context/LayoutContext";

const App = () => {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </LayoutProvider>
    </BrowserRouter>
  );
};

export default App;
