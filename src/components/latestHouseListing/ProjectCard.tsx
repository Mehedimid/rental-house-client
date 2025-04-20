import Image from "next/image";
import Link from "next/link";


/* eslint-disable react/prop-types */
const ProjectCard = ({ slide }) => {
  console.log(slide.img)
  return (
    <>
      <div className="h-full w-full relative hover:scale-110 duration-500">
        <Link href="/portfolio">
          <Image src={slide.img} width={400} height={300} alt="slide image" className="slide-image" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 transition-opacity duration-500 hover:opacity-30 rounded-md"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 hover:opacity-70 rounded-md"></div>
        </Link>
      </div>
      {/* content */}
      <div className="absolute left-6 lg:left-8 xl:left-10 right-6 lg:right-8 xl:right-10 bottom-6 pr-10 w-full text-start text-white space-y-4">
        <p className="max-md:text-[0.8rem] mb-4 ">{slide.service}</p>
        <Link href="/portfolio">
        <h4 className="pb-6 text-[1.4rem] xl:text-[1.4rem] w-[95%]">{slide.title}</h4>
        </Link>
        <Link
          className="border-AppSecondary hover:-translate-y-1 text-sm rounded-md hidden"
          href={"/services"}
        />
      </div>
    </>
  );
};

export default ProjectCard;
