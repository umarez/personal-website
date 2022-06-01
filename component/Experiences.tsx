import { IExperience } from "@constant/interface/interface";
import { Title } from "./Title";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

interface IExperienceProps {
  experiences: IExperience[];
  title: string;
}

const Experiences: React.FC<IExperienceProps> = ({ experiences, title }) => {
  const router = useRouter();
  return (
    <div className=''>
      <Title title={title} />
      <div className='flex pt-5 text mx-1 max-w-screen-md'>
        <span className='bg-white w-1.5 mx-3 ' />
        <div className='flex-col pt-0.5'>
          {experiences.map(({ title, description, link }, i) => {
            return (
              <div key={i} className='pb-5'>
                <div className='flex items-center'>
                  <h1 className='text-white text-lg 2xl:text-xl pb-1 font-semibold italic'>
                    {title}
                    {link && (
                      <a href={link} target='_blank' rel='noreferrer'>
                        <span className='pl-2 cursor-pointer'>
                          <ExternalLinkIcon
                            className='inline -translate-y-1'
                            width={24}
                            height={24}
                            color={"white"}
                          />
                        </span>
                      </a>
                    )}
                  </h1>
                </div>

                <h1 className='text-base 2xl:text-base text-alternate'>
                  {description}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
