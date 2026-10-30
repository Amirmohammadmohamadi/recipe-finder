import styles from "./header.module.scss";
import Link from "next/link";

const Header = () => {
    return <div className={styles.headerWrapper}>
         <Link href="/"><div className={styles.logoContainer}>
           <div className={styles.logoImage}><img src="/pictures/images.jpeg" alt="logo image" /></div>
            <h1>Recipe Finder</h1>
        </div></Link>
        <div className={styles.navBar}>
            <Link href="/">Home</Link>
            <Link href="/favPage">Favorite</Link>
            <Link href="/about">About Us</Link>
        </div>
    </div>
};

export default Header;