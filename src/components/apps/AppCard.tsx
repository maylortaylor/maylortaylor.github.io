import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface AppCardProps {
  name: string;
  description: string;
  path: string;
  icon?: string;
  tags?: string[];
}

export default function AppCard({
  name,
  description,
  path,
  icon,
  tags = [],
}: AppCardProps) {
  return (
    <Link href={path}>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#80ced7] transition-all duration-200 h-full flex flex-col">
        {icon && (
          <div className="text-4xl mb-4">{icon}</div>
        )}

        <h2 className="text-2xl font-bold text-[#263d42] mb-3 hover:text-[#80ced7] transition-colors">
          {name}
        </h2>

        <p className="text-gray-600 mb-4 flex-grow">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#ccdbdc] text-[#263d42] px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-2 text-[#80ced7] font-semibold">
          Launch App
          <ExternalLink size={18} />
        </div>
      </div>
    </Link>
  );
}
