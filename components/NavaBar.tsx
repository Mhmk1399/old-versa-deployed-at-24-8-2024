"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from '../components/Navbar.module.css';
import Image from 'next/image';
import Logo from '../public/logoversai.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
          src={Logo}
          alt='logo'
          width={70}
          height={50}
          />
        </Link>
      </div>
      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}dir='rtl ' >
        <Link href="/galery">
          <div >تصاویر و ویدیو ها</div>
        </Link>
        <Link href="/about">
          <div>درباره ما</div>
        </Link>
        <Link href="https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b">
          <div>مشاهده فضای سه بعدی</div>
        </Link>
        <Link href="/menue">
          <div>منوی غذا و خدمات</div>
        </Link>
      </div>
      <div className='text-center m-0 p-0 text-4xl' >
        <h1>شاتو دو ورسای</h1>
      </div>
      <div className={styles.toggler} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;