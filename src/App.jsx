import { ThemeProvider } from "./hooks/useTheme.jsx";
import { Router, useRouter } from "./router/Router";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
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
      return <Products />;
    case '/contact':
      return <Contact />;
    case '/innovation-lab':
      return <InnovationLab />
    case '/careers':
      return <Careers />
    default:
      return <ComingSoon title="Page Not Found" />;
  }
}

import useSmoothScroll from "./hooks/useSmoothScroll";
import InnovationLab from "./pages/InnovationLab.jsx";
import Careers from "./pages/Careers.jsx";

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