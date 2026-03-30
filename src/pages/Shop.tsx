import { mockShopItems } from "@/lib/mock-data";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const Shop = () => {
  const handleRedeem = (itemName: string) => {
    toast.info("Tính năng đang phát triển", {
      description: `"${itemName}" sẽ sớm có sẵn khi hệ thống cửa hàng hoàn thiện.`,
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          Cửa <span className="text-secondary text-glow-cyan">Hàng</span>
        </h1>
        <p className="text-muted-foreground mb-8 font-heading">
          Đổi điểm thưởng lấy các vật phẩm độc quyền
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mockShopItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-secondary/30 hover:border-glow-cyan"
            >
              <div className="text-5xl mb-4">{item.image}</div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{item.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{item.description}</p>
              <div className="font-display text-lg font-bold text-secondary mb-4">
                {item.price} <span className="text-xs text-muted-foreground">{item.currency}</span>
              </div>
              <button
                onClick={() => handleRedeem(item.name)}
                className="w-full rounded-lg border border-secondary/50 bg-secondary/10 px-4 py-2 font-heading text-sm font-bold uppercase tracking-wider text-secondary transition-all hover:bg-secondary/20"
              >
                <ShoppingBag className="inline h-4 w-4 mr-1" />
                Đổi
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
