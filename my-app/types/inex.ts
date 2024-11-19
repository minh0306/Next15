export type BaseQueryParams = Partial<{
  page: number;
  perPage: number;
  orderBy: string;
  q: string;
}>;

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
