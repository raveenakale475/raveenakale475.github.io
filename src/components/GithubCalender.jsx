import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const GitHubCalendarComponent = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 5;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div className="flex flex-col justify-center  justify-items-stretch h-full w-full mx-auto mt-5 ">
      <p className="text-center text-4xl p-2 underline font-bold ">
        Github Statistics
      </p>
      <br />
      <div>
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="raveenakale475"
          transformData={selectLastHalfYear}
          blockSize={15}
          fontSize={15}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
      </div>
      <div className="flex flex-col justify-center item-center mx-auto mt-10">
        <div></div>
        <div>
          <p className=" flex justify-center">
            <a href="https://github.com/raveenakale475/github-readme-stats">
              <img
                alt="Raveena kale's Top Languages"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=raveenakale475&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=0D1117"
              />
            </a>
          </p>
        </div>

        <div>
          <p>
            <a href="https://github.com/raveenakale475/github-readme-stats">
              <img
                alt="Raveena kale's Github Stats"
                src="https://github-readme-stats.vercel.app/api?username=raveenakale475&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GitHubCalendarComponent;
