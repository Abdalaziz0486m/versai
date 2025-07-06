import DetailsSlider from "@/components/product/DetailsSlider";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";
import { GiSevenPointedStar } from "react-icons/gi";
import { RiShoppingBasketLine } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";

const Product = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row borBottom">
            <div className="col-xl-6 col-sm-12">
              <DetailsSlider />
              <div className="d-flex secCart2 sctionCart mt-5 pt-5 p-3">
                <div>
                  <h2>أهدي من تحب</h2>
                  <p>
                    الآن ، يمكنك إرسال الهدايا إلى أحبائك باستخدام منصتنا في أي
                    وقت تريد!
                  </p>
                </div>
                <div>
                  <button className="w-100 d-flex justify-content-center gap-2 fw-bold">
                    <i class="fa-solid fa-gift"></i>
                    أرسلها كهديه
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-12 sctionCart">
              <div className="f-flex mt-4 text-start">
                <FaRegHeart className="fs-5" />
                <IoShareSocialOutline className="me-5 fs-5" />
              </div>
              <div className="mt-4 ">
                <h2>كريب ياباني كحلي غامق قصة عملية ٣٦٥ $</h2>
                <p>السعر شامل الضريبه</p>
                <p className="avilibaleP d-flex gap-2 ">
                  <CiCircleCheck className="fs-4" />
                  متوفر
                </p>
              </div>
              <div className="Factures p-4">
                <p>
                  أو قسم فاتورتك بقيمة{" "}
                  <span className="numFacture fw-bold">91.25 $</span> على 4
                  دفعات بدون رسوم تأخير، متوافقة مع الشريعة الإسلامية{" "}
                  <a href="" className="">
                    اعرف اكثر
                  </a>
                </p>
              </div>
              <div className="Factures2 mt-4 p-4">
                <p>
                  ابتداءً من
                  <span className="numFacture fw-bold"> 91.25 /شهر</span> أو على
                  4 دفعات بدون فوائد. متوافق مع أحكام الشريعة.{" "}
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
                    <select name="" id="" className="w-100 p-1">
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
                    <i class="fa-solid fa-plus fa-lg"></i>
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
          </div>
          <div className="row sctionCart mt-5">
            <div className="col-12 col-lg-4 allProductDetail position-relative">
              <div className=" mb-4 productDetail">
                <button
                  className="fs-5 productDetailBtn"
                  data-bs-toggle="collapse"
                  data-bs-target="#myText"
                >
                  تفاصيل المنتج
                </button>
              </div>
              <div className="productDetail">
                <button
                  className="fs-5 productDetailBtn1"
                  data-bs-toggle="collapse"
                  data-bs-target="#myText2"
                >
                  تقييمات المنتج
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-8 collapse" id="myText">
              <h6 className="fs-5 goldColor">
                عباية كريب ياباني كحلي غامق قصة عملية - كلوش
              </h6>
              <h5 className="fw-bold greenColor">SE574</h5>
              <p>
                عباية أنيقة بتصميم عملي يناسب ذوقك الهادئ والراقي. مصنوعة من
                كريب ياباني فاخر بلونه الكحلي الغامق، بتفصيل كلوش واسع يمنحك
                راحة طوال اليوم دون التنازل عن الأناقة. خيار مثالي للإطلالات
                اليومية، العمل أو الزيارات البسيطة
              </p>
              <h2 className="goldColor">
                مواصفات العباية : كريب ياباني كحلي غامق قصة عملية كلوش
              </h2>
              <ul>
                <li>نوع المنتج: عباية صيفي</li>
                <li>تصنيف المنتج: صيفي</li>
                <li>رقم الموديل : SE574</li>
                <li>القصة: كلوش</li>
                <li>القماش: كريب ياباني</li>
                <li>اللون: كحلي</li>
                <li>الخيارات:</li>
                <li>بلد الصنع: السعودية</li>
              </ul>
              <h2 className="goldColor">
                مميزات العباية : كريب ياباني كحلي غامق قصة عملية كلوش
              </h2>
              <ul>
                <li>خامة كريب ياباني ناعمة، خفيفة، وراقية</li>
                <li>قصة كلوش عملية توفر راحة وأناقة يومية</li>
                <li>لون كحلي غامق أنيق وسهل التنسيق مع الإكسسوارات</li>
                <li>مناسبة لأجواء العمل أو الاستخدام اليومي المريح</li>
                <li>تصميم بسيط وراقي بدون مبالغة</li>
                <li>تدوم في اللبس ومثالية للتنقل والروتين اليومي</li>
              </ul>
              <h6 className="fs-5 goldColor">طريقة الغسيل:</h6>
              <p>
                يرجى غسل العباية باليد، عند غسلها انقعيها في الماء لمدة عشر
                دقائق.
              </p>
              <p>الكي: يرجى استخدام درجة حرارة متوسطة عند كي العباية.</p>
            </div>
            <div className="collapse col-12 col-lg-8" id="myText2">
              <label for="notes"></label>
              <textarea
                id="notes"
                rows="5"
                className="w-100"
                placeholder="شاركنا سؤالك او تعليقك 😊"
              ></textarea>
              <div className="text-start">
                <button className="fs-5">إرسال</button>
              </div>
            </div>
            <div className="mt-3">
              <button
                className="fs-5 productDetailBtn2 w-100"
                data-bs-toggle="collapse"
                data-bs-target="#myText2"
              >
                تقييمات المنتج
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
