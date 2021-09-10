import React from "react";
import styles from '../styles/LoadingUser.module.css';
import { useTranslation } from "react-i18next";

export default function LoadingUser() {
  const { t, i18n } = useTranslation();
  return (
    <div align="center" className={styles.fond}>
      <div className={styles.contener_general}>
        <div className={styles.contener_mixte}>
          <div className={styles.ballcolor} className={styles.ball_1}>&nbsp;</div>
        </div>
        <div className={styles.contener_mixte}>
          <div className={styles.ballcolor} className={styles.ball_2}>&nbsp;</div>
        </div>
        <div className={styles.contener_mixte}>
          <div className={styles.ballcolor} className={styles.ball_3}>&nbsp;</div>
        </div>
        <div className={styles.contener_mixte}>
          <div className={styles.ballcolor} className={styles.ball_4}>&nbsp;</div>
        </div>
      </div>

      <div className={styles.loading_section}>
        <div className={styles.loading}>
          {t("loadingUser.loading")}
        </div>
        <a
          href="./sign-in"
          className={styles.link}
          target="parent"
        >
          <button className={styles.button}>
          {t("loadingUser.signin")}
          </button>
        </a>
      </div>
    </div>
  );
}
