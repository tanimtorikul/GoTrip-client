const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-8">
      <h3 className="text-4xl font-bold text-blue-700">{heading}</h3>
      <p className="mt-2 text-gray-600">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
