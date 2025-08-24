import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
