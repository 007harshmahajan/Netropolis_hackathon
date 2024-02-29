import { IconLabelButton } from "@/components/buttons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/carousel/carousel";
import { RiArrowRightLine } from "@remixicon/react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import img1 from "@/assets/home/1.jpg";
import img2 from "@/assets/home/2.jpg";
import img3 from "@/assets/home/3.jpg";
import img4 from "@/assets/home/4.jpg";
import img5 from "@/assets/home/5.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const plugin = useRef(Autoplay({ delay: 3000 }));

  const homeImages = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
  ];

  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex items-center p-10 gap-10">
      <div className="flex-1 grid gap-4">
        <h1 className="flex flex-col prose-d1-bold items-start text-neutral-5 mb-5">
          Welcome to
          <span className="prose-d3-bold text-neutral-30">Netropolis</span>
        </h1>
        <p className="prose-t3-regular text-justify text-neutral-20">
          We specialize in providing comprehensive packages tailored for various
          tasks, including agricultural work, construction projects, labor
          services, electrical installations, and more. Our platform offers a
          diverse range of activities to meet your specific needs, ensuring
          efficient and reliable solutions for every project. Explore our
          offerings to discover how we can streamline your workflow and elevate
          your outcomes.
        </p>
        <IconLabelButton
          label="Explore More"
          className="w-40"
          rightIcon={<RiArrowRightLine size={20} />}
          onClick={() => navigate("/explore")}
        />
      </div>
      <div className="flex-1 outline outline-primary-20 outline-offset-4 w-full rounded-3xl">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full rounded-3xl overflow-hidden"
        >
          <CarouselContent>
            {homeImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <img src={image.url} className="overflow-hidden rounded-3xl " />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
