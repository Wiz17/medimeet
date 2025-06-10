import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const TestemonialsCard = () => {
  return (
    <>
      <Card className="py-10 ">
        <CardHeader className="flex gap-3 items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold">Sarah Degrandhome</p>
            <p className="text-muted-foreground">Creator</p>
          </div>
        </CardHeader>
        <CardContent className="text-muted-foreground">
          The video consultation feature saved me so much time. I was able to
          get medical advice without taking time off work or traveling to a
          clinic.
        </CardContent>
      </Card>
    </>
  );
};
export default TestemonialsCard;
