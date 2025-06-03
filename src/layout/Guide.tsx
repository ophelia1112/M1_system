import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Guide.module.css';

export default function Guide() {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuWrapperRef.current &&
        !submenuWrapperRef.current.contains(event.target as Node)
      ) {
        setSubmenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.MenuOuter}>
      <div className={styles.mainGuide}>
        <div className={styles.logoTitle}>
          <img src="../../public/layoutImg/logo.png" alt="" />
          <p>M1 System</p>
        </div>

        <div className={styles.newsGuide}>
          <div className={styles.newsGuideTitle}>What's New?</div>
          <div className={styles.newsGuides}>Real-time News</div>
          <div className={styles.newsGuides}>Policy Updates</div>
          <div className={styles.newsGuides}>KOLs</div>
          <div className={styles.newsGuides}>Crypto</div>
          <div className={styles.newsGuides}>Airdrop</div>
          <div className={styles.newsGuides}>Whale Activity</div>
          <div className={styles.newsGuides}>Market Sentiment</div>
          <div className={styles.newsGuides}>Token Price</div>
        </div>
      </div>

      {/* ✅ 把按钮和菜单一起包裹在 ref 中 */}
      <div ref={submenuWrapperRef}>
        <div className={styles.records}>Chat History</div>
        <div
          className={styles.personalMenu}
          onClick={() => setSubmenuOpen((prev) => !prev)}
        >
          Member Service <span className="iconfont icon-member"></span>
        </div>

        {submenuOpen && (
          <div className={styles.MemberGuide}>
            <div className={styles.MemberGuides}>Personalized Model</div>
            <div className={styles.MemberGuides}>Real-time Alerts</div>
            <div className={styles.MemberGuides}>Personal Strategies</div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
}
