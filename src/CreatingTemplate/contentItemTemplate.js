import s from "./ElectricDirection.module.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getLanguageMemoised } from "redux/languages/languages-selector";
import LangContentSelector from "../../additional-components/LanguageContentSelector";
import Submit from "tools/Submit";
import io from "tools/io";
import LanguageContent from "additional-components/LanguageContent";
import arrayMaping from "tools/arrayMaping";

import images from "utils/db/images-db/imageItem";

// --------------------------------------------------------
export default function () {
  const contentItem = LanguageContent();
  // -------------------------IO---------------------------
  useEffect(() => {
    io();
  }, []);
  // ------------------------------------------------------
  return (
    <section className={s.main}>
      <h1 className={s.head}> HI ITS NEW DIRECTION ITEM</h1>
    </section>
  );
}
