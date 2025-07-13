import DetailsSlider from "@/components/product/DetailsSlider";
import SendGift from "@/components/product/SendGift";
import ProductDetails from "@/components/product/ProductDetails";
import ProductDetails$Reviews from "@/components/product/ProductDetails$Reviews";


const Product = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row borBottom">
            <div className="col-xl-6 col-sm-12">
              <DetailsSlider />
              <SendGift />
            </div>
            <div className="col-xl-6 col-md-12 sctionCart">
              <ProductDetails />
            </div>
          </div>
          <ProductDetails$Reviews />
        </div>
      </section>
    </>
  );
};

export default Product;
