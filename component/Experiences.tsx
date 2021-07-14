import Image from "next/image";

export const Experiences = () => {
  return (
    <>
      <span className='bg-white w-1 mx-5 ' />
      <div className='absolute left-1.5 md:left-2 translate-y-1 tablet-md:hidden'>
        <Image src='/dot.svg' width={28} height={28} />
      </div>
      <div className='flex-col pt-0.5'>
        <h1 className='text-white pb-1'>
          Staff of Web Development at Betis UI 2021
        </h1>
        <h1 className='text-sm text-alternate'>
          Staff of Project Development Division (Bismit), working on various web
          development project requested from inside/outside of campus
        </h1>
        <div className='absolute left-1.5 md:left-2 translate-y-3.5 tablet-md:hidden'>
          <Image src='/dot.svg' width={28} height={28} />
        </div>
        <h1 className='text-white pt-3'>
          Staff of Web Development at Pesta Rakyat Komputer (PERAK) 2021
        </h1>
        <h1 className='text-sm text-alternate'>
          Frontend developer. Using React.js as a main framework and axios for
          fetching backend REST API that build with Django
        </h1>
        <div className='absolute left-1.5 md:left-2 translate-y-3.5 tablet-md:hidden'>
          <Image src='/dot.svg' width={28} height={28} />
        </div>
        <h1 className='text-white pt-3'>
          Staff of Web Development at Open House Fasilkom 2022
        </h1>
        <h1 className='text-sm text-alternate'>
          Fullstack Developer. Using Prisma graphql for backend backbones and
          Next.js as frontend main framework
        </h1>
        <div className='absolute left-1.5 md:left-2 translate-y-3 tablet-md:hidden'>
          <Image src='/dot.svg' width={28} height={28} />
        </div>
        <h1 className='text-white pt-3'>Person In Charge Betis 2022</h1>
        <h1 className='text-sm text-alternate'>
          Lead Betis 2022 web development team.
        </h1>
      </div>
    </>
  );
};
