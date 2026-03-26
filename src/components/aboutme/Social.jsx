import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { RiGithubFill, RiLinkedinFill, RiTwitterFill } from "@remixicon/react";

const socialIcons = [
  {
    link: "https://github.com",
    icon: <RiGithubFill size={30} />,
  },
  {
    link: "https://linkedin.com",
    icon: <RiLinkedinFill size={30} />,
  },
  {
    link: "https://twitter.com",
    icon: <RiTwitterFill size={30} />,
  },
];

const Social = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-fit sm:max-w-xs mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {socialIcons?.map((social, index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="p-1 ">
              <Card className="bg-transparent ring-0 py-0">
                <CardContent className="flex aspect-square items-center justify-center px-3 py-0 text-white">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex opacity-30 items-center justify-center border-gray-500 text-white border-2 rounded-full p-3 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    {social.icon}
                  </a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default Social;
