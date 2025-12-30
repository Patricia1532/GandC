import ByBrands from "./bybrands";
import Carousel from "./carousel";
import Footer from "./footer";
import MostPopular from "./mostpopular";
import Navbar from "./navbar";
import NewArrivals from "./newarrivals";
import OnSale from "./onsale";

export default function Homepage() {
  return (
    <div className="bg-pink-50">
      <Navbar />
      <Carousel />
      <div className="mx-20">
        <MostPopular />
        <OnSale />
        <ByBrands />
        <NewArrivals />
      </div>
      <Footer />
    </div>
  );
}
