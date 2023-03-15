import style from "@styles/footer.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.infoSection}>
          <h4>About us</h4>
          <p>Know more</p>
        </div>
        <div className={style.infoSection}>
          <h4>Services</h4>
          <p>all the products</p>
        </div>
        <div className={style.infoSection}>
          <h4>Contact</h4>
          <p>Speaker@store.com</p>
        </div>
        <div className={style.infoSection}>
          <h4>Social networks</h4>
          <a
            className={style.link}
            target={"_blank"}
            href="https://www.instagram.com/"
          >
            Instagram
          </a>
          <a
            className={style.link}
            target={"_blank"}
            href="https://twitter.com/"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className={style.copyright}>
        <p>All rights reserved - copyright © 2023</p>
      </div>
    </div>
  );
}
