import HeroBanner from "@/components/HeroBanner";
import NewsCard from "@/components/NewsCard";
import { mockNews } from "@/lib/mock-data";
import { Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Giải đấu hàng tuần",
    description: "Tham gia các giải đấu với giải thưởng hấp dẫn được tổ chức mỗi tuần.",
  },
  {
    icon: Shield,
    title: "Hệ thống công bằng",
    description: "Anti-cheat và xác minh kết quả tự động đảm bảo tính minh bạch.",
  },
  {
    icon: Users,
    title: "Cộng đồng sôi động",
    description: "Kết nối với hàng trăm người chơi TFT đam mê trên khắp Việt Nam.",
  },
];

const Index = () => {
  return (
    <div>
      <HeroBanner />

      {/* Features */}
      <section className="py-20 bg-hex-pattern">
        <div className="container">
          <h2 className="text-center font-display text-3xl font-bold text-foreground mb-12">
            Tại sao chọn <span className="text-primary text-glow-gold">TFT Arena</span>?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:border-glow-gold"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20">
        <div className="container">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8">
            Tin Tức <span className="text-secondary text-glow-cyan">Mới Nhất</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {mockNews.map((news) => (
              <NewsCard key={news.title} {...news} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center">
          <p className="font-heading text-sm text-muted-foreground">
            © 2026 TFT Arena. Không liên kết với Riot Games.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
