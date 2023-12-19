import "./App.css";
import Content from "./component/content/Content";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import SideMenu from "./component/sidemenu/SideMenu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
