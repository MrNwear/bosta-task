import React from "react";
import { useSelector } from "react-redux";
import "./style.css";
import { useTranslation } from "react-i18next";
import { colors } from "../../utils/colors";

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
    <div className="order-container">
      {orderDetails != null ? (
        <div className={`order-summary ${isArabic ? "rtl" : "ltr"}`}>
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
              {new Date(orderDetails?.CurrentStatus?.timestamp).toLocaleString(
                isArabic ? "ar" : "en",
                formatOptions
              )}
            </span>
          </div>
          <div className="order-detail">
            <h3>{t("track-order-page.provider")}</h3>
            <span>{orderDetails?.provider}</span>
          </div>
          <div className="order-detail">
            <h3>{t("track-order-page.promised-date")}</h3>
            <span>
              {new Date("2023-04-01T00:00:00.000Z").toLocaleString(
                isArabic ? "ar" : "en",
                formatOptions
              )}
            </span>
          </div>
        </div>
      ) : (
        <h1>Order Not Found </h1>
      )}
    </div>
  );
}
export default TrackOrderPage;
