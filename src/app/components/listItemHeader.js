import { ArrowUpRightCircle } from "react-bootstrap-icons";

export default function ListItemHeader({ header, link, company = "" }) {
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-row w-fit gap-2 font-medium text-slate-200 leading-snug transition-all ease-in-out duration-500 hover:text-teal-400 hover:gap-5"
    >
      <span className="inline-flex items-baseline gap-2 md:text-lg">
        {header} {company}
      </span>
      <ArrowUpRightCircle />
    </a>
  );
}
