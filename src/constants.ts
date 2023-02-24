const BALLOONS = [
  {
    name: "speech",
    emoji: "💬",
    unified: "1f4ac",
  },
  {
    name: "leftSpeech",
    emoji: "🗨️",
    unified: "1f5e8",
  },
  {
    name: "rightAnger",
    emoji: "🗯️",
    unified: "1f5ef",
  },
  {
    name: "thought",
    emoji: "💭",
    unified: "1f4ad",
  },
] as const;

const FACES = [
  {
    name: "grinning",
    emoji: "😀",
    unified: "1f600",
  },
  {
    name: "laughing",
    emoji: "😆",
    unified: "1f606",
  },
  {
    name: "cry",
    emoji: "😢",
    unified: "1f622",
  },
  {
    name: "angry",
    emoji: "😠",
    unified: "1f620",
  },
] as const;

export const BALLOON_UNIFIES = BALLOONS.map((el) => el.unified);
export const FACE_UNIFIES = FACES.map((el) => el.unified);
