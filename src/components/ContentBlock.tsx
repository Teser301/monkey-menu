import React from "react";

interface ContentBlockProps {
  header?: string;
  img?: string;
  imgAlt?: string;
  content: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  img,
  imgAlt,
  header = "Welcome",
  content,
}) => {
  // Co
  const splitTextIntoParagraphs = (text: string): JSX.Element[] => {
    return text.split(/(?<=[.!?])\s+/).map((para, index) => (
      <p key={index} className="text-lg">
        {para}
      </p>
    ));
  };
  return (
    <section className="bg-black p-8 pb-20 sm:p-20">
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">{header}</h2>
        <div className="grid grid-cols-2 items-center gap-10 my-10">
          {img && <img src={img} alt={imgAlt} />}

          <div className="flex flex-col gap-10">
            {splitTextIntoParagraphs(content)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;
