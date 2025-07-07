import { PiCodesandboxLogoDuotone } from "react-icons/pi";
const Nothing = () => {
  return (
    <>
      <section className="sctionCart container mt-3">
        <p className="fs-4">الطلبات</p>
        <div className="d-flex justify-content-center">
          <div className="borderBox">
            <PiCodesandboxLogoDuotone className="fs-1" color="#d1d5db" />
          </div>
        </div>
        <p className="text-center mt-3 fs-5">لا يوجد طلبات</p>
      </section>
    </>
  );
};

export default Nothing;
