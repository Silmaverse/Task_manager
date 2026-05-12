import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  rotation: -90, // start from top
  cutout: '70%', // donut hole size
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [160, 40, 40, 40, 40],
      backgroundColor: ["#E8EDF2", "#5415F1", "#50D1B2", "#EC8C56", "#2775FF"],

      borderWidth: 1,
    },
  ],
};

export const Label=()=>{
  return (
    <>
    <div className="">
    <div className="flex gap-2 items-center">
     <div className="w-2.75 h-2.75 bg-[#5415F1] rounded-xs">
     </div>
     <p className="font-normal font-poppins text-xs">Pending</p>
    </div>
     <div className="flex gap-2 items-center">
     <div className="w-2.75 h-2.75 bg-[#2775FF] rounded-xs">
     </div>
     <p className="font-normal font-poppins text-xs">To do list</p>
    </div>
     <div className="flex gap-2 items-center">
     <div className="w-2.75 h-2.75 bg-[#50D1B2] rounded-xs">
     </div>
     <p className="font-normal font-poppins text-xs">Completed</p>
    </div>
     <div className="flex gap-2 items-center">
     <div className="w-2.75 h-2.75 bg-[#EC8C56] rounded-xs">
     </div>
     <p className="font-normal font-poppins text-xs">In progress</p>
    </div>
    </div>
    </>
  )
   
}

export function Bar() {
  return (
    <div className="flex gap-10.75 items-center">
    <div className="relative w-40.75 h-40.75 my-8">
      <Doughnut data={data} options={options}  />
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
        56%
      </div>
    </div>
    <Label/>
    </div>
  );
}
