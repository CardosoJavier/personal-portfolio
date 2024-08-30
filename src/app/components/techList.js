export default function TechList({ tech }) {
  if (!tech || tech.length === 0 || !Array.isArray(tech)) {
    console.log("Error with tech");
    return null;
  }

  return (
    <ul className="inline-flex flex-wrap gap-2 mt-4">
      {tech.map((item, index) => (
        <li
          key={index}
          className="flex w-fit  px-3 py-1 bg-teal-400/10 rounded-full"
        >
          <span className="text-teal-400 text-xs md:text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
}
