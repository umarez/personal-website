import Image from "next/image";
import { motion } from "framer-motion";
import { images, sourceImage } from "./source";

const Media = ({ src, href, width, height }: sourceImage) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className='mr-20 cursor-pointer col'
    >
      <a href={href} rel='noreferrer' target='_blank'>
        <Image src={src} width={width} height={height} />
      </a>
    </motion.div>
  );
};

const SocialMedia = () => {
  return (
    <>
      {images.map((e, i) => {
        return (
          <Media
            key={i}
            src={e.src}
            href={e.href}
            width={e.width}
            height={e.height}
          />
        );
      })}
    </>
  );
};

export default SocialMedia;
