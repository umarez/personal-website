export const Skills = () => {
  return (
    <div className='w-full pb-10 flex justify-center pt-5'>
      <div className='w-4/5 mobile-l:w-3/5 bg-white shadow-blue'>
        <div>
          <h1 className='underline pt-5 pl-2 pb-2 text-lg text-center'>
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
          <h1 className='underline pt-7 pb-2 text-lg text-center'>
            Daily Tech Stack
          </h1>
          <ul className='list-disc pb-5'>
            <div className='flex justify-center'>
              <div className='mr-10'>
                <li>Node</li>
                <li>Postgresql</li>
                <li>Next.js</li>
                <li>Hasura</li>
              </div>
              <div>
                <li>React</li>
                <li>Docker</li>
                <li>Git</li>
                <li>Apollo</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
