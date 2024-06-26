import Image from "next/image";

const Heading = ({ title, style, image }) => {
  return (
    <div className={"flex items-center gap-2"}>
      {image && (
        <Image
          src={image}
          alt={"icon"}
          width={32}
          height={32}
          priority={true}
        />
      )}
      <h1 className={`${style} tracking-wide font-medium`}>{title}</h1>
    </div>
  );
};

export default Heading;
