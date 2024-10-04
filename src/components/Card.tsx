interface CardProps {
  header: string;
  text: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ header, text, img }) => {
  return (
    <div className="flex flex-row gap-8 bg-white m-5 text-black p-8 rounded-lg">
      <div>
        <h3 className="text-2xl font-bold mb-3">{header}</h3>
        <p>{text}</p>
      </div>
      <img className="max-w-52" src={img} alt={header} />
    </div>
  );
};

export default Card;
