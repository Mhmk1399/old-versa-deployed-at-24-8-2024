// components/Footer.js
import Link from 'next/link';
import styles from '../components/Footer.module.css';
import Image from 'next/image';
import Logo from  "../public/logoversai.png" // Create a new CSS module for the footer

const Footer = () => {
  return (
    <footer className='mx-auto bg-green text-gold-90 mx-auto flex flex-col' dir='rtl'>
      
        <Link href="/" className='mx-auto text-center'>
          <Image
          src={Logo}
          alt='logo'
          width={70}
          height={50}
          className='mx-auto my-2 py-4'
          />
        </Link>
        
      <div className=' bg-green gap-4 mx-auto text-center gold pb-8 font-bold text-xl flex flex-row  justify-center' dir='rtl'>
        <Link href="/galery">
          <div>تصاویر</div>
        </Link>
        <Link href="/blogs">
          <div>مقالات</div>
        </Link>
        <Link href="https://tour.panoee.net/Versay/65df91a47a73f2e85a4da72b">
          <div>مشاهده فضای سه بعدی</div>
        </Link>
        <Link href="/contact">
          <div>منوی غذا و خدمات</div>
        </Link>
      </div>
      
    </footer>
  );
};

export default Footer;
