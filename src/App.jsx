import { ThemeProvider } from "./hooks/useTheme.jsx";
import { Router } from "./router/Router";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Home />
      </Router>
    </ThemeProvider>
  );
}

export default App;