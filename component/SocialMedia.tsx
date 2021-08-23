import Image from "next/image";
import { motion } from "framer-motion";
import { images, sourceImage } from "../constant/socialMedia/source";

const Media = ({ src, href, width, height }: sourceImage) => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} className=' cursor-pointer col'>
      <a href={href} rel='noreferrer' target='_blank'>
        <Image src={src} width={width} height={height} />
      </a>
    </motion.div>
  );
};

const SocialMedia = () => {
  return (
    <>
      {images.map(({src, href, width, height}, i) => {
        return (
          <div key={i}  className={i == 2 ? "pt-1 px-1 md:px-3 lg:px-7": "px-3 md:px-5 lg:px-10"}>
            <Media
              src={src}
              href={href}
              width={width}
              height={height}
            />
          </div>
        );
      })}
    </>
  );
};

export default SocialMedia;
