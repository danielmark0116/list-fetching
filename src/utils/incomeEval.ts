import { incomeData } from "../types/incomeData";
import moment from "moment";

export const totalIncome = (data: incomeData[]) => {
  const incomes = data.map((item: incomeData) => parseFloat(item.value));
  const total = incomes.reduce((a: number, b: number) => a + b);

  return total.toFixed(2);
};

export const averageIncome = (data: incomeData[]) => {
  const incomes = data.map((item: incomeData) => parseFloat(item.value));
  const total = incomes.reduce((a: number, b: number) => a + b);
  const average = total / incomes.length;

  return average.toFixed(2);
};

export const lastMonthIncome = (data: incomeData[]) => {
  const lastMonth = moment()
    .subtract(1, "month")
    .format("MMMM");

  const lastMonthData = data.filter(
    (item: incomeData) =>
      moment(new Date(item.date).toLocaleDateString(), "DD.MM.YYYY").format(
        "MMMM"
      ) === lastMonth
  );

  const totalLastMonthIncome = totalIncome(lastMonthData);

  return totalLastMonthIncome;
};
