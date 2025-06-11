import { creditBenefits } from "@/lib/data";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Stethoscope, Check } from "lucide-react";
const CreditSystemWorkCard = () => {
  return (
    <>
      <Card className="border-emerald-600/30">
        <CardHeader className="flex gap-3">
          <Stethoscope className="text-emerald-500" />
          <span className="text-xl text-white font-bold">
            How our credit system works!
          </span>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {creditBenefits.map((data, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="bg-emerald-800/30 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Check className="text-emerald-500 w-4 h-4" />
              </div>
              <span
                className="ml-2"
                dangerouslySetInnerHTML={{ __html: data }}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default CreditSystemWorkCard;
