import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {
  const text = `The content section should contain a button and a text area. When the button is clicked, the text in the text area should be displayed below the button.`;

  return (
    <>
      <Header title={"Module 6 Assignment"} />
      <Content text={text} />
      <Footer />
    </>
  );
}

export default App;
