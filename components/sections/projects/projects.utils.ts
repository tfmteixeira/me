export const getProgressiveMonthYear = (progress: number) => {
  const resultDate = getProgressiveDate(progress);

  return resultDate.toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  });
};

export const getProgressiveDate = (progress: number) => {
  const startDate = new Date(2017, 0);
  const currentDate = new Date();

  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    currentDate.getMonth() -
    startDate.getMonth();

  const monthsProgress = Math.round(totalMonths * progress);

  const resultDate = new Date(startDate);
  resultDate.setMonth(startDate.getMonth() + monthsProgress);
  resultDate.setHours(1, 0, 0, 0);
  return resultDate;
};

export const getMonthYear = (date?: string) => {
  if (!date) {
    return "present";
  }
  const resultDate = new Date(date);
  return resultDate.toLocaleString("en-GB", {
    month: "long",
    year: "numeric",
  });
};

export const isInDateRange = (
  actualDate: Date,
  startDate: string,
  endDate?: string
) => {
  const start = new Date(startDate);
  const actual = new Date(actualDate);

  if (actual >= start) {
    if (!endDate) {
      return true;
    }
    const end = new Date(endDate);
    return actual < end;
  }
  return false;
};

export const isPast = (
  date1: Date | string | undefined,
  date2: Date | string
) => {
  if (!date1) {
    return false;
  }
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  return d1 <= d2;
};
