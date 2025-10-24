export const TaskPriority = {
    NORMAL: "normal",
    MINOR: "minor",
    HIGH: "high",
    IMPORTANT: "important",
  } as const;

export type TaskPriority = typeof TaskPriority[keyof typeof TaskPriority];