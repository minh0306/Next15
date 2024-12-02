"use client";
import { BaseQueryParams } from "@/types/inex";
import { createContext, useContext, useState } from "react";

export interface ParamsContextType {
  params: BaseQueryParams;
  addParams: (newParams: BaseQueryParams) => void;
  updateParams: (updatedParams: BaseQueryParams) => void;
}
const ParamsContext = createContext<ParamsContextType | undefined>(undefined);
export const QueryParamsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const defaultParams = {
    page: 1,
    itemPerPage: 6,
    orderBy: "",
    searchBy: "",
    categoryCode: "",
    search: "",
    orderByDirection: "asc",
  };
  const [params, setParams] = useState<BaseQueryParams>(defaultParams);
  const addParams = (newParams: BaseQueryParams) => {
    setParams((prevParams) => ({ ...prevParams, ...newParams }));
  };
  const updateParams = (updatedParams: BaseQueryParams) => {
    setParams((prevParams) =>
      Object.entries(updatedParams).reduce(
        (acc, [key, value]) => {
          const typedKey = key as keyof BaseQueryParams;
          if (typedKey in acc && typedKey !== undefined) {
            acc[typedKey] = value;
          }
          return acc;
        },
        { ...prevParams } as BaseQueryParams
      )
    );
  };
  return (
    <ParamsContext.Provider value={{ params, addParams, updateParams }}>
      {children}
    </ParamsContext.Provider>
  );
};
export const useParamsContext = (): ParamsContextType => {
  const context = useContext(ParamsContext);
  if (!context) {
    throw new Error(
      "useParamsContext must be used within a QueryParamsProvider"
    );
  }
  return context;
};
