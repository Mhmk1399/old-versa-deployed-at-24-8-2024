import Image from 'next/image';
import Link from 'next/link';


const page = () => {
    return (
        <div>
            <section className="py-10 bg-[#e8e8e5]" id="aboutus">
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-black text-center mx-auto mb-8">
                                youre satisfaction garanteed
                            </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="order-last md:order-first flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-black text-center mx-auto mb-8">
                                همه چیز در باره ی مجموعه تشریفاتی کاخ ورسای 
                            </h2>

                            <p className="text-black text-xxl text-center mb-4 mx-auto w-full md:w-3/4 align-middle text-justify" dir='rtl'>
                                باغ تالار ورسای در جنوب غرب تهران یکی از لوکس‌ترین و مجلل‌ترین باغ تالارهای تهران به شمار می آید. مجموعه تشریفاتی  کاخ ورسای با مساحت بیش از پنجاه هزار مترمربع، به‌عنوان الگویی از ضیافت‌های کاخ ورسای فرانسه، با رویکردی منحصر به فرد در برگزاری مهمانی‌ها و ارائه خدمات، در فاصله بیست دقیقه‌ای از غرب تهران آماده خدمت‌رسانی و برکذاری مراسم ها و ضیافت های رویایی شما میباشد.<br/><br/><br/>

                                در عمارتشاتو دو ورسای، سرو انواع نوشیدنی‌ها، میوه‌ها، شیرینی‌ها و دیگر خوراکی‌ها به‌صورت نامحدود و به‌شیوه all you can eat ارائه می‌شود. باغ تالار کاخ ورسای با دو سالن بزرگ، هر کدام به مساحت هزار و نهصد متر مربع و ارتفاع سقف هفت متر، بدون ستون، و فضای وسیع اختصاصی برای چیدمان میزها، خدماتی با کیفیت عالی و مطابق با استانداردهای جهانی ارائه می‌دهد.<br/><br/><br/>

                                پذیرایی در کاخ ورسای احمدآباد مستوفی با استفاده از بهترین مواد تازه، شامل غذاهای ایرانی و فرنگی، کباب‌ها، نوشیدنی‌ها و تزئینات غذا انجام می‌شود. تیم مجرب و حرفه‌ای آشپزی و مهمانداری این مجموعه به‌خوبی قادر به تأمین رضایت مهمانان هستند.<br/><br/><br/>

                                مجموعه تشریفاتی کاخ ورسای امکان برگزاری آیین عقد در دو مکان متفاوت را فراهم می‌آورد: لابی با طراحی کلیسایی و فضای باز با طراحی زیبای محوطه. همچنین، برای پذیرایی در فضای باز، تشریفات آتش‌بازی و سایر امکانات نیز موجود است. پارکینگ بزرگ با ظرفیت ششصد خودرو، اتاق بازی کودکان، سفره‌خانه سنتی و کافه‌تریا از دیگر ویژگی‌های برجسته این مجموعه است. که میتوانید در مورد تمام این بخش ها در صفحه اصلی وبسایت ما بیشتر مطالعه کنید و تصاوری مربوط به ارائه یاین خدمات را  مشاهده کنید 
                            </p>
                            <a
                                href="tel:+989123314145"
                                className="inline-block px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200 txt-center mx-auto"
                            >
                                برای دیافت انتقادات و پیشتهادات در خدمت شما هستیم
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                alt="Exterior-view-of-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles (4)"
                                src="/assets/images/Exterior-view-of-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles (4).webp"
                                width="600"
                                height="400"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page
