import Image from "next/image";

const SocialMedia = () => {
    return (
      <>
        <div className='mr-20 cursor-pointer col'>
          <a
            href='https://www.linkedin.com/in/umar-izzuddin/'
            rel='noreferrer'
            target='_blank'
          >
            <Image src='/linkedin.svg' width={37} height={37} />
          </a>
        </div>
        <div className='mr-20 cursor-pointer '>
          <a href='https://github.com/umarez' rel='noreferrer' target='_blank'>
            <Image src='/github.svg' width={37} height={37} />
          </a>
        </div>
        <div className='cursor-pointer'>
          <a
            href='https://www.instagram.com/umar_ez/'
            rel='noreferrer'
            target='_blank'
          >
            <Image src='/instagram.svg' width={48} height={48} />
          </a>
        </div>
      </>
    );
  };

  export default SocialMedia