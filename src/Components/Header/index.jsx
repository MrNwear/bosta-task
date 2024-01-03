// Header.js
import React from "react";
import { useTranslation } from "react-i18next";
import Logo from "../logo";
// const requestOptions = {
//   method: "GET",
//   headers: {
//     Accept: "application/json, text/plain, */*",
//     "Accept-Language": "ar-EG",
//     // Add any other headers as needed
//   },
// };
const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isArabic = i18n.language === "ar";
  return (
    <header style={headerStyles(isArabic)}>
      <Logo />
      <nav>
        <ul style={navStyles}>
          <li>{t("header.tabs.home")}</li>
          <li>{t("header.tabs.pricing")}</li>
          <li>{t("header.tabs.call-center")}</li>
        </ul>
      </nav>
      <div style={navStyles}>
        <span>{t("header.tabs.track-order")}</span>
        <span>{t("header.tabs.login")}</span>
        <button onClick={() => changeLanguage(isArabic ? "en" : "ar")}>
          {t("header.switchLanguage")}
        </button>
      </div>
    </header>
  );
};

const headerStyles = (isArabic) => ({
  display: "flex",
  alignItems: "center",
  padding: "20px",
  borderBottom: "1px solid #ccc",
  justifyContent: "space-evenly",
  direction: isArabic ? "rtl" : "ltr",
});

const navStyles = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  columnGap: 50,
  marginLeft: "20px",
};

export default Header;
