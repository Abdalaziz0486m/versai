import DetailsSlider from "@/components/product/DetailsSlider";

const Product = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <DetailsSlider />
            </div>
            <div className="col-xxl-6 col-md-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
