import Image from "next/image";
import Link from "next/link";

const data = [
  { category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall (2).webp", alt: "View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall1" },

  { category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall (3).webp", alt: "View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall2" },

  { category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/View-of-the-table-and-chair-arrangement-of-the-columnless-garden-hall-of-the-Chateau-de-Versailles-luxury-hall.webp", alt: "View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall3" },

  { category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/View-of-the-table-and-chair-arrangement-of-the-columnless-garden-hall-of-the-Chateau-de-Versailles-luxury-hall (2).webp", alt: "View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall4" },

  { category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall.webp", alt: "View-of-table-and-chair-arrangement-in-the-garden-hall-of-Chateau-de-Versailles-luxury-hall5" },


  { category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles4.webp", alt: "Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles4" },


  { category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles5.webp", alt: "Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles5" },


  { category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles.webp", alt: "Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles" },


  { category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles3.webp", alt: "Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles3" },


  {
    category: "سالن های مجلل و لاکچری شاتو دو ورسای", href: "/assets/images/Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles2.webp", alt: "Luxurious-hall-and-garden-hall-of-Chateau-de-Versailles2",
    description: "شما در این دو سالن به ظرفیت 1200 نفر میتوانید تمام دیزاین های روز دنیا را پیاده سازی کنید و بدون دقدقه به فکر پرشکوه برگذار شدن مراسم بهترین شب زنندگی خودتون باشید شما میتوانید انواع گل های فصل و روز را برای دیزاین های مختلف مثل روستیک و یا لاکچری برای تزئینات سالن خود انتخاب کنید ،استفاده از ظروف کریستالی و سازه های فلزی میتواند شکوه چشم گیری را به سالن مراسم شما بیافزیاید همچنین وجود دو سالن بزرگ به شما این اجازه را میدهد که سالن صرف شام را کاملا مجزا از سالن برگذاری مراسم دیزاین کنید که راحتی دو چندانی را به مهمانان شما میبخشد",
  },

  {
    category: "خدمات و پذیرایی با منوی بین‌المللی", href: "/assets/images/Finger-food-and-caesar-salad-and-a-variety-of-self-service-desserts-in-the-international-menu-of-the-luxury-hall-garden-of-Chateau-de-Versailles.webp", alt: "Finger-food-and-caesar-salad-and-a-variety-of-self-service-desserts-in-the-international-menu-of-the-luxury-hall-garden-of-Chateau-de-Versailles",

  },

  {
    category: "خدمات و پذیرایی با منوی بین‌المللی", href: "/assets/images/Self-service-turkey-with-pineapple-in-the-international-menu-of-the-Chateau-de-Versailles-luxury-hall-garden.webp", alt: "Self-service-turkey-with-pineapple-in-the-international-menu-of-the-Chateau-de-Versailles-luxury-hall-garden",

  },

  {
    category: "خدمات و پذیرایی با منوی بین‌المللی", href: "/assets/images/Pre-dinner-reception-table-with-self-service-fruit-and-sweets-in-the-international-menu-of-the-luxury-hall-garden-of-Chateau-de-Versailles.webp", alt: "Pre-dinner-reception-table-with-self-service-fruit-and-sweets-in-the-international-menu-of-the-luxury-hall-garden-of-Chateau-de-Versailles",

  },

  {
    category: "خدمات و پذیرایی با منوی بین‌المللی", href: "/assets/images/Self-service-fish-soup-in-the-international-menu-of-the-Chateau-de-Versailles-luxury-hall-garden.webp", alt: "Self-service-fish-soup-in-the-international-menu-of-the-Chateau-de-Versailles-luxury-hall-garden",

  },

  {
    category: "خدمات و پذیرایی با منوی بین‌المللی", href: "/assets/images/Self-service-roasted-veal-in-the-international-menu-of-the-Chateau-de-Versailles-luxury-hall-garden.webp", alt: "Self-service-roasted-veal-in-the-international-menu-of-the-Chateau-de-Versailles-luxury-hall-garden",
    description: "مجموعه تشریفاتی شاتو دو ورسای تنها باغ تالار واقعا در غرب تهران می باشد که برای پخت تمام غذا ها از اشپزخانه کاملا صنعتی برای بهداشت بیشتر استفاده میکند آشپز های بین المللی ورسای توانایی سرو انواع غذا های ایتالیایی،ایرانی،چینو دریایی را برای شما فراهم آوردند که انواع این غذا ها را میتوانید در بین منو خدمات مشاهده کنید  نکته قابل توجه در خدمات پذیرایی مجموعه شاتو دو ورسای پذیرایی به صورت allyou can eat می باشد که به این معنی که هر مقدار که مهمانان شما میل داشته باشند میتوانند از ابمیوه های فصل و دیگر خدمات پذیرایی مثل فینگر فود ها استفاده کنند",

  },







  {
    category: "نورپردازی و استیج رقص روی آب", href: "/assets/images/Modern-lighting-from-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles.webp", alt: "Modern-lighting-from-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles",

  },

  {
    category: "نورپردازی و استیج رقص روی آب", href: "/assets/images/Fireworks-next-to-the-dance-stage-from-above-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles.webp", alt: "Fireworks-next-to-the-dance-stage-from-above-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles",

  },

  {
    category: "نورپردازی و استیج رقص روی آب", href: "/assets/images/Dance-stage-on-the-water-from-the-top-view-of-45-degrees-of-the-luxury-hall-of-Chateau-de-Versailles.webp", alt: "Dance-stage-on-the-water-from-the-top-view-of-45-degrees-of-the-luxury-hall-of-Chateau-de-Versailles",

  },

  {
    category: "نورپردازی و استیج رقص روی آب", href: "/assets/images/Dance-stage-on-the-water-from-above-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles.webp", alt: "Dance-stage-on-the-water-from-above-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles",

  },

  {
    category: "نورپردازی و استیج رقص روی آب", href: "/assets/images/Dance-stage-on-the-water-garden-of-the-luxury-hall-of-Chateau-de-Versailles.webp", alt: "Dance-stage-on-the-water-garden-of-the-luxury-hall-of-Chateau-de-Versailles",

  },

  {
    category: "نورپردازی و استیج رقص روی آب", href: "/assets/images/View-of-the-water-dance-and-fireworks-stage-of-the-most-luxurious-garden-of-the-Tehran-Chateau-de-Versailles-hall (14).webp", alt: "View-of-the-water-dance-and-fireworks-stage-of-the-most-luxurious-garden-of-the-Tehran-Chateau-de-Versailles-hall (14)",

  },

  {
    category: "نورپردازی و استیج رقص روی آب", href: "/assets/images/View-of-the-water-dance-and-fireworks-stage-of-the-most-luxurious-garden-of-the-Tehran-Chateau-de-Versailles-hall (3).webp", alt: "View-of-the-water-dance-and-fireworks-stage-of-the-most-luxurious-garden-of-the-Tehran-Chateau-de-Versailles-hall (3)",

  },

  {
    category: "نورپردازی و استیج رقص روی آب", href: "/assets/images/View-of-the-water-dance-and-fireworks-stage-of-the-most-luxurious-garden-of-the-Tehran-Chateau-de-Versailles-hall (12).webp", alt: "View-of-the-water-dance-and-fireworks-stage-of-the-most-luxurious-garden-of-the-Tehran-Chateau-de-Versailles-hall (12)",
    description: "یکی از مهم ترین  خدمات برای تبدیل شدن مراسم عروسی شما به یک عروسی لاکچری و پر زرق و برق نور پردازی ها و نحوه استفاده لیزر های هنگام رقص عروس و داماد می باشد مجموعه تشریفاتی شاتو دو ورسای برای شما علاوه بر نور پردازی های حرفه ای و هماهنگ با موزیکک بعد از تغیرات سال 1403 خود یک فضای رقص دو تفره برای عروس و داماد بر روی اب را فراهم کرده که میتوانند مراسم برش کیک خود را با اتیش بازی های فراوان اجرا کنند و یک فضای کاملا رویایی را در بهترین شب زندگی خود تجربه کنند",
  },









  {
    category: "تجهیزات صوتی و گروه موسیقی حرفه‌ای", href: "/assets/images/The-live-music-band-of-the-ladies-of-the-luxury-hall-of-Chateau-de-Versailles.webp", alt: "The-live-music-band-of-the-ladies-of-the-luxury-hall-of-Chateau-de-Versailles",
    description: "هیجان شب عروسی به عهده گروه موسیقی مجموعه تشریفاتی مورد انتخاب شماست اکه میخواید که شب عروسیتون به یاد ماندنی باشه حتما از گزوه های موسیقی متفاوت استفاده کنید باغ تالار ورسای داخل تهران این امکان براتون میتونه فراهم کنه که همزمان در یک شب هم از گزوه های موسیقی سنتی و هم از موسیقی های مدرن بحره مند بشید این طوری برای تمام سلیقه ها میتونید یک فضای رویایی و به یاد ماندنی ایجاد کنید",
  },
  {
    category: "تجهیزات صوتی و گروه موسیقی حرفه‌ای", href: "/assets/images/The-mens-live-music-band-of-the-luxury-hall-of-Chateau-de-Versailles.webp", alt: "The-mens-live-music-band-of-the-luxury-hall-of-Chateau-de-Versailles",
  },
  {
    category: "تجهیزات صوتی و گروه موسیقی حرفه‌ای", href: "/assets/images/Bagh-tenbak-musician-of-Chateau-de-Versailles-luxury-hall.webp", alt: "Bagh-tenbak-musician-of-Chateau-de-Versailles-luxury-hall",
  },
  {
    category: "تجهیزات صوتی و گروه موسیقی حرفه‌ای", href: "/assets/images/Drummer-in-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles.webp", alt: "Drummer-in-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles",
  },
  {
    category: "تجهیزات صوتی و گروه موسیقی حرفه‌ای", href: "/assets/images/Piano-player-in-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles.webp", alt: "Piano-player-in-the-garden-of-the-luxury-hall-of-Chateau-de-Versailles",
  },
  {
    category: "تجهیزات صوتی و گروه موسیقی حرفه‌ای", href: "/assets/images/Music-group-of-the-most-luxurious-garden-of-Tehran-Chateau-de-Versailles-hall (3).webp", alt: "Music-group-of-the-most-luxurious-garden-of-Tehran-Chateau-de-Versailles-hall (3)",
  },
  {
    category: "تجهیزات صوتی و گروه موسیقی حرفه‌ای", href: "/assets/images/Music-group-of-the-most-luxurious-garden-of-Tehran-Chateau-de-Versailles-hall (5).webp", alt: "Music-group-of-the-most-luxurious-garden-of-Tehran-Chateau-de-Versailles-hall (5)",
  },
  {
    category: "تجهیزات صوتی و گروه موسیقی حرفه‌ای", href: "/assets/images/Music-group-of-the-most-luxurious-garden-of-Tehran-Chateau-de-Versailles-hall (9).webp", alt: "Music-group-of-the-most-luxurious-garden-of-Tehran-Chateau-de-Versailles-hall (9)",
  },

  {
    category: "طراحی الهام‌گرفته از کاخ ورسای فرانسه", href: "/assets/images/Lobby-of-the-most-luxurious-garden-of-Tehran-Hall-of-Chateau-de-Versailles-complex.webp", alt: "Lobby-of-the-most-luxurious-garden-of-Tehran-Hall-of-Chateau-de-Versailles-complex",

  },
  {
    category: "طراحی الهام‌گرفته از کاخ ورسای فرانسه", href: "/assets/images/Lobby-of-the-most-luxurious-garden-of-Tehran-Hall-of-Chateau-de-Versailles-complex2.webp", alt: "Lobby-of-the-most-luxurious-garden-of-Tehran-Hall-of-Chateau-de-Versailles-complex2",

  },
  {
    category: "طراحی الهام‌گرفته از کاخ ورسای فرانسه", href: "/assets/images/Lobby-of-the-most-luxurious-garden-of-Tehran-Hall-of-Chateau-de-Versailles-complex3.webp", alt: "Lobby-of-the-most-luxurious-garden-of-Tehran-Hall-of-Chateau-de-Versailles-complex3",

  },
  {
    category: "طراحی الهام‌گرفته از کاخ ورسای فرانسه", href: "/assets/images/The-fountain-of-the-photography-location-of-the-Chateau-de-Versailles-hall-garden-is-inspired-by-the-Versailles-palace-and-the-English-village.webp", alt: "The-fountain-of-the-photography-location-of-the-Chateau-de-Versailles-hall-garden-is-inspired-by-the-Versailles-palace-and-the-English-village.webp",
    description: "مجموعه شاتو دو ورسای در جنوب غرب تهران با الهام از کاخ ورسای فرانسه  آماده برای به واقعیت پیوستن رویای یک شب فرانسوی در تهران برای شما عزیزان میباشد لابی مجموعه اولین نمای مجللیست که بعد از ابهت نمای ورودی  و باغ پر شکوه مجموعه به شم میخورد لازم به ذکر است باغ تالار شاتو دو ورسای تنها مجموعه ای است که میتواند مراسم شما را کاملا به صورت اوت دور اجرا کند",
  },









  {
    category: "فضای سبز و باغ عکاسی", href: "/assets/images/The-space-of-the-church-the-photography-location-of-the-garden-of-the-Chateau-de-Versailles-hall.webp", alt: "The-space-of-the-church-the-photography-location-of-the-garden-of-the-Chateau-de-Versailles-hall",
    description: "یکی از بزرگترین امتیازات مجموعه شاتو دو ورسای داشتن یک شهرک سینمایی با 12 لوکیشن عکاسی مختلف میباشد در کنار سالن و محل برگذاری مراسم عروسی شما این لوکیشن عکاسی  در کنار محل برگذاری مراسم عروسی شما میتواند یک حجم زیادی از استرس روز عروسیتون و گیر کردن داخل ترافیک و نرسیدن به کار ها را حل کنه  و به با کیفیت برگذار شدن مراسم عروسی شما به شدت کمک میکنه",
  },
  {
    category: "فضای سبز و باغ عکاسی", href: "/assets/images/The-green-space-of-the-photography-location-from-the-45-degree-view-of-the-garden-of-the-Chateau-de-Versailles-hall-ezgif.com-jpg-to-webp-converter.webp", alt: "The-green-space-of-the-photography-location-from-the-45-degree-view-of-the-garden-of-the-Chateau-de-Versailles-hall-ezgif.com-jpg-to-webp-converter",

  },

  {
    category: "فضای سبز و باغ عکاسی", href: "/assets/images/Green-space-and-night-with-lighting-along-with-the-statue-of-the-photography-location-of-the-garden-of-the-Chateau-de-Versailles-hall-from-a-45-degree-view.webp", alt: "Green-space-and-night-with-lighting-along-with-the-statue-of-the-photography-location-of-the-garden-of-the-Chateau-de-Versailles-hall-from-a-45-degree-view",

  },
  {
    category: "فضای سبز و باغ عکاسی", href: "/assets/images/The-green-space-and-location-of-Versailles-Hall-garden-from-the-top-view.webp", alt: "The-green-space-and-location-of-Versailles-Hall-garden-from-the-top-view",
    position: "bad"

  },






  // Add more images with their respective categories
];

const Gallery = () => {
  const handleButtonClick = () => {
    window.location.href = '/menue';
  }
  // Group images by category
  const categories = Array.from(new Set(data.map(item => item.category)));

  return (<div className="p-5 sm:p-8 mt-4">
    {categories.map((category) => (
      <div key={category} className="mb-8">
        <h2 className="text-xl text-center font-bold mb-4 capitalize">{category}</h2>

        <div className="grid grid-rows-2 sm:grid-row-3 ">
          <div className=" overflow-x-scroll snap-x snap-mandatory gap-2 rounded-lg max-h-96  gap-2 w-full  p-2 lg:grid lg:grid-cols-2 lg:gap-4 lg:w-full">
            {data
              .filter(item => item.category === category)
              .map((item, index) => (
                <Link key={index} href={item.href}>
                  <Image
                    alt={item.alt}
                    src={item.href}
                    width={4000}
                    height={4000}
                    className="w-full h-64 object-cover shrink-0 my-2 rounded-lg lg:w-full lg:rounded-lg snap-center sm:h-64 sm:my-0 sm:w-64"
                  />
                </Link>
              ))}
          </div>

          {/* Description Container */}
          <div className=" p-4 text-xl text-center" dir="rtl">
            {data
              .filter(item => item.category === category)
              .map((item, index) => (
                <p key={index} className="text-md  text-center text-black  my-2 h-49">{item.description}</p>
              ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Link href='/menue' className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">دریافت قیمت منو ها و رزور زمان بازدید</Link>
        </div>

      </div>
    ))}
  </div>
  );
};

export default Gallery;
