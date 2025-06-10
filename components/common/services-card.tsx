import { Card, CardHeader, CardContent } from "../ui/card";
import { ReactNode } from "react";

type PropData={
  icon:ReactNode,
  description:string,
  title:string
}

const ServiceCard = ({icon,description,title}:PropData) => {
  return (
    <div className="flex justify-center items-center min-h-[250px]">
      <Card className="w-full  rounded-2xl shadow-lg border border-emerald-100 dark:border-zinc-700 hover:border-emerald-800 dark:hover:border-emerald-800 transition-colors duration-300 group h-full">
        <CardHeader className="flex flex-col items-center gap-2 pt-5 ">
          <span className="bg-emerald-50 dark:bg-zinc-800 rounded-full p-3 mb-2">
            {icon}
          </span>
          <span className="text-2xl font-bold text-emerald-600 dark:text-white transition-colors duration-300">
            {title}
          </span>
        </CardHeader>
        <CardContent className="text-gray-600 dark:text-zinc-300 text-base px-6 pb-5 text-center">
          {description}
        </CardContent>
      </Card>
    </div>
  );
};
export default ServiceCard;