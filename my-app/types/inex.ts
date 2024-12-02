export type BaseQueryParams = {
  page: number;
  itemPerPage: number;
  orderBy: string;
  searchBy: string;
  orderByDirection: string;
  search: string;
  categoryCode: string;
};

export enum ActionType {
  Add = "Add",
  Edit = "Edit",
  Archive = "Archive",
  Delete = "Delete",
}

export type BaseModalProps = {
  title: string;
  isOpen: boolean;
  actionType?: ActionType;
  onOpenChange: (isOpen: boolean) => void;
};
