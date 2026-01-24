import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ChangeEvent,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import type { IDashboardScreenData } from "../../types";
import { getParticipantsDataForWeek } from "../../services/dashboard";
import { PARTICIPANTS_DATA } from "../../constants";
import { getEndDateForWeekNo, getStartDateForWeekNo } from "../../utils";

interface IDashboardPageContext {
  startWeekNo: number;
  endWeekNo: number;
  selectedWeek: number;
  weekStartDate: Date;
  weekEndDate: Date;
  dashboardScreenData: IDashboardScreenData;
  handleSelectedWeek: (e: ChangeEvent<HTMLSelectElement>) => void;
  setSelectedWeek: Dispatch<SetStateAction<number>>;
}

const dashboardScreenData = getParticipantsDataForWeek(PARTICIPANTS_DATA, 1);

const defaultIDashboardPageContext: IDashboardPageContext = {
  startWeekNo: 1,
  endWeekNo: 14,
  selectedWeek: 1,
  weekStartDate: new Date(),
  weekEndDate: new Date(),
  dashboardScreenData,
  handleSelectedWeek: () => {},
  setSelectedWeek: () => {},
};

export const DashboardContext = createContext<IDashboardPageContext>(
  defaultIDashboardPageContext
);

interface IProps {
  children: ReactNode;
}

export const DashboardPageContext = (props: IProps) => {
  const { children } = props;
  const [selectedWeek, setSelectedWeek] = useState(1);
  const handleSelectedWeek = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedWeek(Number(e.target.value));
    },
    []
  );

  const dashboardPageContext = useMemo(() => {
    return {
      ...defaultIDashboardPageContext,
      selectedWeek,
      weekStartDate: getStartDateForWeekNo(selectedWeek),
      weekEndDate: getEndDateForWeekNo(selectedWeek),
      dashboardScreenData: getParticipantsDataForWeek(
        PARTICIPANTS_DATA,
        selectedWeek
      ),
      handleSelectedWeek,
      setSelectedWeek,
    };
  }, [selectedWeek]);

  return (
    <DashboardContext.Provider value={dashboardPageContext}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardPageContext = () => {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error(
      "useDashboardPageContext must be used within DashboardPageContext"
    );
  }

  return context;
};
