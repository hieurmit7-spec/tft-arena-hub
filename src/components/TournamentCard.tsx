import { useState } from "react";
import { Trophy, Users, Calendar, Clock, CheckCircle } from "lucide-react";

export interface Tournament {
  id: string;
  name: string;
  date: string;
  time: string;
  prize: string;
  maxPlayers: number;
  participants: Participant[];
  status: "upcoming" | "live" | "ended";
}

export interface Participant {
  id: string;
  ign: string;
  isOnline: boolean;
}

interface TournamentCardProps {
  tournament: Tournament;
  onRegister: (tournamentId: string) => void;
  isRegistered: boolean;
}

const statusConfig = {
  upcoming: { label: "Sắp diễn ra", className: "bg-primary/20 text-primary" },
  live: { label: "Đang diễn ra", className: "bg-green-500/20 text-green-400 animate-pulse-glow" },
  ended: { label: "Đã kết thúc", className: "bg-muted text-muted-foreground" },
};

const TournamentCard = ({ tournament, onRegister, isRegistered }: TournamentCardProps) => {
  const [showParticipants, setShowParticipants] = useState(false);
  const status = statusConfig[tournament.status];

  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:border-glow-gold">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider ${status.className}`}>
            {status.label}
          </span>
          <h3 className="mt-2 font-heading text-xl font-bold text-foreground">
            {tournament.name}
          </h3>
        </div>
        <Trophy className="h-8 w-8 text-primary/30 group-hover:text-primary transition-colors" />
      </div>

      {/* Info */}
      <div className="space-y-2 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-secondary" />
          <span>{tournament.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-secondary" />
          <span>{tournament.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-primary" />
          <span className="text-primary font-semibold">{tournament.prize}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-secondary" />
          <span>
            {tournament.participants.length}/{tournament.maxPlayers} người chơi
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {tournament.status !== "ended" && (
          <button
            onClick={() => onRegister(tournament.id)}
            disabled={isRegistered || tournament.participants.length >= tournament.maxPlayers}
            className={`flex-1 rounded-lg px-4 py-2.5 font-heading text-sm font-bold uppercase tracking-wider transition-all ${
              isRegistered
                ? "bg-green-500/20 text-green-400 cursor-default"
                : tournament.participants.length >= tournament.maxPlayers
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-primary-foreground hover:scale-[1.02] border-glow-gold"
            }`}
          >
            {isRegistered ? (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4" /> Đã Đăng Ký
              </span>
            ) : tournament.participants.length >= tournament.maxPlayers ? (
              "Đã Đầy"
            ) : (
              "Đăng Ký"
            )}
          </button>
        )}
        <button
          onClick={() => setShowParticipants(!showParticipants)}
          className="rounded-lg border border-border bg-muted px-4 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-foreground transition-all hover:border-secondary/30"
        >
          <Users className="h-4 w-4" />
        </button>
      </div>

      {/* Participants List */}
      {showParticipants && (
        <div className="mt-4 rounded-lg border border-border bg-background p-4 animate-fade-in">
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Danh sách tham gia
          </h4>
          {tournament.participants.length === 0 ? (
            <p className="text-sm text-muted-foreground italic">Chưa có người đăng ký</p>
          ) : (
            <div className="space-y-2">
              {tournament.participants.map((p) => (
                <div key={p.id} className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2">
                  <span className="font-heading text-sm font-semibold text-foreground">{p.ign}</span>
                  <span className="flex items-center gap-1.5 text-xs">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        p.isOnline ? "bg-green-400 animate-pulse-glow" : "bg-muted-foreground"
                      }`}
                    />
                    <span className={p.isOnline ? "text-green-400" : "text-muted-foreground"}>
                      {p.isOnline ? "Online" : "Offline"}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TournamentCard;
