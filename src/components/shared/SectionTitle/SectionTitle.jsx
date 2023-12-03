const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-8">
      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-teal-500">
        {heading}
      </h3>
      <p className="text-lg text-teal-600">{subHeading}</p>
      <div className="mt-4 w-20 h-1 bg-teal-700 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;
