import React from "react";
import Card from "./Card";

interface ContentListingProps {
  header?: string;
}

interface CardContent {
  header: string;
  text: string;
  img: string;
}

const cardData: CardContent[] = [
  {
    header: "Enhancing Customer Experience",
    text: "Working with digital menu is easier. Loading of the menu is faster. There is more useful information in digital menu.",
    img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png",
  },
  {
    header: "Enhancing Customer Experience",
    text: "Working with digital menu is easier. Loading of the menu is faster. There is more useful information in digital menu.",
    img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png",
  },
  {
    header: "Enhancing Customer Experience",
    text: "Working with digital menu is easier. Loading of the menu is faster. There is more useful information in digital menu.",
    img: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbGlmZW9mcGl4MDAwMDEtaW1hZ2VfMS1renhsdXd3ci5wbmc.png",
  },
];

const ContentListing: React.FC<ContentListingProps> = ({
  header = "Welcome",
}) => {
  return (
    <section className="p-8 pb-20 sm:p-20">
      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">{header}</h2>
        {cardData.map((card, index) => (
          <Card
            key={index}
            header={card.header}
            text={card.text}
            img={card.img}
          />
        ))}
      </div>
    </section>
  );
};

export default ContentListing;
