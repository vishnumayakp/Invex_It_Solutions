import { ThemeProvider } from "./hooks/useTheme.jsx";
import { Router, useRouter } from "./router/Router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ComingSoon from "./pages/ComingSoon";
import CustomCursor from "./components/common/CustomCursor";

function Routes() {
  const { path } = useRouter();

  switch (path) {
    case '/':
      return <Home />;
    case '/about':
      return <About />;
    case '/services':
      return <Services />;
    case '/products':
      return <ComingSoon title="Products" />;
    case '/contact':
      return <ComingSoon title="Contact" />;
    default:
      return <ComingSoon title="Page Not Found" />;
  }
}

import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  useSmoothScroll();

  return (
    <ThemeProvider>
      <CustomCursor />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;