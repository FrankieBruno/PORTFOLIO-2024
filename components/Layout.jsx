import Link from "next/link";
import DownloadIcon from "./icons/DownloadIcon";
import styles from "../styles/layout.module.scss";
import Logo from "./icons/Logo";



export default function Layout({ children }) {
    return <div className={styles.layoutContainer}>
        <header className={styles.header}>
            <Link href="/" className={styles.brand}>
                <span className={styles.brandgreeting}>Hi</span>, I&apos;m Frankie Bruno
            </Link>
            <div className={styles.brandmobile}>
                <Logo className={styles.logo} />
            </div>
            <div className={styles.nav}>
                <Link className={styles.navitem} href='/projects'>Projects</Link>
                <a href="/frankie-bruno-portfolio.pdf" target="_blank" rel="noopener" className={`${styles.navitem} ${styles.download}`}>
                    Resume
                    <DownloadIcon className={styles.downloadicon} />
                </a>
                <Link className={`${styles.navitem} ${styles.navcontact}`} href='/contact'>Contact me</Link>
            </div>

        </header>

        {children}
    </div>;
};