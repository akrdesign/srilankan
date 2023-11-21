import "./App.scss";
import Layout from "./components/common/layout/Layout";
import FullSlider from "./components/fullSlider/FullSlider";
import Tabs from "./components/tabs/Tabs";

import { fullSliderData } from "./assets/data";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Layout>
        <FullSlider data={fullSliderData} />
        <div className="home__tabs__wrapper">
          <Tabs />
        </div>
        <Services />
      </Layout>
    </>
  );
}

export default App;
