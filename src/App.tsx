import { ChakraProvider, Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import People from "./pages/People";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import usePeople from "./components/hooks/usePeople";

function App() {
  const { loading, people } = usePeople();

  return (
    <ChakraProvider>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="people"
              element={<People loading={loading} people={people} />}
            />
            <Route path="people/:id" element={<Detail people={people} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

export default App;
