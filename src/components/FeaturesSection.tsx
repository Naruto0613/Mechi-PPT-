import { motion } from "motion/react";
import { Edit3, BookOpen, Mic2, Compass, Award, Heart } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Edit3 className="w-5 h-5 text-brand-orange" />,
      title: "Ханз үсэг сурах",
      subtitle: "Тогтоох язгуурууд",
      text: "Түвэгтэй ханзыг монгол хүний сэтгэхүйд ойр харааны дүрсээр холбон хурдан тогтооно."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-brand-orange" />,
      title: "Унших дасгал",
      subtitle: "Найруулгын бүтэц",
      text: "Монгол болон хятад хэлний өгүүлбэрийн бүтцийг зэрэгцүүлж, шилжилтийг тодруулна."
    },
    {
      icon: <Mic2 className="w-5 h-5 text-brand-orange" />,
      title: "Сонсох дасгал",
      subtitle: "Аялга удирдах заавар",
      text: "Монгол хүний дуудлагын онцлогт багтаан хятад хэлний 4 аялгыг долгионоор зөв суулгана."
    },
    {
      icon: <Compass className="w-5 h-5 text-brand-orange" />,
      title: "Үгсийн санг тэлэх",
      subtitle: "Агуулгад суурилсан давталт",
      text: "Ухаалаг давтах хуваариар дамжуулан үгсийн санг цээжлэхгүйгээр өөрөө тогтооно."
    },
    {
      icon: <Award className="w-5 h-5 text-brand-orange" />,
      title: "Шат дараалсан сургалт",
      subtitle: "Дасан зохицох шатлал",
      text: "Тэг сууриас эхлэн бизнесийн чөлөөт яриа хүртэл системтэй, шат дараалсан богино хичээл."
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-orange" />,
      title: "Сурагчид ээлтэй дизайн",
      subtitle: "Сатаарах зүйлгүй төвлөрөл",
      text: "Зар сурталчилгаа болон элдэв сатааруулах зүйлгүйгээр зөвхөн хичээлдээ төвлөрнө."
    }
  ];

  return (
    <section id="features" className="relative h-screen w-screen flex flex-col justify-between bg-brand-cream overflow-hidden p-8 md:p-16 xl:p-20 presentation-bg border-b border-brand-beige">
      <header className="flex justify-between items-start z-10 w-full shrink-0">
        <div className="space-y-1">
          <div className="w-12 h-1 bg-brand-orange rounded-full mb-3"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold text-[#A5A5A5]">
            Стартап Танилцуулга / 2026 оны III улирал
          </span>
        </div>
      </header>

      <div className="flex-1 max-w-6xl w-full mx-auto z-10 flex flex-col justify-center mt-6 lg:mt-0">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5A5A5] font-semibold mb-3">04 / Бүтээгдэхүүний бүтэц</div>
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-charcoal tracking-tight leading-none mb-4 font-sans max-w-xl mx-auto leading-tight">
            Бидний үндсэн <span className="italic font-serif text-brand-orange font-medium">экосистем</span>
          </h2>
          <p className="text-[#7A7A7A] text-xs md:text-sm font-light leading-relaxed">
            Суралцах дээд зэргийн үр дүнг хангах ухаалаг экосистемийн 6 үндсэн чиглэл.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: "easeOut" }}
              className="bg-white border border-[#EAE7E2] p-6 rounded-3xl shadow-[0_2px_8px_rgba(28,27,24,0.01)] hover:shadow-md transition-shadow duration-350 relative group"
            >
              <div className="absolute -top-[1px] left-8 right-8 h-[2px] bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center rounded-full" />
              
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#FF6B35]/10 flex items-center justify-center shrink-0 mb-3 scale-90 group-hover:scale-100 transition-transform duration-300">
                  {feat.icon}
                </div>
                <div>
                  <span className="text-[9px] uppercase font-mono tracking-wider text-[#A5A5A5] block font-bold">
                    {feat.subtitle}
                  </span>
                  <h3 className="text-base font-display font-semibold text-brand-charcoal mb-2">
                    {feat.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs md:text-sm text-[#7A7A7A] font-light leading-relaxed">
                {feat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <footer className="h-4 shrink-0 hidden md:block"></footer>
    </section>
  );
}
