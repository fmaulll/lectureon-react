import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import LayoutProvider from "./context/LayoutContext";
import { AuthRoutes, NonAuthRoutes } from "./router";
import { NonProtectedRoute, ProtectedRoute } from "./middleware/auth";

const App = () => {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <Layout>
          <Routes>
            {NonAuthRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <NonProtectedRoute>{route.component}</NonProtectedRoute>
                }
              />
            ))}
            {AuthRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={<ProtectedRoute>{route.component}</ProtectedRoute>}
              />
            ))}
          </Routes>
        </Layout>
      </LayoutProvider>
    </BrowserRouter>
  );
};

export default App;
