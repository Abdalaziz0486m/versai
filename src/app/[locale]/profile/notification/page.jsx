// import { LiaInboxSolid } from "react-icons/lia";

import { BsBox2HeartFill } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";

const Notification = () => {
  return (
    <>
      {/* <section className="sctionCart container mt-3">
        <p className="fs-4">الإشعارات</p>
        <div className="d-flex justify-content-center">
          <div className="borderBox">
            <LiaInboxSolid className="fs-1" color="#d1d5db" />
          </div>
        </div>
        <p className="text-center mt-3 fs-5">لا توجد إشعارات</p>
      </section> */}

      <section className="container py-4 sctionCart">
        <h2 className="fs-5 mb-4">الإشعارات</h2>

        <ul className="list-unstyled">
          <li className="notificationCard d-flex justify-content-between align-items-center p-3 rounded-3 shadow-sm mb-3 bg-light">
            <div className="d-flex gap-3 align-items-start">
              <div className="fs-3">
                <BsBox2HeartFill color="#757575" />
              </div>
              <div>
                <p className="mb-1 fw-semibold">تم تجهيز طلبك وجاري الشحن</p>
                <small className="text-muted">منذ ساعتين</small>
              </div>
            </div>
            <button className="btn btn-sm btn-outline-danger">مسح</button>
          </li>

          <li className="notificationCard d-flex justify-content-between align-items-center p-3 rounded-3 shadow-sm mb-3 bg-light">
            <div className="d-flex gap-3 align-items-start">
              <div className="fs-2 text-warning">
                <CgDanger />
              </div>
              <div>
                <p className="mb-1 fw-semibold">
                  انتهت صلاحية العرض المفضل لديك
                </p>
                <small className="text-muted">منذ يوم</small>
              </div>
            </div>
            <button className="btn btn-sm btn-outline-danger">مسح</button>
          </li>
        </ul>

        <div className="text-center mt-4">
          <button className="btn btn-danger">مسح كل الإشعارات</button>
        </div>
      </section>
    </>
  );
};

export default Notification;
