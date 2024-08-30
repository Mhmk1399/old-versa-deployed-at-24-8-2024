import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <div className='bg-white grid mx-auto grid-cols-1' dir='rtl'>
            <div className='px-4 mx-auto py-2 bg-gray-50 rounded-lg my-2 width-full grid grid-cols-1 gap-4'>
                <div className='col-span-2 mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                        <Image
                            src='/assets/images/new-image4-kakhversai.webp'
                            width={4000}
                            height={4000}
                            alt='راهنمای انتخاب بهترین تالار در تهران'
                            className='rounded-lg shadow-lg w-full h-full'
                        />
                    </div>
                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h1 id='contetTitle' className='text-2xl font-bold mx-auto'>راهنمای انتخاب بهترین تالار تهران</h1>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>
                            اگر شما هم درگیر انتخاب تالار و یا باغ تالار برای برگزاری بهترین شب زندگیتون هستید قطعاً این مقاله می‌تونه بهتون کمک زیادی بکنه که نه تنها بتونید یک انتخاب کاملاً مناسب با بودجه‌بندی خودتون پیدا کنید بلکه بتونید مجموعه تشریفاتی برای برگذاری شب عروسیتون انتخاب کنید که استانداردترین خدمات ارائه میده، در نتیجه استرس خیلی کمتری برای این شب مهم زندگیتون داشته باشید.
                        </p>
                        <Link href="tel:+989123314145">
                            <button className="bg-gradient-to-l from-green to-black text-white py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-2xl">
                                تماس با مشاوران مجرب مجموعه کاخ ورسای برای بهترین انتخاب
                            </button>
                        </Link>
                    </div>

                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                        <Image
                            src='/assets/images/images.jfif'
                            width={4000}
                            height={4000}
                            alt='نقشه  تهران و حومه تهران برای انتخاب بهتر و دقیق تر تالار در تهران'
                            className='rounded-lg shadow-lg w-full h-full'
                        />
                    </div>

                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto'>موقعیت مکانی تالار</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>
                            اولین موضوعی که باید در نظر داشته باشید برای انتخاب از بین تالارهای تهران منطقه و موقعیت مکانی تالار است. همانطور که هممون می‌دانیم تهران شهر شلوغی است و شما در روز عروسیتان قطعاً باید کارهای زیادی انجام دهید و انتخاب یک تالار در وسط شهر می‌تواند انتخاب خیلی بدی باشد و استرس زیادی را به شب شما اضافه کند. بهترین منطقه برای انتخاب باغ تالار در حومه شهر است، چرا که هم کمتر درگیر ترافیک می‌شوید و هم مهمانانتان پس از مراسم می‌توانند در مسیر خلوت‌تر و راحت‌تری شما را بدرقه کنند.
                        </p>
                    </div>



                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto'>ظرفیت تالار</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>تعداد مهمانان کاملا متناسب با سلیقه شماست اما یادتون باشه که انتخاب ظرفیت تالار و سالن های تالار چیزی که مستقیما میتونه راحتی و ارامش مهمانان شما را تحت  تاثیر قرار بده در انتخاب تالار از این فرمول استفاده کنید که تالاری که شما انتخاب میکنید مساحت سالن هاش باید 2.5 برابر تعداد مهمانان شما باشه یعنی برای 100 نفر حد اقل
                            شما باید یک  مجموعه تشریفاتی حداقل با مساحت 300 متر مربع را انتخاب کنید البته این فقط برای سال هستش که هر کدام از مهمانان شما 2.5 متر فضای ازاد برای خودشون داشته باشند.</p>
                        <Link href="tel:+989123314145">
                            <button className="bg-gradient-to-l from-green to-black text-white py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-2xl">
                                دریافت قیمت بهترین تالار تهران
                            </button>
                        </Link>
                    </div>
                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                        <Image
                            src='/assets/images/new-image5-kakhversai.webp'
                            width={4000}
                            height={4000}
                            alt='نمونه یک سالن با امکانت مجهز در تهران برای انتخاب بهترین باغ  تالار در تهران'
                            className='rounded-lg shadow-lg w-full h-full'
                        />
                    </div>

                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto'>امکانات و تجهیزات تالار</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>تفاوت بین بهترین و بدترین تالار ها در تهران در امکانات این تالار هاست نحوه تزئیین و گل آرایی های استفاده شده داشتن صندلی ها و میز های مناسب از ریزه کاری هایی هستش که باید حتما بهش دقت کنید شاید خیلی بزرگ نباشه ولی موردی هستش که میتونه تو تفاوت برگذاری مراسم عروسی شما به شدت تاثیر گذار باشه  قبل از تایید انتخابتون حتما تمام خدماتی که در شب عروسی قرار هست که براتون ارائه بشه را به طور شفاف و کاملا واضح با مسئول برگذاری هماهنگ کنید که یک بی نظمی کوچک باعث نشه بهترین شب زندگیتون خراب بشه
                        </p>
                        <Link href="tel:+989123314145">
                            <button className="bg-gradient-to-l from-green to-black text-white py-2 px-8 mx-auto rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 mt-8 mb-2 text-2xl">
                                دریافت مشاوره رایگان
                            </button>
                        </Link>
                    </div>
                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg'>
                        <Image
                            src='/assets/images/Self-service-turkey-with-pineapple-in-the-international-menu-of-the-Chateau-de-Versailles-luxury-hall-garden_optimizednew.webp'
                            width={4000}
                            height={4000}
                            alt='عکس خدنات لاکچری برای انتخاب بهترین تشریفات در تهران '
                            className='rounded-lg shadow-lg w-full h-full'
                        />
                    </div>

                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-white rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto'>خدمات پذیرایی و منو</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>مشیه گفت که مهم ترین بخشی که ارزش عروسی شما را تعیین میکنه خدمات پذیرایی و منو اون تالار هستش  قطعا این جمله رو هممون تو بحث های فامیلی شنیدیم که فلانی غذای عروسیش خیلی بد بود پس برای این که این مشکلات به وجود نیاد حتما یک بار قبل از تایید نهایی یک جلسه برای تست غذا ها به اون مجموعه تشریفاتی برید و شخصا از کیفیت ارائه غذا ها و منو پذیرایی مطمئن بشید
                        </p>
                    </div>



                    <div className='mx-auto width-auto my-2 px-1.5 py-1.5 bg-gray-50 rounded-lg text-center'>
                        <h2 id='contetTitle' className='text-2xl font-bold mx-auto text-green-600'>نتیجه‌گیری</h2>
                        <p id='contentDiscription' className='text-regular mx-auto mt-2'>در اخر به طور خلاصه قبل از انتخاب تالار  و یا باغ تالار در  تهران به نکات زیر توجه کنید که ارامش خاطر بیشتر باعث بهترین انتخاب ممکن شود
                            ابتدا موقعیت مکانی مناسب با مسیر رفت و امد مهمانان در مرحله دوم تناسب ظرفیت و امکانات مجموعه تشریفاتی با میهمانان و بودجه بندی شما و از همه مهمتر تست غذا قبل از انتخاب نهایی و عقد قرار داد
                            امید وارم تونسته باشیم که کمکتون کنیم 💐
                        </p>
                        <h3 className='text-xl font-bold mt-4'>منابع استفاده شده:</h3>
                        <ul className='text-regular mx-auto mt-2 list-disc list-inside'>
                            <li>بازخورد مشتریان   پنج سال گذشته مهمانان شاتو دو ورسای </li>

                            <li>تاریخ انتشار :1403/06/07 </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
