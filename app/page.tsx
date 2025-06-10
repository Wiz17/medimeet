import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { features, testimonials } from "../lib/data";
import ServiceCard from "@/components/common/services-card";
import TestemonialsCard from "@/components/common/testemonials-card";
import CreditSystemWorkCard from "@/components/common/how-credit-system-work-card";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
const HeroSection = () => {
  return (
    <>
      <section className="relative overflow-hidden py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
              >
                Healthcare made simple
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with doctors <br />
                <span className="gredient">anytime, anywhere</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey all in one secure platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  <Link href="/onboarding">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-700/30 hover:bg-muted/80"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/banner2.png"
                alt="Doctor consultation"
                fill
                priority
                className="object-cover md:pt-14 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ServicesSection = () => {
  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="flex flex-col gap-4 container mx-auto">
          <h1 className="text-4xl  text-white font-bold text-center">
            How It Works!!
          </h1>
          <p className="text-muted-foreground text-center text-lg">
            Our platform makes healthcare accessible with just a few clicks
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-12">
            {features.map((data, ind) => {
              return (
                <>
                  <ServiceCard
                    key={ind}
                    icon={data.icon}
                    description={data.description}
                    title={data.title}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const ConsultationPackagesSection = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto flex flex-col gap-4">
          <Badge
            variant="outline"
            className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium mx-auto"
          >
            Affordable Healthcare
          </Badge>
          <h2 className="text-4xl font-bold mx-auto">Consultation Packages</h2>
          <p className="text-muted-foreground text-lg mx-auto pb-5">
            Choose the perfect consultation package that fits your healthcare
            needs
          </p>
          <CreditSystemWorkCard />
        </div>
      </section>
    </>
  );
};

const TestemonialsSection = () => {
  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto flex flex-col gap-4">
          <Badge
            variant="outline"
            className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium mx-auto"
          >
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold mx-auto">What Our Users Say!</h2>
          <p className="text-muted-foreground text-lg mx-auto">
            Hear from patients and doctors who use our platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-12">
            {testimonials.map((_, ind) => {
              return (
                <>
                  <TestemonialsCard key={ind} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

const PricingBox = () => {
  return (
    <>
      <section className="py-20 px-5">
        <div className="container mx-auto">
          <Card className="border-emerald-500/30 bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 py-20 px-10">
            <div className=" max-w-2xl flex flex-col gap-5">
              <CardHeader className="text-4xl text-white font-bold">
                Ready to take control of your healthcare?
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <span className="text-muted-foreground text-lg">
                  Join thousands of users who have simplified their healthcare
                  journey with our platform. Get started today and experience
                  healthcare the way it should be.
                </span>
                <div className="flex gap-3">
                  <Button variant="secondary" className="bg-emerald-500">Signup Now</Button>
                  <Button variant="outline">View Pricing</Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <ServicesSection />
      <ConsultationPackagesSection />
      <TestemonialsSection />
      <PricingBox />
    </div>
  );
}
