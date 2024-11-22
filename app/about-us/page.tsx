import styles from "./about.module.css";

export const metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>About Next Movies</h1>
        <p className={styles.description}>
          Next Movies는 최신 영화 정보를 제공하는 플랫폼입니다.
          <br />전 세계의 다양한 영화 정보와 트레일러를 한눈에 확인할 수
          있습니다.
        </p>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>🎬 최신 영화 정보</h3>
            <p>실시간으로 업데이트되는 영화 정보를 제공합니다.</p>
          </div>
          <div className={styles.feature}>
            <h3>🎥 트레일러 제공</h3>
            <p>고화질의 영화 트레일러를 감상하실 수 있습니다.</p>
          </div>
          <div className={styles.feature}>
            <h3>⭐️ 평점 시스템</h3>
            <p>객관적인 영화 평가를 확인할 수 있습니다.</p>
          </div>
        </div>

        <div className={styles.contact}>
          <h2>Contact Us</h2>
          <p>문의사항이 있으시다면 언제든 연락주세요:</p>
          <a href="mailto:contact@nextmovies.com" className={styles.email}>
            contact@nextmovies.com
          </a>
        </div>
      </div>
    </div>
  );
}
