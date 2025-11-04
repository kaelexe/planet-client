export interface ActivityLog {
  id: number;
  entityType: string;
  entityId: number;
  action: string;
  actorType: string;
  actorId: number;
  oldValues?: Record<string, any>;
  newValues?: Record<string, any>;
  createdAt: Date;
}

// query parameters for fetching activity logs
// exempt id, oldValues, newValues from query
export interface ActivityLogsQuery
  extends Omit<ActivityLog, "id" | "oldValues" | "newValues"> {
  dateFrom?: Date;
  dateTo?: Date;
}

// activity log creation data
export interface CreateActivityLogData
  extends Omit<ActivityLog, "id" | "createdAt"> {}
