import { useState } from "react";
import { User, Gamepad2, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const IGN_REGEX = /^.{3,16}#[a-zA-Z0-9]{2,5}$/;

const Profile = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [ign, setIgn] = useState("");
  const [ignError, setIgnError] = useState("");
  const [saved, setSaved] = useState(false);

  const validateIGN = (value: string) => {
    setIgn(value);
    if (!value) {
      setIgnError("");
      return;
    }
    if (!IGN_REGEX.test(value)) {
      setIgnError("Định dạng không đúng. Ví dụ: Gosu#TFT (Tên 3-16 ký tự # Tag 2-5 ký tự)");
    } else {
      setIgnError("");
    }
  };

  const handleSave = () => {
    if (!displayName || !email || !ign) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if (!IGN_REGEX.test(ign)) {
      toast.error("In-game Name không đúng định dạng");
      return;
    }
    setSaved(true);
    toast.success("Lưu thông tin thành công!");
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-xl">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          Tài <span className="text-primary text-glow-gold">Khoản</span>
        </h1>
        <p className="text-muted-foreground mb-8 font-heading">
          Quản lý thông tin cá nhân và In-game Name
        </p>

        <div className="rounded-xl border border-border bg-card p-8 space-y-6">
          {/* Display Name */}
          <div>
            <label className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              <User className="h-4 w-4" />
              Tên hiển thị
            </label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Nhập tên hiển thị"
              className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              className="w-full rounded-lg border border-border bg-input px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          {/* IGN */}
          <div>
            <label className="flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              <Gamepad2 className="h-4 w-4" />
              In-Game Name (Riot ID)
            </label>
            <input
              type="text"
              value={ign}
              onChange={(e) => validateIGN(e.target.value)}
              placeholder="Gosu#TFT"
              className={`w-full rounded-lg border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 transition-all ${
                ignError
                  ? "border-destructive focus:border-destructive focus:ring-destructive bg-destructive/5"
                  : ign && !ignError
                  ? "border-green-500 focus:border-green-500 focus:ring-green-500 bg-green-500/5"
                  : "border-border bg-input focus:border-primary focus:ring-primary"
              }`}
            />
            {ignError && (
              <p className="mt-2 flex items-center gap-1.5 text-xs text-destructive animate-fade-in">
                <AlertCircle className="h-3 w-3" />
                {ignError}
              </p>
            )}
            {ign && !ignError && (
              <p className="mt-2 flex items-center gap-1.5 text-xs text-green-400 animate-fade-in">
                <CheckCircle className="h-3 w-3" />
                Định dạng hợp lệ ✓
              </p>
            )}
          </div>

          {/* Save */}
          <button
            onClick={handleSave}
            className="w-full rounded-lg bg-primary px-6 py-3 font-heading text-base font-bold uppercase tracking-wider text-primary-foreground transition-all hover:scale-[1.02] border-glow-gold"
          >
            {saved ? "Đã Lưu ✓" : "Lưu Thông Tin"}
          </button>

          {/* Login hint */}
          <div className="rounded-lg border border-border bg-muted/50 p-4 text-center">
            <p className="text-sm text-muted-foreground">
              Đăng nhập bằng Google hoặc Email sẽ khả dụng sau khi kết nối backend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
