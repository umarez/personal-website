
import { IExperience } from "@constant/interface/interface";
import { Title } from "./Title";

interface IExperienceProps {
  experiences: IExperience[];
  title: string;
}

const Experiences: React.FC<IExperienceProps> = ({ experiences, title }) => {
  return (
    <div className=''>
      <Title title={title} />
      <div className='flex pt-5 text mx-1 max-w-screen-md'>
        <span className='bg-white w-1.5 mx-3 ' />
        <div className='flex-col pt-0.5'>
          {experiences.map(({ title, description }, i) => {
            return (
              <div key={i} className='pb-5'>
                <h1 className='text-white text-lg 2xl:text-xl pb-1 font-semibold italic'>
                  {title}
                </h1>
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
