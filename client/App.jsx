import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainDisplay from "./components/MainDisplay.jsx";
import { getRandomId, isValidId } from "./utils/idHelper.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomeRedirect />}></Route>
          <Route path="/:id" element={<IdHandler />}></Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

const HomeRedirect = () => {
  const randomId = getRandomId();
  return <Navigate to={`/${randomId}`} />;
};

const IdHandler = () => {
  const { id } = useParams();
  if (isValidId(id)) return <MainDisplay />;
  const randomId = getRandomId();
  return <Navigate to={`/${randomId}`} />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
