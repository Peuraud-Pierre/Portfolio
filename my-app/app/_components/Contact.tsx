import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ContactCard = (props: {
  Image: string;
  Medium_image: string;
  Name: string;
  Description: string;
  Url?: string;
}) => {
  return (
    <Link href={props.Url || "/"} className="w-full">
      <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group">
        <div className="relative w-12 h-12 shrink-0">
          <img
            src={props.Image}
            alt={props.Name}
            className="w-full h-full rounded-full object-cover object-center"
          />
          <img
            src={props.Medium_image}
            alt={props.Name}
            className="h-5 w-5 absolute -bottom-1 -right-1 border border-white rounded-full object-cover object-center"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-lg font-semibold">{props.Name}</p>
          <p className="text-xs text-muted-foreground">{props.Description}</p>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform"
          size={16}
        />
      </Card>
    </Link>
  );
};
