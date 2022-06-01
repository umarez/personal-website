export const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className='flex flex-col items-center justify-center pt-5'>
      <h3 className='text-center text-xl 2xl:text-3xl text-experience pb-2'>
        {title}
      </h3>
      <span
        style={{
          background:
            "linear-gradient(180deg, #425F65 54.78%, rgba(100, 113, 151, 0.74) 154.78%)",
        }}
        className='w-32 2xl:w-44 h-2 shadow-md'
      />
    </div>
  );
};
