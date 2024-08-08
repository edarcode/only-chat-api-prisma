export const ROLE = { boss: "BOSS", client: "CLIENT" } as const;
export type Role = (typeof ROLE)[keyof typeof ROLE];
