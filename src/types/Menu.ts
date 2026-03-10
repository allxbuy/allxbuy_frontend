export type Menu = {
  id: number;
  title: string;
  // every menu entry should have a path so that Link.href can rely on it
  path: string;
  newTab: boolean;
  submenu?: Menu[];
};
