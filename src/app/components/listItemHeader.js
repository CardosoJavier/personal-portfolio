import { ArrowUpRightCircle } from "react-bootstrap-icons";

export default function ListItemHeader({ header, link, company = "" }) {
  return (
    <a
      href={link}
      target="_blank"
      className="font-medium text-slate-200 leading-snug"
    >
      <span className="inline-flex items-baseline gap-2">
        {header} {company} <ArrowUpRightCircle />
      </span>
    </a>
  );
}
