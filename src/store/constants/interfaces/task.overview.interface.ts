import type { ActivityLog } from "./activity-log.interface";
import type { Task } from "./task.interface";

/**
 * Dashboard tasks overview
 *
 * expects tasks with due date to be
 * displayed in the calendar.
 *
 * also activity logs to display in
 * recent activities.
 *
 */
export interface TaskOverview {
  tasks: Task[];
  activityLogs: ActivityLog[];
  // contents may change in the future
  totalTasks: number;
  pendingTasksCount: number;
}

export interface TaskOverviewQuery {
  calendar_month: number;
}
