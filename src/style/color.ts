export const colorObj = {
  grey90: "#1e2c35",
  grey80: "#37434c",
  grey70: "#505b62",
};

// key 값은 red & pink이고 value 값은 string 타입잡기
const obj3: { [key in "red" | "pink"]: string } = {
  red: "#c0392b",
  pink: "#f1c40f",
};
