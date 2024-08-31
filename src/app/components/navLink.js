export default function NavLink({
  sectionId,
  sectionName,
  currentSection,
  sectionsToObserve,
}) {
  return (
    <li className="group w-fit">
      <a href={`#${sectionId}`} className="flex gap-5 items-center text-sm">
        <span
          className={` w-8 h-px transition-all duration-200 group-hover:bg-teal-400 group-hover:w-16 ${
            sectionsToObserve.includes(currentSection)
              ? "bg-teal-400 transition-all duration-200 w-16"
              : "bg-body"
          }`}
        ></span>
        <span
          className={` uppercase tracking-wide text-body text-xs transition-all duration-200 group-hover:text-teal-400 ${
            sectionsToObserve.includes(currentSection)
              ? "text-teal-400"
              : "text-body"
          }`}
        >
          {sectionName}
        </span>
      </a>
    </li>
  );
}
