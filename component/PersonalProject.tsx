import Image from "next/image";

type projectType = {
  src: string;
  alt: string;
  desc: string;
  style?: string;
};

const project: Array<projectType> = [
  {
    src: "/todo.png",
    desc: "Todo Organizer",
    alt: "todo-organizer.png",
  },
  {
    src: "/memeExplorer.png",
    desc: "Meme Explorer (deprecated)",
    alt: "meme-explorer",
  },
  {
    src: "/rollAball.png",
    desc: "Roll A Ball Game (Unity 3D)",
    alt: "roll-a-ball.png",
  },
];

export const PersonalProject = () => {
  return (
    <>
      {project.map((e, i) => {
        return (
          <div className='pb-4' key={i}>
            <Image
              src={e.src}
              quality={100}
              width={214}
              height={214}
              objectFit='cover'
              alt={e.alt}
            />
            <h1 className={i !== 1 ? "text-white" : "text-gray-500"}>
              {e.desc}
            </h1>
          </div>
        );
      })}
    </>
  );
};
