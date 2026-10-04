import { Route, Switch } from "wouter";
import "./App.css";
import Menu from "./components/menu/Menu";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Container from "./components/container/Container";
import ProductDetail from "./pages/product-detail/ProductDetail";

function App() {
  return (
    <>
      <Menu />
      <Container>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
