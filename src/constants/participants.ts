import type { IParticipant } from "../types";
import { formatWeekData } from "../utils/common-utils";

export const VIJAY = "Vijay";
export const VAMSHI = "Vamshi";
export const AASHIQ = "Aashiq";
export const ARUN = "Arun";
export const DURGA = "Durga";
export const SHIVA = "Shiva";

export const VJ = "VJ";
export const VK = "VK";
export const ASH = "ASH";
export const MAK = "MAK";
export const DP = "DP";
export const SRK = "SRK";

export const PARTICPANT_VK: IParticipant = {
  name: VAMSHI,
  nickname: VK,
  colorCode: "rgb(232, 61, 144)",
  weekStats: {
    1: {
      weekNo: 1,
      steps: formatWeekData(10087, 10174, 9508, 7892, 9364, 11072, 10814),
    },
    2: {
      weekNo: 2,
      steps: [5958, 9149, 7037, 10119, 9439, 6371, 15503],
    },
    3: {
      weekNo: 3,
      steps: [6759, 12366, 7487, 7231, 8590, 7499, 9538],
    },
    4: {
      weekNo: 4,
      steps: [10906, 10416, 8129, 6056, 5172, 7388, 6872],
    },
    5: {
      weekNo: 5,
      steps: formatWeekData(5335, 8266, 7135, 12060, 11067, 9903, 10525),
    },
    6: {
      weekNo: 6,
      steps: formatWeekData(8393, 4012, 11995, 14487, 8120, 11120, 7125),
    },
    7: {
      weekNo: 7,
      steps: formatWeekData(9250, 5420, 9675, 6615, 4510, 5367, 8398),
    },
    8: {
      weekNo: 8,
      steps: formatWeekData(7148, 11853, 5250, 6868, 9794, 5211, 9506),
    },
    9: {
      weekNo: 9,
      steps: formatWeekData(8018, 5902, 6843, 6590, 7595, 7692, 5641),
    },
    10: {
      weekNo: 10,
      steps: formatWeekData(7246, 7453, 6640, 7550, 7961, 6321, 6602),
    },
    11: {
      weekNo: 11,
      steps: formatWeekData(5660, 5602, 9438, 8930, 11545, 5460, 6459),
    },
    12: { weekNo: 12, steps: formatWeekData() },
  },
};

export const PARTICPANT_VJ: IParticipant = {
  name: VIJAY,
  nickname: VJ,
  colorCode: "rgb(61, 144, 232)",
  weekStats: {
    1: { weekNo: 1, steps: formatWeekData(0, 0, 0, 4738) },
    2: {
      weekNo: 2,
      steps: [4266, 2295, 4754, 4270, 4986, 5713, 1246],
    },
    3: {
      weekNo: 3,
      steps: [4051, 1912, 4777, 4248, 4803, 4688, 3657],
    },
    4: {
      weekNo: 4,
      steps: [5468, 4829, 4647, 4893, 5007, 4618, 3300],
    },
    5: { weekNo: 5, steps: formatWeekData() },
    6: {
      weekNo: 6,
      steps: formatWeekData(3551, 4970, 4624, 6423, 4553, 4816, 5488),
    },
    7: {
      weekNo: 7,
      steps: formatWeekData(4327, 3191, 6458, 6668, 1472, 4667, 4106),
    },
    8: { weekNo: 8, steps: formatWeekData() },
    9: { weekNo: 9, steps: formatWeekData() },
    10: { weekNo: 10, steps: formatWeekData() },
    11: { weekNo: 11, steps: formatWeekData() },
    12: { weekNo: 12, steps: formatWeekData() },
  },
};

export const PARTICPANT_ASH: IParticipant = {
  name: AASHIQ,
  nickname: ASH,
  colorCode: "rgb(144, 61, 232)",
  weekStats: {
    1: { weekNo: 1, steps: formatWeekData(0, 0, 2502, 2522, 0, 0, 8797) },
    2: {
      weekNo: 2,
      steps: [5514, 5299, 2793, 8114, 7698, 7550, 2921],
    },
    3: {
      weekNo: 3,
      steps: [10843, 6215, 7371, 11374, 4042, 7512, 8356],
    },
    4: {
      weekNo: 4,
      steps: [10230, 4713, 6953, 6134, 8817, 10503, 0],
    },
    5: { weekNo: 5, steps: formatWeekData(6951, 8224) },
    6: { weekNo: 6, steps: formatWeekData() },
    7: {
      weekNo: 7,
      steps: formatWeekData(9048, 5992, 7467, 6397, 8940, 11998, 7838),
    },
    8: {
      weekNo: 8,
      steps: formatWeekData(5542, 4028, 7244, 7019, 2366, 5126, 11838),
    },
    9: {
      weekNo: 9,
      steps: formatWeekData(8988, 9551, 10234, 8431, 7381, 8682, 8863),
    },
    10: {
      weekNo: 10,
      steps: formatWeekData(12259, 4796, 6949, 5167, 5587, 7993, 8053),
    },
    11: {
      weekNo: 11,
      steps: formatWeekData(7821, 6140, 8969, 10358, 7561, 7808),
    },
    12: { weekNo: 12, steps: formatWeekData() },
  },
};

export const PARTICPANT_MAK: IParticipant = {
  name: ARUN,
  nickname: MAK,
  colorCode: "rgb(144, 232, 61)",
  weekStats: {
    1: { weekNo: 1, steps: formatWeekData() },
    2: {
      weekNo: 2,
      steps: [5971, 6788, 12756, 6703, 10518, 8583, 12477],
    },
    3: {
      weekNo: 3,
      steps: [16207, 16280, 10883, 20658, 20753, 17933, 16112],
    },
    4: {
      weekNo: 4,
      steps: [3509, 17189, 10285, 7261, 6959, 8629, 4825],
    },
    5: {
      weekNo: 5,
      steps: formatWeekData(17164, 8550, 9292, 8517, 10111, 11868, 14044),
    },
    6: {
      weekNo: 6,
      steps: formatWeekData(9195, 8591, 12019, 13191, 7130, 7305, 7006),
    },
    7: {
      weekNo: 7,
      steps: formatWeekData(6422, 11414, 9049, 7325, 10859, 6265, 7651),
    },
    8: {
      weekNo: 8,
      steps: formatWeekData(7328, 8435, 10383, 6376, 7662, 6789, 6788),
    },
    9: {
      weekNo: 9,
      steps: formatWeekData(3990, 8093, 5581, 9681, 9341, 8043, 7897),
    },
    10: {
      weekNo: 10,
      steps: formatWeekData(3379, 5443, 7462, 5948, 5948, 5881, 6864),
    },
    11: {
      weekNo: 11,
      steps: formatWeekData(4908, 5875, 9849, 7215, 4895, 4885, 4504),
    },
    12: { weekNo: 12, steps: formatWeekData() },
  },
};

export const PARTICPANT_DP: IParticipant = {
  name: DURGA,
  nickname: DP,
  colorCode: "rgb(255, 165, 0)",
  weekStats: {
    1: {
      weekNo: 1,
      steps: formatWeekData(7822, 7365, 8892, 11337, 13469, 11159, 5280),
    },
    2: {
      weekNo: 2,
      steps: [3453, 8364, 7313, 9150, 12739, 6779, 14359],
    },
    3: {
      weekNo: 3,
      steps: [8483, 15860, 16014, 17164, 17918, 17680, 12425],
    },
    4: {
      weekNo: 4,
      steps: [9787, 7269, 18401, 8924, 11534, 7931, 7915],
    },
    5: {
      weekNo: 5,
      steps: formatWeekData(4694, 13430, 11400, 9900, 10376, 14285, 10388),
    },
    6: {
      weekNo: 6,
      steps: formatWeekData(17005, 12895, 15267, 7522, 13800, 4943, 11183),
    },
    7: {
      weekNo: 7,
      steps: formatWeekData(3739, 9434, 12368, 11016, 9015, 11425, 6780),
    },
    8: {
      weekNo: 8,
      steps: formatWeekData(5272, 7297, 6510, 11838, 13247, 5814, 4209),
    },
    9: {
      weekNo: 9,
      steps: formatWeekData(11530, 11706, 10582, 13636, 13725, 14384, 8238),
    },
    10: {
      weekNo: 10,
      steps: formatWeekData(13948, 5008, 18204, 7176, 18082, 15955, 11027),
    },
    11: {
      weekNo: 11,
      steps: formatWeekData(7428, 14302, 16077, 9634, 4283, 8491, 11977),
    },
    12: { weekNo: 12, steps: formatWeekData() },
  },
};

export const PARTICPANT_SRK: IParticipant = {
  name: SHIVA,
  nickname: SRK,
  colorCode: "yellow",
  weekStats: {
    1: {
      weekNo: 1,
      steps: formatWeekData(),
    },
    2: {
      weekNo: 2,
      steps: formatWeekData(),
    },
    3: {
      weekNo: 3,
      steps: formatWeekData(),
    },
    4: {
      weekNo: 4,
      steps: formatWeekData(),
    },
    5: {
      weekNo: 5,
      steps: formatWeekData(),
    },
    6: {
      weekNo: 6,
      steps: formatWeekData(),
    },
    7: {
      weekNo: 7,
      steps: formatWeekData(),
    },
    8: {
      weekNo: 8,
      steps: formatWeekData(13490, 12894, 13260, 13240, 18173, 13249, 11713),
    },
    9: { weekNo: 9, steps: formatWeekData() },
    10: { weekNo: 10, steps: formatWeekData() },
    11: { weekNo: 11, steps: formatWeekData() },
    12: { weekNo: 12, steps: formatWeekData() },
  },
};

export const PARTICIPANTS_DATA: IParticipant[] = [
  PARTICPANT_ASH,
  PARTICPANT_DP,
  PARTICPANT_MAK,
  PARTICPANT_VJ,
  PARTICPANT_VK,
  PARTICPANT_SRK,
];

export const PARTICIPANT_NICK_NAMES = [VK, DP, ASH, VJ, MAK, SRK];
