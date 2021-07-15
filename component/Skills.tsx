export const Skills = () => {
  return (
    <>
      <h1 className='underline pl-2 pb-2 text-lg text-center'>
        Programming language
      </h1>
      <ul className='list-disc'>
        <div className='flex justify-center'>
          <div className='mr-10'>
            <li>Python</li>
            <li>Java</li>
          </div>
          <div>
            <li>Javascript</li>
            <li>Typescript</li>
          </div>
        </div>
      </ul>
      <h1 className='underline pl-2 pb-2 pt-5 text-lg text-center'>
        Daily Tech Stack
      </h1>
      <ul className='list-disc '>
        <div className='flex justify-center'>
          <div className='mr-10'>
            <li>Node</li>
            <li>Postgresql</li>
            <li>Next.js</li>
          </div>
          <div>
            <li>Apollo</li>
            <li>Docker</li>
            <li>Git</li>
          </div>
        </div>
      </ul>
    </>
  );
};
