export default function SectionHeader({ header }) {
  return (
    <div className="sticky w-screen bg-custom-gradient/75 backdrop-blur-md top-0 -mx-8 px-8 py-4 lg:hidden">
      <h3 className=" text-headers text-sm uppercase tracking-widest font-bold md:text-lg">
        {header}
      </h3>
    </div>
  );
}
