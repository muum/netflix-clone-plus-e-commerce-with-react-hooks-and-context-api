import React from "react";

// Component Import
import SettingsLayout from "../../layouts/SettingsLayout";

// i18next Multi Language Support
import "../../helpers/i18next";
import { useTranslation } from "react-i18next";

export default function Settings() {
  // i18next Multi Language Support
  const { t, i18n } = useTranslation();

  return (
    <SettingsLayout>
      <h1 className="text-white">{t("settings")}</h1>
      <hr />
      <h2 className="text-white">Hi</h2>
      <h1 className="text-white">Hi</h1>
      <h1 className="text-white">Hi</h1>
      <h1 className="text-white">Hi</h1>
      <h1 className="text-white">Hi</h1>
    </SettingsLayout>
  );
}
