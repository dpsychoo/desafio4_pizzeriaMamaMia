import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pizza from "./components/Pizza";
//import Home from "./views/Home";
// import Cart from "./components/Cart";
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Pizza />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
};

export default App;
