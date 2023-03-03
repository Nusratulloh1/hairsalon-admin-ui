export type OrgType = "factory" | "showroom";

export interface IOrganization {
  id: string;
  parent_id?: string;
  name: string;
  stir?: string;
  address?: string;
  created_at?: Date;
  is_active: boolean;
  type: OrgType;
  children: IOrganization[];
}
