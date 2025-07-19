import { GiSevenPointedStar } from "react-icons/gi";

const Cart = () => {
  return (
    <>
      <section className="sctionCart">
        <div className="container">
          <div className="mt-2 d-flex oneDivCart">
            <button className="basicBtnCart d-flex align-items-center gap-3">
              الرئيسيه
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <p className="mt-3">سلة المشتريات</p>
          </div>

          <div className="row ">
            <div className="col-12 col-lg-8 cartInfoProduct mt-2">
              <div className="text-start xmarkDiv">
                <i className="fa-solid fa-circle-xmark fa-xl"></i>
              </div>
              <div className="row">
                <div className="col-12 col-md-5">
                  <div className="d-flex">
                    <div>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div>
                      <p className="fw-bold fs-5 mb-0">
                        كريب ياباني كحلي غامق قصه عمليه
                      </p>
                      <p>365$</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="d-flex justify-content-around pluORminCart">
                    <div className="plusCart position-relative">
                      <i className="fa-solid fa-plus fa-lg"></i>
                    </div>
                    <div className="numCart position-relative">1</div>
                    <div>
                      <i className="fa-solid fa-minus fa-lg"></i>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <p className="fw-bold">المجموع: 365$</p>
                </div>
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
                <div className="noticsDiv position-relative pb-5">
                  <input
                    type="text"
                    className="w-100 text-center mt-2"
                    placeholder="إضافة ملاحظات"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4  mt-3">
              <div className="sendGift p-4 pt-5">
                <div className="d-flex">
                  <i className="fa-solid fa-gift fa-2xl  p-3"></i>
                  <h3>أرسل الطلب كهديه</h3>
                </div>
                <div className="pe-5">
                  <p>
                    الآن ، يمكنك إرسال الهدايا إلى أحبائك باستخدام منصتنا في أي
                    وقت تريد!
                  </p>
                </div>
                <div className="">
                  <button className="w-100 d-flex justify-content-center gap-2 fw-bold">
                    <i className="fa-solid fa-gift"></i>
                    أرسلها كهديه
                  </button>
                </div>
              </div>
              <div className="sendGift mt-5 p-4 mb-5">
                <div className="borBottom">
                  <h5>ملخص الطلب</h5>
                  <div className="d-flex justify-content-between">
                    <p>مجموع المنتجات (بدون ضريبة)</p>
                    <p className="fw-bold ">٣١٧٫٣٩$</p>
                  </div>
                </div>
                <div className="pt-3 borBottom">
                  <label htmlFor="">هل لديك كود خصم</label>
                  <div className="mt-2 discountInput position-relative mb-3">
                    <input
                      type="text"
                      placeholder="ادخل كود الخصم"
                      className="w-100 "
                    />
                  </div>
                </div>
                <div className="pt-3">
                  <div className="d-flex justify-content-between">
                    <p>ضريبة القيمة المضافة</p>
                    <p className="fw-bold">٤٧٫٦١$</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="fs-5">الإجمالي</p>
                    <p className="fw-bold fs-5">٣٦٥$</p>
                  </div>
                  <div>
                    <p>* الأسعار شاملة للضريبة</p>
                    <button className="w-100 fw-bold">اتمام الطلب</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
