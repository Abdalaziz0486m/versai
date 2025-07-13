"use client";
import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "../home/Testimonials";

export default function ProductDetails$Reviews() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="row sctionCart mt-5">
      <div className="col-12 col-lg-3 allProductDetail mb-3">
        <div className="d-flex flex-lg-column gap-2">
          <button
            className={`fs-5 productDetailBtn w-100 text-start ${
              activeTab === "details" ? "active" : ""
            }`}
            onClick={() => setActiveTab("details")}
          >
            تفاصيل المنتج
          </button>
          <button
            className={`fs-5 productDetailBtn w-100 text-start ${
              activeTab === "reviews" ? "active" : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            تقييمات المنتج
          </button>
        </div>
      </div>

      <div className="col-12 col-lg-9">
        <AnimatePresence mode="wait">
          {activeTab === "details" && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h6 className="fs-5 goldColor">
                عباية كريب ياباني كحلي غامق قصة عملية - كلوش
              </h6>
              <h5 className="fw-bold greenColor">SE574</h5>
              <p>عباية أنيقة بتصميم عملي يناسب ذوقك الهادئ والراقي...</p>
              <h2 className="goldColor">مواصفات العباية:</h2>
              <ul>
                <li>نوع المنتج: عباية صيفي</li>
                <li>تصنيف المنتج: صيفي</li>
                <li>رقم الموديل : SE574</li>
                <li>القصة: كلوش</li>
                <li>القماش: كريب ياباني</li>
                <li>اللون: كحلي</li>
                <li>بلد الصنع: السعودية</li>
              </ul>
              <h2 className="goldColor">مميزات العباية:</h2>
              <ul>
                <li>خامة كريب ياباني ناعمة، خفيفة، وراقية</li>
                <li>قصة كلوش عملية توفر راحة وأناقة يومية</li>
                <li>لون كحلي غامق أنيق وسهل التنسيق</li>
                <li>مناسبة لأجواء العمل أو الاستخدام اليومي</li>
              </ul>
              <h6 className="fs-5 goldColor">طريقة الغسيل:</h6>
              <p>
                يرجى غسل العباية باليد، عند غسلها انقعيها في الماء لمدة عشر
                دقائق.
              </p>
              <p>الكي: يرجى استخدام درجة حرارة متوسطة عند كي العباية.</p>
            </motion.div>
          )}
          {activeTab === "reviews" && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <Testimonials />
              <textarea
                id="notes"
                rows="5"
                className="w-100"
                placeholder="شاركنا سؤالك او تعليقك 😊"
              ></textarea>
              <div className="text-start mt-2">
                <button className="fs-5">إرسال</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
