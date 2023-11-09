import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [accountCheckData, setAccountCheckData] = useState();
  const [dataCashFlow, setDataCashFlow] = useState();

  const generateRandomData = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 10));
  };

  const generateRandomDataForCashFlow = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Nov",
      "Dec",
    ];
    const data = months.map((month) => {
      return {
        month,
        income: Math.floor(Math.random() * (10000 - 5000) + 5000),
        expense: Math.floor(Math.random() * (10000 - 5000) + 5000),
      };
    });
    return data;
  };

  const randomize = () => {
    setAccountCheckData(generateRandomData(10));
    setDataCashFlow(generateRandomDataForCashFlow());
  };

  useEffect(() => {
    setAccountCheckData(generateRandomData(10));
    setDataCashFlow(generateRandomDataForCashFlow());
  }, []);

  return (
    <DataContext.Provider value={{ accountCheckData, dataCashFlow, randomize }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);

  return context;
};
