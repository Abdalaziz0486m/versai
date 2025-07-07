import { LiaInboxSolid } from "react-icons/lia";

const Notification = () => {
  return (
    <>
      <section className="sctionCart container mt-3">
        <p className="fs-4">الإشعارات</p>
        <div className="d-flex justify-content-center">
          <div className="borderBox">
            <LiaInboxSolid className="fs-1" color="#d1d5db" />
          </div>
        </div>
        <p className="text-center mt-3 fs-5">لا توجد إشعارات</p>
      </section>
    </>
  );
};

export default Notification;
