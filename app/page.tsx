import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { features, testimonials } from "../lib/data";
import ServiceCard from "@/components/common/services-card";
import TestemonialsCard from "@/components/common/testemonials-card";
import CreditSystemWorkCard from "@/components/common/how-credit-system-work-card";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-emerald-900/20 to-zinc-900 z-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <Badge
              variant="outline"
              className="bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium animate-fade-in"
            >
              Healthcare made simple
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Connect with{" "}
              <span className="relative inline-block">
                <span className="relative z-10">doctors</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-500/30 z-0" />
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                anytime, anywhere
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
              Book appointments, consult via video, and manage your healthcare
              journey all in one secure platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              >
                <Link href="/onboarding" className="flex items-center gap-2">
                  Get Started{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-emerald-700/30 hover:bg-muted/80 hover:border-emerald-700/50 transition-colors duration-300"
              >
                <Link href="/doctors" className="flex items-center gap-2">
                  <UserCircle className="h-5 w-5" />
                  Find Doctors
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${
                      item % 2 === 0 ? "women" : "men"
                    }/${item}.jpg`}
                    alt="User"
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-muted"
                    loading="lazy" // Optional: lazy loading
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-white">1000+</span> patients
                helped today
              </div>
            </div>
          </div>

          {/* Hero image with floating elements */}
          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <Image
                src="/banner2.png"
                alt="Doctor consultation"
                fill
                priority
                className="object-cover object-right"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span className="font-medium text-sm">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                  <Button
                    variant="secondary"
                    className="bg-emerald-500 hover:bg-emerald-700"
                  >
                    Signup Now
                  </Button>
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
