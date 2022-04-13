const TimeInfo = ({ selectedDate, available }) => {
  console.log(selectedDate);
  return (
    <div className="text-center py-4 px-8 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white cursor-pointer font-semibold">
      <p>
        {available[0].hour}.{available[0].min} - {available[1].hour}.
        {available[1].min}
      </p>
    </div>
  );
};

export default TimeInfo;
