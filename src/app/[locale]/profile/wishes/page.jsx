// import { FaRegHeart } from "react-icons/fa6";
import Image from "next/image";
import product from "../../../../images/card-image.png";
import React from "react";
const Wishes = () => {
  return (
    <>
      {/* <section className="sctionCart container mt-3">
        <p className="fs-4">الأمنيات</p>
        <div className="d-flex justify-content-center">
          <div className="borderBox">
            <FaRegHeart className="fs-1" color="#d1d5db" />
          </div>
        </div>
        <p className="text-center mt-3 fs-5">الأمنيات غالبا تتحقق !</p>
      </section> */}

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
            <div className="ms-3">
              <button className="">إضافة للسله</button>
            </div>
            <div className="d-flex mt-4 xmarkDiv">
              <i className="fa-solid fa-circle-xmark fa-xl"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishes;
