import { useState } from "react";
import TournamentCard from "@/components/TournamentCard";
import type { Tournament } from "@/components/TournamentCard";
import { mockTournaments } from "@/lib/mock-data";
import { toast } from "sonner";

const USER_IGN = "MyPlayer#VN1"; // Mock current user

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>(mockTournaments);
  const [registeredIds, setRegisteredIds] = useState<Set<string>>(new Set());
  const [filter, setFilter] = useState<"all" | "upcoming" | "live" | "ended">("all");

  const handleRegister = (tournamentId: string) => {
    setTournaments((prev) =>
      prev.map((t) =>
        t.id === tournamentId
          ? {
              ...t,
              participants: [
                ...t.participants,
                { id: `user-${Date.now()}`, ign: USER_IGN, isOnline: true },
              ],
            }
          : t
      )
    );
    setRegisteredIds((prev) => new Set(prev).add(tournamentId));
    toast.success("Đăng ký thành công!", {
      description: `Bạn đã tham gia giải đấu với tên ${USER_IGN}`,
    });
  };

  const filtered = filter === "all" ? tournaments : tournaments.filter((t) => t.status === filter);

  const filters = [
    { key: "all" as const, label: "Tất Cả" },
    { key: "live" as const, label: "Đang Diễn Ra" },
    { key: "upcoming" as const, label: "Sắp Tới" },
    { key: "ended" as const, label: "Đã Kết Thúc" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <h1 className="font-display text-4xl font-bold text-foreground mb-2">
          Giải <span className="text-primary text-glow-gold">Đấu</span>
        </h1>
        <p className="text-muted-foreground mb-8 font-heading">
          Đăng ký và tham gia các giải đấu TFT hấp dẫn
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-lg px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wider transition-all ${
                filter === f.key
                  ? "bg-primary text-primary-foreground border-glow-gold"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Tournament Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              onRegister={handleRegister}
              isRegistered={registeredIds.has(tournament.id)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <p className="font-heading text-lg">Không có giải đấu nào trong mục này.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tournaments;
