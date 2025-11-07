import React from "react";
import { Badge, Calendar as AntdCalendar } from "antd";
import type { BadgeProps, CalendarProps as AntdCalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import type { Task } from "../../store/constants/interfaces/task.interface";

export interface CalendarProps extends AntdCalendarProps<Dayjs> {
  deadlines: Task[];
  parentClassName?: string;
}

const Calendar: React.FC<CalendarProps> = ({
  deadlines,
  parentClassName = undefined,
}) => {
  /**
   * render badge indicator for task deadlines in calendar
   */
  const dateCellRender = (cellDate: Dayjs) => {
    const taskDeadlinesIndicator = deadlines.filter((task) => {
      if (!task.dateDue) return false;
      const taskDate = dayjs(task.dateDue);
      return taskDate.isSame(cellDate, "day");
    });

    if (taskDeadlinesIndicator.length > 0) {
      const taskBadges = taskDeadlinesIndicator.map((task) => {
        if (!task.dateDue) return null;
        const dateDiff = dayjs(task.dateDue).diff(dayjs(), "day");

        let color: BadgeProps["color"] = undefined;
        if (dateDiff < 0) {
          color = "red";
        } else if (dateDiff < 5) {
          color = "yellow";
        } else {
          color = "green";
        }

        return <Badge key={task.id} color={color} style={{ marginRight: 4 }} />;
      });

      return taskBadges.filter((badge) => badge !== null);
    }
  };

  return (
    <div className={parentClassName}>
      <AntdCalendar
        cellRender={dateCellRender}
        onSelect={(date) => {
          const tasksForDate = deadlines.filter((task) => {
            if (!task.dateDue) return false;
            const taskDate = dayjs(task.dateDue);
            return taskDate.isSame(date, "day");
          });

          // TODO: do something with the tasks modal view? or can edit on the task page?
          console.log(tasksForDate);
        }}
      />
    </div>
  );
};

export default Calendar;
