// Header.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../logo";
import { useDispatch } from "react-redux";
import { fetchOrderDetails } from "../../redux/orderDetailsSlice/thunk";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { isNumber } from "../../utils/helperFunctions";

const Header = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [shippingNumber, setShippingNumber] = useState({
    value: "",
    error: "",
  });
  const onInputChange = (e) => {
    const inputValue = e.target.value;
    if (isNumber(inputValue))
      setShippingNumber({ value: inputValue, error: "" });
    else {
      setShippingNumber({ value: inputValue, error: t("header.input-error") });
    }
  };
  const onTrackOrderPress = () => {
    dispatch(fetchOrderDetails(shippingNumber.value)).then(() => {
      setVisible(false);
    });
  };
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isArabic = i18n.language === "ar";
  return (
    <header className={`container ${isArabic ? "rtl" : "ltr"}`}>
      <Logo />
      <nav>
        <ul className="navbar">
          <li>{t("header.tabs.home")}</li>
          <li>{t("header.tabs.pricing")}</li>
          <li>{t("header.tabs.call-center")}</li>
        </ul>
      </nav>
      <div className="navbar">
        <div>
          <span
            onClick={() => {
              setVisible((visible) => !visible);
            }}
          >
            {t("header.tabs.track-order")}
          </span>
          <div
            class="inputWithButton"
            style={{ display: visible ? "flex" : "none" }}
          >
            <input type="text" onChange={onInputChange} />
            <AiOutlineSearch
              className="icon-button"
              onClick={onTrackOrderPress}
            />
            {shippingNumber.value && shippingNumber.error && (
              <p className="error">{shippingNumber.error}</p>
            )}
          </div>
        </div>
        <span>{t("header.tabs.login")}</span>
        <button onClick={() => changeLanguage(isArabic ? "en" : "ar")}>
          {t("header.switchLanguage")}
        </button>
      </div>
    </header>
  );
};

export default Header;
