import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { useTranslation } from "react-i18next";
import { colors } from "../../utils/colors";
import OrderNotFound from "../../Components/OrderNotFound";

const formatOptions = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  minute: "2-digit",
  hour: "2-digit",
  hour12: true,
};
function TrackOrderPage() {
  const orderDetails = useSelector((state) => state.orderDetails.data);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <>
      {orderDetails != null ? (
        <div className={`order-container ${isArabic ? "rtl" : "ltr"}`}>
          <div className={`order-summary `}>
            <div className="order-detail">
              <h3>
                {t("track-order-page.track-number") +
                  orderDetails?.TrackingNumber}
              </h3>
              <span
                style={{
                  color: colors[orderDetails?.CurrentStatus?.state],
                  fontSize: 20,
                }}
              >
                {t(`track-order-page.${orderDetails?.CurrentStatus?.state}`)}
              </span>
            </div>
            <div className="order-detail">
              <h3>{t("track-order-page.last-update")}</h3>
              <span>
                {new Date(
                  orderDetails?.CurrentStatus?.timestamp
                ).toLocaleString(isArabic ? "ar" : "en", formatOptions)}
              </span>
            </div>
            <div className="order-detail">
              <h3>{t("track-order-page.provider")}</h3>
              <span>{orderDetails?.provider}</span>
            </div>
            <div className="order-detail">
              <h3>{t("track-order-page.promised-date")}</h3>
              <span>
                {orderDetails?.PromisedDate
                  ? new Date(orderDetails?.PromisedDate).toLocaleString(
                      isArabic ? "ar" : "en",
                      formatOptions
                    )
                  : t("track-order-page.no-data")}
              </span>
            </div>
          </div>
          <div className="section2-container">
            <div className="order-transits-details">
              <h3>{t("track-order-page.order-details")}</h3>
              <div className="details-container">
                <div className="columns-titles">
                  <span>{t("track-order-page.hub")}</span>
                  <span>{t("track-order-page.date")}</span>
                  <span>{t("track-order-page.time")}</span>
                  <span>{t("track-order-page.details")}</span>
                </div>
                {orderDetails?.TransitEvents?.map((item) => {
                  const time = new Date(item?.timestamp).toLocaleTimeString(
                    isArabic ? "ar" : "en",
                    { minute: "2-digit", hour: "2-digit", hour12: true }
                  );
                  const date = new Date(item?.timestamp).toLocaleDateString(
                    isArabic ? "ar" : "en",
                    { year: "numeric", month: "numeric", day: "numeric" }
                  );
                  return (
                    <div className="detail">
                      <span>{item?.hub || "---"}</span>
                      <span>{date || "---"}</span>
                      <span>{time || "---"}</span>
                      <span>{item?.state || "---"}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="order-address">
              <h3>{t("track-order-page.order-address")}</h3>
              <div className="address-container">
                <p>{t("track-order-page.dummy-address")}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <OrderNotFound />
      )}
    </>
  );
}
export default TrackOrderPage;
