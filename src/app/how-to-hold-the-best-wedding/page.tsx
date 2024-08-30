import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <div className='bg-white grid mx-auto grid-cols-1' dir='rtl'>
            <div className='px-4 mx-auto py-2 bg-gray-50 rounded-lg my-2 width-full grid grid-cols-1 gap-4'>
                <div className='col-span-2 mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                        <Image
                            src='/assets/images/new-image-kakhversai.webp'
                            width={4000}
                            height={4000}
                            alt='چطور یک عروسی لاکچری و به‌صرفه داشته باشیم؟'
                            className='rounded-lg shadow-lg w-full h-full'
                        />
                    </div>
                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h1 id='contetTitle' className='text-2xl font-bold mx-auto'>چطور یک عروسی لاکچری و به‌صرفه داشته باشیم؟</h1>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>شب عروسی یکی از مهم‌ترین شب‌های زندگی هر فردی است و همه ما دوست داریم این شب به بهترین شکل ممکن و به یادماندنی برگزار شود. اما چطور می‌توانیم یک عروسی لاکچری و در عین حال به‌صرفه داشته باشیم؟ در این مقاله به شما راهکارهایی را معرفی می‌کنیم که بتوانید به تناسب توان مالی خود بهترین خدمات را انتخاب کنید و عروسی خود را به یادماندنی کنید.
                        </p>
                        <Link href="tel:+989123314145">
                            <button className="bg-gradient-to-l from-green to-black text-white py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-2xl">
                                تماس با مشاوران مجرب مجموعه کاخ ورسای برای بهترین انتخاب
                            </button>
                        </Link>
                    </div>

                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                        <Image
                            src='/assets/images/new-image2-kakhversai.webp'
                            width={4000}
                            height={4000}
                            alt='انتخاب خدمات به تناسب توان مالی'
                            className='rounded-lg shadow-lg w-full h-full'
                        />
                    </div>

                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto'>انتخاب خدمات به تناسب توان مالی</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>خدمات عکاسی و فیلمبرداری
                            انتخاب یک تیم حرفه‌ای عکاسی و فیلمبرداری اهمیت زیادی دارد. با توجه به بودجه خود می‌توانید از پکیج‌های مختلفی که ارائه می‌شود، یکی را انتخاب کنید. برخی از تیم‌ها تخفیف‌های ویژه‌ای برای عروس و دامادها دارند که می‌توانید از آنها بهره‌مند شوید.
                            خدمات گل‌آرایی و دکوراسیون
                            گل‌آرایی و دکوراسیون تالار نقش مهمی در زیبایی مراسم دارد. انتخاب گل‌های فصلی و استفاده از ایده‌های خلاقانه می‌تواند هزینه‌ها را کاهش دهد. همچنین، می‌توانید با مشورت با متخصصان دکوراسیون، از بهترین و به‌صرفه‌ترین راهکارها استفاده کنید.
                            خدمات موسیقی و سرگرمی
                            موسیقی و سرگرمی‌های متنوع می‌تواند حال و هوای مراسم را تغییر دهد. انتخاب یک گروه موسیقی حرفه‌ای یا دی‌جی با تجربه، می‌تواند شب شما را به یک شب فراموش‌نشدنی تبدیل کند. با توجه به بودجه خود، می‌توانید از خدمات مختلفی استفاده کنید.

                        </p>
                    </div>



                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto'>منوهای مختلف پذیرایی</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>دیس پرس
                            یکی از روش‌های پذیرایی، استفاده از منوی دیس پرس است. این روش علاوه بر اینکه به‌صرفه است، می‌تواند با طراحی‌های زیبا و لاکچری جلوه‌ای خاص به مراسم شما بدهد.
                            سلف سرویس
                            سلف سرویس نیز یکی از گزینه‌های محبوب برای پذیرایی در مراسم عروسی است. با این روش، مهمانان می‌توانند از تنوع بیشتری در غذاها بهره‌مند شوند و همچنین هزینه‌ها به‌صرفه‌تر می‌شود.
                        </p>
                        <Link href="tel:+989123314145">
                            <button className="bg-gradient-to-l from-green to-black text-white py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-2xl">
                                دریافت قیمت بهترین تالار تهران
                            </button>
                        </Link>
                    </div>
                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                        <Image
                            src='/assets/images/new-image8-kakhversai.webp'
                            width={4000}
                            height={4000}
                            alt='دیزاین به‌صرفه و لاکچری'
                            className='rounded-lg shadow-lg w-full h-full'
                        />
                    </div>

                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto'>دیزاین به‌صرفه و لاکچری</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>دیزاین مراسم عروسی یکی از مهم‌ترین بخش‌هاست. شما می‌توانید با استفاده از ایده‌های خلاقانه و مشاوره با متخصصان، دیزاینی لاکچری و در عین حال به‌صرفه داشته باشید. توجه به جزئیات و انتخاب مواد اولیه با کیفیت می‌تواند هزینه‌ها را کاهش دهد و مراسمی بی‌نظیر را برای شما به ارمغان بیاورد.</p>
                        <Link href="tel:+989123314145">
                            <button className="bg-gradient-to-l from-green to-black text-white py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-2xl">
                                دریافت مشاوره رایگان
                            </button>
                        </Link>
                    </div>
                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                        <Image
                            src='/assets/images/Music-group-of-the-most-luxurious-garden-of-Tehran-Chateau-de-Versailles-hall (9).webp'
                            width={4000}
                            height={4000}
                            alt='اهمیت شب عروسی به عنوان یک شب تکرارنشدنی'
                            className='rounded-lg shadow-lg w-full h-full'
                        />
                    </div>

                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto'>اهمیت شب عروسی به عنوان یک شب تکرارنشدنی</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>شب عروسی یکی از شب‌هایی است که تنها یک بار در زندگی اتفاق می‌افتد و باید به بهترین شکل ممکن برگزار شود. این شب تکرار نخواهد شد و به همین دلیل ارزش هر گونه هزینه و تلاش را دارد. ایجاد خاطراتی زیبا و به‌یادماندنی از این شب اهمیت زیادی دارد و نباید از لاکچری بودن آن کم کنید.</p>
                    </div>



                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-gray-50 rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto text-green-600'>معرفی باغ تالار شاتو دو ورسای</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>باغ تالار شاتو دو ورسای یکی از بهترین گزینه‌ها برای برگزاری یک عروسی لاکچری و به‌صرفه در تهران است. این باغ تالار با داشتن امکانات لاکچری و همچنین قیمت‌های مناسب، می‌تواند گزینه‌ای ایده‌آل برای شما باشد.
                        </p>
                        <h3 className='text-xl font-bold mt-4'>خدمات ویژه برای عروسی</h3>
                        <ul className='text-regular mx-auto mt-2 list-disc list-inside'>
                            <li>باغ تالار شاتو دو ورسای خدمات ویژه‌ای برای عروسی‌ها ارائه می‌دهد که شامل خدمات عکاسی و فیلمبرداری، گل‌آرایی و دکوراسیون، موسیقی و سرگرمی، و پذیرایی با منوهای متنوع است. شما می‌توانید با توجه به بودجه خود از این خدمات بهره‌مند شوید و عروسی خود را به یادماندنی کنید.
                                در پایان، انتخاب باغ تالار شاتو دو ورسای می‌تواند تضمینی برای برگزاری یک عروسی لاکچری و در عین حال به‌صرفه باشد. با استفاده از خدمات متنوع و حرفه‌ای این باغ تالار، شما می‌توانید شب عروسی خود را به یکی از بهترین شب‌های زندگی خود تبدیل کنید
                            </li>

                            <li>تاریخ انتشار :1403/06/08 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
