
import Link from 'next/link';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/services">Services</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  );
};

export default Navbar;
