export interface INavigationItem {
  route: string;
  title: string;
  icon: any;
  description: string;
  shortName: string;
  childrens?: INavigationItem[];
}
