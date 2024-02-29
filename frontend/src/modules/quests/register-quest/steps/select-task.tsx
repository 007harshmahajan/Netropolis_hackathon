import axios from "axios";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function SelectTask() {
  const [taskData, setTaskData] = useState();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/tasks/").then((response) => {
      const data = response.data;
      console.log(data);
      setTaskData(data);
    });
  }, []);
  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <span className="prose-t3-bold text-neutral-5">Choose an Activity</span>
        <div className="px-10 flex flex-wrap gap-5">
          {taskData?.map((data) => (
            <label
              key={data._id}
              className={classNames(
                "w-[17.5rem] border border-neutral-70 rounded-xl"
              )}
            >
              <img
                src={data.image}
                className="rounded-t-xl w-full h-80 border-none overflow-hidden"
              />

              <div className="p-4 border-t border-t-neutral-70 flex justify-between items-center gap-1">
                <div className="prose-b2-medium">
                  <div className="text-neutral-5">{data.title}</div>
                  <div className="text-neutral-40">{data.reward_amount}</div>
                </div>
                <input
                  className="relative size-5 appearance-none rounded-full border border-neutral-60 before:pointer-events-none checked:border-none checked:bg-primary-20 checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:size-1.5 checked:after:rounded-full checked:after:bg-neutral-100 checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer "
                  type="radio"
                  name="template"
                  id="template"
                />
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
