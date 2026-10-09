import { ThemeProvider } from "./hooks/useTheme.jsx";
import { Router } from "./router/Router";
import Home from "./pages/Home";
import CustomCursor from "./components/common/CustomCursor";

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Router>
        <Home />
      </Router>
    </ThemeProvider>
  );
}

export default App;