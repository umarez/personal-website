import Image from "next/image";

const SocialMedia = () => {
  return (
    <>
      <div className='mr-20 cursor-pointer '>
        <Image src='/linkedin.svg' width={37} height={37} />
      </div>
      <div className='mr-20 cursor-pointer'>
        <Image src='/github.svg' width={37} height={37} />
      </div>
      <div className='cursor-pointer'>
        <Image src='/instagram.svg' width={48} height={48} />
      </div>
    </>
  );
};

export default SocialMedia;
