import { ArrowUpRight } from "lucide-react";
import { openSource } from "@/lib/content";

const logos: Record<string, { src: string; fill?: boolean }> = {
  temporal: { src: "/logos/temporal.svg" },
  antrea: { src: "/logos/antrea.svg", fill: true },
  pipecd: { src: "/logos/pipecd.svg" },
};

export function OssList() {
  return (
    <ol className="rows oss-rows">
      {openSource.map((item) => {
        const logo = logos[item.id];
        return (
          <li key={item.id} id={item.id}>
            <a
              className="row oss"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tile logo" aria-hidden="true">
                <img
                  src={logo.src}
                  alt=""
                  width={22}
                  height={22}
                  className={logo.fill ? "fill" : undefined}
                />
              </span>
              <div>
                <p className="what">
                  {item.name} <span>· {item.area}</span>
                </p>
                <p className="note">{item.summary}</p>
              </div>
              <span className="oss-end">
                <span className="when meta">{item.merged} merged</span>
                <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.75} />
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
