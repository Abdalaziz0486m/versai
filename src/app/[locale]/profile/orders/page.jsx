
// import Nothing from "@/components/Profile/nothing";

import Image from "next/image";
import product from "../../../../images/card-image.png";

const Orders = () => {
  return (
    <>
      {/* <Nothing /> */}

      <section className="sctionCart container mt-3 mb-5">
              <h4 className="">الأمنيات</h4>
              <div className="d-flex justify-content-between mt-3 aboutProduct">
                <ul className="d-flex gap-5">
                  <li className="list-unstyled">
                    <Image
                      src={product}
                      alt="product"
                      width={60}
                      height={70}
                      className="productImg"
                    />
                  </li>
                  <li className="list-unstyled">
                    <p className="fs-5">سجاد تركي رصاصي بيج مقاس 200*300</p>
                    <p className="fs-5">385$</p>
                  </li>
                </ul>
                <div className="d-flex justify-content-around basKetBtn">
                  <div className="d-flex mt-4 xmarkDiv">
                    <i className="fa-solid fa-circle-xmark fa-xl"></i>
                  </div>
                </div>
              </div>
            </section>

    </>
  );
};

export default Orders;
