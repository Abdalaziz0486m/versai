import { HiSpeakerphone } from "react-icons/hi";
import { MdOutlinePersonOff } from "react-icons/md";

const Profile = () => {
  return (
    <>
      <section className="container sctionCart mt-4">
        <div className="row">
          <div className="col-12 col-md-6">
            <h4>حسابي</h4>
            <div className="row mt-1">
              <div className="col-12 col-md-6 mt-2">
                <label htmlFor="firstName">الاسم الأول</label>
                <input type="text" id="firstName" className="w-100" />
              </div>
              <div className="col-12 col-md-6 mt-2">
                <label htmlFor="lastName">الاسم الأخير</label>
                <input type="text" id="lastName" className="w-100" />
              </div>
              <div className="col-12 col-md-6 mt-2">
                <label htmlFor="birthDate">تاريخ الميلاد</label>
                <input
                  type="date"
                  name="birthDate"
                  id="birthDate"
                  placeholder="ادخل تاريخ الميلاد"
                  className="w-100"
                />
              </div>
              <div className="col-12 col-md-6 mt-2">
                <label htmlFor="sex">الجنس</label>
                <select name="" id="" className="w-100 p-2 selectSex">
                  <option value="">حدد نوع الجنس</option>
                  <option value="">ذكر</option>
                  <option value="">أنثي</option>
                </select>
              </div>
              <div className="col-12 col-md-6 mt-2">
                <label htmlFor="email">البريد الإلكتروني</label>
                <input type="email" className="w-100" />
              </div>
              <div className="col-12 col-md-6 mt-2">
                <label htmlFor="number">رقم الجوال</label>
                <input type="number" name="" id="number" className="w-100" />
              </div>
              <div className="col-12 mt-3 d-flex justify-content-center mb-4">
                <button className="w-75 fs-5">حفظ</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5 pe-5 p-4 ">
            <div className="row borBottom">
              <div className="col-6">
                <h5 className="d-flex gap-2">
                  <HiSpeakerphone className="fs-5" />
                  الرسائل الترويجية
                </h5>
                <p className="pe-4">
                  يمكنك التحكم في تعطيل أو تفعيل الرسائل الترويجية من المتجر.
                </p>
              </div>
              <div className="col-6">
                <div className="StoggleSwitcher  me-5 mt-3"></div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <h5 className="d-flex gap-2">
                  <MdOutlinePersonOff className="fs-4" />
                  تعطيل الحساب
                </h5>
                <p className="pe-4">
                  يمكنك حذف حسابك من المتجر ، بما في ذلك طلباتك السابقة ومنتجات
                  قائمة الأمنيات.
                </p>
              </div>
              <div className="mt-3 col-6">
                <button className="fs-5 btn btn-outline-danger">
                  تعطيل الحساب
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
