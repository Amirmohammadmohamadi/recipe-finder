import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
    return <div className={styles.headerWrapper}>
        <div className={styles.logoContainer}>
            <Link href="/"><div className={styles.logoImage}><img src="/pictures/images.jpeg" alt="logo image" /></div></Link>
            <h1>Recipe Finder</h1>
        </div>
        <div className={styles.navBar}>
            <Link href="/">Home</Link>
            <Link href="/favPage">Favorite</Link>
            <Link href="/about">About Us</Link>
        </div>
    </div>
};

export default Header;