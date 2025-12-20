import { TOURNAMENT_START_DATE } from "../constants";

export function mapOverRange<T>(
  start: number,
  end: number,
  callback: (val: number) => T
): T[] {
  const result = [];

  for (let i = start; i < end + 1; i++) {
    result.push(callback(i));
  }

  return result;
}

export function forEachOverRange(
  start: number,
  end: number,
  executant: (val: number) => void
) {
  for (let i = start; i < end + 1; i++) {
    executant(i);
  }
}

export function formatWeekData(
  day1?: number,
  day2?: number,
  day3?: number,
  day4?: number,
  day5?: number,
  day6?: number,
  day7?: number
): [number, number, number, number, number, number, number] {
  return [
    day1 || 0,
    day2 || 0,
    day3 || 0,
    day4 || 0,
    day5 || 0,
    day6 || 0,
    day7 || 0,
  ];
}

export function getStartDateForWeekNo(weekNo: number): Date {
  const weekStartDate = new Date(TOURNAMENT_START_DATE);

  weekStartDate.setDate(weekStartDate.getDate() + (weekNo - 1) * 7);

  return weekStartDate;
}

export function getEndDateForWeekNo(weekNo: number): Date {
  const weekStartDate = new Date(TOURNAMENT_START_DATE);

  weekStartDate.setDate(weekStartDate.getDate() + (weekNo - 1) * 7 + 6);

  return weekStartDate;
}

export function formatToDateString(date: Date) {
  return date.toISOString().split("T")[0];
}
