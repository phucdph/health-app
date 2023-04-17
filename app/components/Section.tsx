import type { HTMLProps, ReactNode } from "react";

type SectionProps = {
  image?: string;
  isFull?: boolean;
  children?: ReactNode;
} & Pick<HTMLProps<HTMLElement>, "className">;

const Section = ({
  className = "",
  image,
  children,
  isFull = false,
}: SectionProps) => {
  return (
    <section className={`relative block py-5 ${className}`}>
      {image && (
        <div className="z-0">
          <img src={image} className="object-fill" alt="Thumbnail" />
        </div>
      )}
      <div className={`${isFull ? "" : "container"} relative mx-auto`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
