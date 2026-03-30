import { ArrowRight } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

const NewsCard = ({ title, excerpt, date, tag }: NewsCardProps) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 cursor-pointer">
      <span className="inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider text-secondary mb-3">
        {tag}
      </span>
      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{date}</span>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </div>
  );
};

export default NewsCard;
