import React from "react";
import Button from "./Button";

interface PricingOption {
  duration: string;
  price: string;
  annualCost: string;
}

const pricingData: PricingOption[] = [
  {
    duration: "Monthly",
    price: "$10",
    annualCost: "Charged every month Total amount is $10",
  },
  {
    duration: "6 Months",
    price: "$50",
    annualCost: "Charged every month Total amount is $100",
  },
  {
    duration: "Yearly",
    price: "$90",
    annualCost: "Charged every month Total amount is $90",
  },
];

const ServiceCost: React.FC = () => {
  return (
    <section className="bg-black  p-8 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Product Pricing</h2>
        <div className="mx-auto">
          <div className="flex justify-center gap-6 items-center">
            {pricingData.map((option, index) => (
              <div
                key={index}
                className="flex flex-col border border-gray-300  px-4 py-8 w-48 h-72 justify-between rounded-lg text-center"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {option.duration}
                </h3>
                <p className="text-5xl font-bold text-primary mb-2">
                  {option.price}
                </p>
                <span className="text-xs text-gray-500 mt-5">
                  {option.annualCost}
                </span>
              </div>
            ))}
          </div>
          <span className="text-center block text-xs text-gray-500 my-5">
            VAT may be applicable
          </span>
        </div>
        <div className="flex flex-col  gap-5 max-w-lg p-8 mx-auto text-center border border-gray-300">
          <h3 className="text-2xl font-bold ">Free QR code menu for a month</h3>
          <p>
            You can try our QR code menu service first, and then decide does it
            suits you or not. It's free and we do not ask for your credit card
            details.
          </p>
          <Button href="/sign-up">Try it for free</Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCost;
