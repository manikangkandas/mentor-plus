const DateInfo = ({ item, selectedDate, setSelectedDate }) => {
  return (
    <div
      className={`text-center p-16 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer font-semibold space-y-2 ${
        selectedDate &&
        selectedDate.date === item.date &&
        `bg-blue-500 text-white`
      }`}
      onClick={() => setSelectedDate(item)}>
      <p>
        {new Date(item.date).toLocaleString("default", { weekday: "long" })}
      </p>
      <h1 className="text-2xl">{new Date(item.date).getUTCDate()}</h1>
      <p>{new Date(item.date).toLocaleString("default", { month: "long" })}</p>
    </div>
  );
};

export default DateInfo;
