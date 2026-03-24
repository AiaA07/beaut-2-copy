import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Zap, Crosshair, Rocket } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Nexus Robotics",
  heading = "Built Different. Deployed Everywhere.",
  description = "ARES combines best-in-class hardware with on-site AI training — so it works in your facility, not just in our lab.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Unmatched Endurance",
      content: {
        badge: "10-Hour Battery",
        title: "No shift gaps. No recharging windows.",
        description:
          "ARES runs a full 10-hour production shift on a single charge, with hot-swap capability in under 90 seconds. The only humanoid robot engineered to match your schedule — not the other way around.",
        buttonText: "See Specs",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "ARES endurance and battery system",
      },
    },
    {
      value: "tab-2",
      icon: <Crosshair className="h-auto w-4 shrink-0" />,
      label: "Precision at Scale",
      content: {
        badge: "48 Degrees of Freedom",
        title: "Handle tasks that break lesser robots.",
        description:
          "6-axis force-torque sensing at the wrist and ankle, combined with an 18-point tactile palm, means ARES feels what it's doing and adjusts in real time. Sub-millimeter placement. Zero part damage.",
        buttonText: "See Hardware",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "ARES precision manipulation system",
      },
    },
    {
      value: "tab-3",
      icon: <Rocket className="h-auto w-4 shrink-0" />,
      label: "Rapid Deployment",
      content: {
        badge: "4–8 Hour Setup",
        title: "Train today. Deploy tomorrow.",
        description:
          "No code required. Use our demonstration-based training interface to teach ARES a new task in a single shift. Native integrations with SAP, Oracle, Manhattan Associates, and all major WMS platforms.",
        buttonText: "See Deployment",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "ARES rapid deployment interface",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <div className="container mx-auto px-4">
      <div className="w-full">
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <Badge variant="outline">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value}>
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/50 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-2xl font-bold lg:text-4xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export { Feature108 };