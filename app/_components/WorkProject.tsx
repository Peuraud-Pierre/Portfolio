import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const Work: WorkProjectProps[] = [
  {
    Image: "https://cdn-icons-png.flaticon.com/512/2230/2230524.png",
    title: "Marché",
    role: "Vendeur",
    date: "2021",
    url: "",
    current: true,
  },
];

type WorkProjectProps = {
  Image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  current?: boolean;
};

export const WorkProject = (props: WorkProjectProps) => {
  return (
    <div className="flex flex-col">
      <Link
        href={props.url}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
      >
        <img
          src={props.Image}
          alt={props.title}
          className="w-10 h-10 object-contain rounded-md filter invert"
        />
        <div className="flex items-center flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.title}</p>
            {props.current && <Badge variant="outline">Mission</Badge>}
          </div>
          <div className="flex items-center gap-10">
            <p className="text-xs text-muted-foreground">{props.role}</p>
            <p className="text-x text-end text-muted-foreground">{props.date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
