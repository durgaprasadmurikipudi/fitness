import type {
  IDashboardScreenData,
  IParticipant,
  IParticipantDataForAGivenWeek,
  IParticipantsDataForAGivenWeek,
} from "../types";
import { getDefaultNickNames } from "../utils/app-utils";
import {
  forEachOverRange,
  formatToDateString,
  getStartDateForWeekNo,
} from "../utils/common-utils";

export function getValidWeekRange(
  particpantsData: IParticipant[]
): [number, number] {
  let start = Number.POSITIVE_INFINITY,
    end = Number.NEGATIVE_INFINITY;

  particpantsData.forEach((participant) => {
    const participantWeekNos = Object.keys(participant.weekStats).map((key) =>
      Number(key)
    );

    start = Math.min(start, ...participantWeekNos);
    end = Math.max(end, ...participantWeekNos);
  });

  return [start, end];
}

function getParticipantDataForWeek(
  participant: IParticipant | undefined,
  weekNo: number
): IParticipantDataForAGivenWeek {
  if (!participant) {
    return { weekStats: {}, totalSteps: 0, highestSteps: 0 };
  }

  const participantsDataForAWeek: IParticipantDataForAGivenWeek = {
    weekStats: {},
    totalSteps: 0,
    highestSteps: 0,
  };
  const weekDate = getStartDateForWeekNo(weekNo);

  forEachOverRange(0, 6, (day) => {
    weekDate.setDate(weekDate.getDate() + 1);

    participantsDataForAWeek.weekStats[formatToDateString(weekDate)] =
      participant.weekStats[weekNo].steps[day];
    participantsDataForAWeek.totalSteps +=
      participant.weekStats[weekNo].steps[day];
    participantsDataForAWeek.highestSteps =
      participantsDataForAWeek.highestSteps >
      participant.weekStats[weekNo].steps[day]
        ? participantsDataForAWeek.highestSteps
        : participant.weekStats[weekNo].steps[day];
  });

  return participantsDataForAWeek;
}

export function getParticipantsDataForWeek(
  participantsData: IParticipant[],
  weekNo: number
): IDashboardScreenData {
  const participantsDataForWeek: IParticipantsDataForAGivenWeek =
    getDefaultNickNames().reduce((acc, participantName) => {
      return {
        ...acc,
        [participantName]: getParticipantDataForWeek(
          participantsData.find(
            (participant) => participant.nickname === participantName
          ),
          weekNo
        ),
      };
    }, {});
  const highestStepsInTheWeek = getHighestStepsInThatWeek(
    participantsDataForWeek
  );

  return {
    weekNo,
    participantsDataForWeek,
    highestStepsInTheWeek,
  };
}

export function getWinnerStepsCount(
  dashboardData: IDashboardScreenData
): number {
  let highestSteps = 0;

  getDefaultNickNames().forEach((nickname) => {
    if (
      dashboardData.participantsDataForWeek[nickname].totalSteps > highestSteps
    ) {
      highestSteps = dashboardData.participantsDataForWeek[nickname].totalSteps;
    }
  });

  return highestSteps;
}

function getHighestStepsInThatWeek(
  participantsDataForAGivenWeek: IParticipantsDataForAGivenWeek
): number {
  let highestSteps = 0;

  getDefaultNickNames().forEach((nickname) => {
    if (participantsDataForAGivenWeek[nickname].highestSteps > highestSteps) {
      highestSteps = participantsDataForAGivenWeek[nickname].highestSteps;
    }
  });

  return highestSteps;
}
