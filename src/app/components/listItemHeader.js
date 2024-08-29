import { ArrowUpRightCircle } from "react-bootstrap-icons";

export default function ListItemHeader({ header, link, company = "" }) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        className="flex flex-row gap-2 font-medium text-slate-200 leading-snug transition-all ease-in-out duration-500 hover:text-teal-400 hover:gap-5"
      >
        <span className="inline-flex items-baseline gap-2">
          {header} {company}
        </span>
        <ArrowUpRightCircle />
      </a>
    </div>
  );
}
