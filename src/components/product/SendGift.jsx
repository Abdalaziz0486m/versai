const SendGift = () => {
  return (
    <>
      <div className="d-flex secCart2 sctionCart mt-5 pt-5 p-3">
        <div>
          <h2>أهدي من تحب</h2>
          <p>
            الآن ، يمكنك إرسال الهدايا إلى أحبائك باستخدام منصتنا في أي وقت
            تريد!
          </p>
        </div>
        <div>
          <button className="w-100 d-flex justify-content-center gap-2 fw-bold fs-6">
            <i className="fa-solid fa-gift"></i>
            أرسلها كهديه
          </button>
        </div>
      </div>
    </>
  );
};

export default SendGift;
