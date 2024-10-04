import Header from "@/components/Header";
import ContentBlock from "@/components/ContentBlock";
import ContentListing from "@/components/ConentListing";
import ServiceCost from "@/components/ServiceCost";
import Gallery from "@/components/Gallery";
const images = [
  "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
  "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
  "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
  "https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
];

export default function Home() {
  return (
    <div className="flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Header />
      <ContentBlock
        header="Welcome"
        img="https://oddmenu.com/images/landing/first-screen/app-2-en.webp"
        imgAlt="Demo Picture"
        content="
          Our menu service includes a whole range of functions for the
          restaurant, cafe or bar. For your guests - this is a modern, easy to
          use QR code menu. For you - this is an digital platform built around
          your QR code menu for improving a quality of customer service and
          increasing sales. No purchasing expensive terminals for you and no
          application installation on your guests phones needed for our digital
          menu to work.
        "
      />
      <Gallery images={images} />
      <ContentListing header="Digital QR code menu benefits" />
      <ServiceCost />
    </div>
  );
}
