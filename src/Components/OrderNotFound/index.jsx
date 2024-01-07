import { useTranslation } from "react-i18next";
import "./orderNotFoundStyle.css";
function OrderNotFound() {
  const { t } = useTranslation();
  return (
    <div className="order-not-found-container">
      <h1>{t("track-order-page.no-order-found")}</h1>
    </div>
  );
}

export default OrderNotFound;
