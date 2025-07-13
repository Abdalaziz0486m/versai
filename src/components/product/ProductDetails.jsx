import { CiCircleCheck } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { GiSevenPointedStar, GiWallet } from "react-icons/gi";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiShoppingBasketLine } from "react-icons/ri";

const ProductDetails = () => {
    return (
      <>
        <div>
          <div className="f-flex mt-4 text-end">
            <FaRegHeart className="fs-5" />
            <IoShareSocialOutline className="ms-5 fs-5" />
          </div>
          <div className="mt-4 ">
            <h2> سجادة2*3 حرير تركي ٣٦٥ $</h2>
            <p>السعر شامل الضريبه</p>
            <p className="avilibaleP d-flex gap-2 ">
              <CiCircleCheck className="fs-4" />
              متوفر
            </p>
          </div>
          <div className="Factures p-4">
            <p>
              أو قسم فاتورتك بقيمة{" "}
              <span className="numFacture fw-bold">91.25 $</span> على 4 دفعات
              بدون رسوم تأخير، متوافقة مع الشريعة الإسلامية{" "}
              <a href="" className="">
                اعرف اكثر
              </a>
            </p>
          </div>
          <div className="Factures2 mt-4 p-4">
            <p>
              ابتداءً من
              <span className="numFacture fw-bold"> 91.25 /شهر</span> أو على 4
              دفعات بدون فوائد. متوافق مع أحكام الشريعة.{" "}
              <a href="">لمعرفة المزيد </a>
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-4">
              <p className="fw-bold fs-5 d-flex mb-0">
                القياس
                <GiSevenPointedStar className="GiSevenPointedStar" />
              </p>
              <p className="">اختر</p>
            </div>
            <div className="col-12 col-md-8">
              <div className="">
                <select name="" id="" className="w-100 p-1 ">
                  <option value="">اختر</option>
                  <option value="">48</option>
                  <option value="">50</option>
                  <option value="">52</option>
                  <option value="">54</option>
                  <option value="">56</option>
                  <option value="">58</option>
                  <option value="">60</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="" className="fw-bold ">
              المرفقات
            </label>
            <div className=" pb-5">
              <input
                type="text"
                className="w-100 text-center mt-2"
                placeholder="إضافة ملاحظات"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fs-5">السعر</p>
            <p className="fs-5 fw-bold">٣٦٥ $</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fs-5">الكمية</p>
            <div className="d-flex justify-content-around pluORminCart w-25">
              <div className="plusCart1 position-relative">
                <i className="fa-solid fa-plus fa-lg"></i>
              </div>
              <div className="numCart1 position-relative">1</div>
              <div>
                <i className="fa-solid fa-minus fa-lg"></i>
              </div>
            </div>
          </div>
          <div className="d-flex gap-2 mt-4 mb-5">
            <button className="d-flex  justify-content-center gap-2 fw-bold cashBtn">
              <RiShoppingBasketLine />
              إضافه للسله
            </button>
            <button className="d-flex gap-2 justify-content-center fw-bold cashBtn">
              <GiWallet />
              اشتري الآن
            </button>
          </div>
        </div>
      </>
    );
}

export default ProductDetails;