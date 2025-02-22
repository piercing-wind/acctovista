import Image from "next/image"
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:15s] [--gap:3rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}


interface ImageProps {
   src: string;
   alt: string;
   width: string | number;
   height: string | number;
}

interface AccountingSoftwareMarqueProps {
   images: ImageProps[];
   className?: string;
 }
export const SoftwareMarque : React.FC<AccountingSoftwareMarqueProps> = ({images, className}) => {

   return(
         <Marquee className={`py-4`}>
               {/* <Image src="/services/accountingSoftwares/acs-256_orig.svg" alt="ACS" height={50} width={105}/> */}
               {images.map((image, index) => (
                  <div key={index} className={`relative py-4 ${className}`}
                  style={{ height: image.height, width: image.width }}
                  >
                     <Image
                       src={image.src}
                       alt={image.alt}
                       fill
                        style={{objectFit:'cover'}}
                     />
                  </div>
                ))}
         </Marquee>
   )
}