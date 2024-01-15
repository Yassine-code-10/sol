import React from "react";

export default function Navbar() {
    const [date,setDate] = React.useState<string>('test')
    const [time,setTime] = React.useState<string>('test')

    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            var currentDate = new Date(); 
            var currentTime = new Date(); 
            setDate(currentDate.getDate() + "/" + (currentDate.getMonth()+1)  + "/" + currentDate.getFullYear())
            setTime(currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds())
      },1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
    
  return (
    <div className="flex items-center justify-between w-full h-[60px] gap-3 p-6 bg-neutral2 rounded-xl shadow-lg">
      <div className="">
        <i className="fa fa-bars"></i>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <i className="fa-regular fa-calendar"></i>
          <span className="">{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-regular fa-clock"></i>
          <span className="">{time}</span>
        </div>
      </div>
      <div className="">
        <i className="fa fa-bell"></i>
      </div>
    </div>
  );
}
