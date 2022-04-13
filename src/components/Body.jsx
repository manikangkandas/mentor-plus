import { useState, useEffect } from "react";
import Button from "./Button";
import DateInfo from "./DateInfo";
import TimeInfo from "./TimeInfo";

const Body = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  // fetching api data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <main className="p-4 xl:p-12 space-y-12 xl:col-span-3">
      <h1 className="font-bold text-4xl">
        <span className="text-blue-500">Book</span> demo session slot
      </h1>
      {/* data info */}
      <section className="space-y-4">
        <p className="font-semibold text-xl">Select date</p>
        <div className="flex items-center space-x-4 overflow-x-scroll pb-4">
          {data.map((item, i) => {
            return (
              <DateInfo
                item={item}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                key={i}
              />
            );
          })}
        </div>
      </section>

      {/* time info */}
      <section className="space-y-4">
        <p className="font-semibold text-xl">Select slot</p>
        <div className="flex items-center space-x-4">
          {selectedDate &&
            data.map(
              (item, i) =>
                selectedDate.date === item.date && (
                  <TimeInfo
                    available={item.available}
                    key={i}
                  />
                )
            )}
        </div>
      </section>

      {/* button */}
      <Button text="Proceed to pay" />
    </main>
  );
};

export default Body;
