import Discountsection from "./components/discountsection";
import Featureproducts from "./components/featureproducts";
import Herosection from "./components/herosection";
import Newslettersection from "./components/newslettersection";
import Services from "./components/services";
import Trendingproducts from "./components/trendingproducts";

export default function Home() {

  return (
    <>
      <Herosection />
      <Featureproducts />
      <Trendingproducts />
      <Services />
      <Discountsection />
      <Newslettersection />
    </>
  );
}
