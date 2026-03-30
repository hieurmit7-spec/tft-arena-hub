import { Link } from "react-router-dom";
import { Trophy, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="TFT Arena Tournament"
          className="h-full w-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-hex-pattern" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center animate-slide-up">
        <div className="inline-block mb-4 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
          <span className="font-heading text-sm font-semibold uppercase tracking-widest text-primary">
            Mùa giải 2026
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-4 text-glow-gold leading-tight">
          TFT <span className="text-primary">ARENA</span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8 font-heading">
          Nền tảng giải đấu Teamfight Tactics hàng đầu. Tham gia thi đấu, kết nối cộng đồng 
          và chinh phục vinh quang.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/tournaments"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-heading text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-105 border-glow-gold"
          >
            <Trophy className="h-5 w-5" />
            Xem Giải Đấu
          </Link>
          <Link
            to="/profile"
            className="inline-flex items-center gap-2 rounded-lg border border-secondary/50 bg-secondary/10 px-8 py-3.5 font-heading text-base font-bold uppercase tracking-wider text-secondary transition-all hover:bg-secondary/20 border-glow-cyan"
          >
            <Users className="h-5 w-5" />
            Tham Gia Ngay
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "500+", label: "Người Chơi" },
            { value: "32", label: "Giải Đấu" },
            { value: "50M₫", label: "Tổng Giải Thưởng" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary text-glow-gold">
                {stat.value}
              </div>
              <div className="font-heading text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
