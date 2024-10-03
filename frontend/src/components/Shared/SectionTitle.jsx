const SectionTitle = ({ title, des }) => {
  return (
    <div className="pb-6">
      <div className="flex gap-2">
        <div className="border-3 border-solid common-border-color"></div>
        <div>
          <h1 className="text-[22px] md:text-3xl">{title}</h1>
          <p className="text-base md:text-xl opacity-85">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
