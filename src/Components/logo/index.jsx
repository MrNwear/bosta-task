import React from "react";
import i18n from "../../i18n";
import ArLogo from "./ArLogo";
import EnLogo from "./EnLogo";

const Logo = () => {
  const isArabic = i18n.language === "ar";
  return isArabic ? <ArLogo /> : <EnLogo />;
};

export default Logo;
