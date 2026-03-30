import type { Tournament } from "@/components/TournamentCard";

export const mockTournaments: Tournament[] = [
  {
    id: "1",
    name: "TFT Arena Cup #12",
    date: "05/04/2026",
    time: "19:00 ICT",
    prize: "10,000,000₫",
    maxPlayers: 32,
    status: "live",
    participants: [
      { id: "p1", ign: "Gosu#TFT", isOnline: true },
      { id: "p2", ign: "ProPlayer#VN1", isOnline: true },
      { id: "p3", ign: "StarLight#007", isOnline: false },
      { id: "p4", ign: "Phoenix#Rise", isOnline: true },
      { id: "p5", ign: "Diamond#King", isOnline: false },
    ],
  },
  {
    id: "2",
    name: "Weekly Showdown #48",
    date: "12/04/2026",
    time: "20:00 ICT",
    prize: "5,000,000₫",
    maxPlayers: 16,
    status: "upcoming",
    participants: [
      { id: "p6", ign: "Thunder#Bolt", isOnline: true },
      { id: "p7", ign: "Shadow#VN", isOnline: false },
    ],
  },
  {
    id: "3",
    name: "Grand Championship S5",
    date: "20/04/2026",
    time: "18:00 ICT",
    prize: "25,000,000₫",
    maxPlayers: 64,
    status: "upcoming",
    participants: [
      { id: "p8", ign: "Legend#TFT", isOnline: true },
      { id: "p9", ign: "MasterYi#Pro", isOnline: true },
      { id: "p10", ign: "Draven#King", isOnline: false },
    ],
  },
  {
    id: "4",
    name: "Community Fun Match #5",
    date: "28/03/2026",
    time: "21:00 ICT",
    prize: "2,000,000₫",
    maxPlayers: 8,
    status: "ended",
    participants: [
      { id: "p11", ign: "CasualGamer#01", isOnline: false },
      { id: "p12", ign: "JustForFun#VN", isOnline: false },
      { id: "p13", ign: "Relaxed#Mode", isOnline: false },
      { id: "p14", ign: "GoodVibes#99", isOnline: false },
    ],
  },
];

export const mockNews = [
  {
    title: "Meta Set 14: Những đội hình mạnh nhất hiện tại",
    excerpt: "Phân tích chi tiết top 5 đội hình đang thống trị meta hiện tại và cách chơi hiệu quả.",
    date: "29/03/2026",
    tag: "Meta",
  },
  {
    title: "Grand Championship S5 chính thức mở đăng ký",
    excerpt: "Giải đấu lớn nhất mùa này với tổng giải thưởng 25 triệu đồng đang chờ đón các tuyển thủ.",
    date: "28/03/2026",
    tag: "Giải Đấu",
  },
  {
    title: "Cập nhật patch 14.6: Những thay đổi quan trọng",
    excerpt: "Tổng hợp các thay đổi về champion, item và augment trong bản cập nhật mới nhất.",
    date: "27/03/2026",
    tag: "Patch Notes",
  },
];

export const mockShopItems = [
  {
    id: "s1",
    name: "Khung Avatar Vàng",
    description: "Khung avatar độc quyền cho top 4 giải đấu",
    price: 500,
    currency: "Điểm",
    image: "🏆",
  },
  {
    id: "s2",
    name: "Badge Champion",
    description: "Huy hiệu Champion cho người chiến thắng",
    price: 1000,
    currency: "Điểm",
    image: "🥇",
  },
  {
    id: "s3",
    name: "Title: Chiến Thần",
    description: "Danh hiệu đặc biệt hiển thị bên cạnh tên",
    price: 750,
    currency: "Điểm",
    image: "⚔️",
  },
  {
    id: "s4",
    name: "Emoji Pack TFT",
    description: "Bộ emoji độc quyền sử dụng trong chat",
    price: 300,
    currency: "Điểm",
    image: "😎",
  },
];
