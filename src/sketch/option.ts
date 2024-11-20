type User = {
  name: string;
  age?: number; // ? 있을수도 있고 없을수도 있음
  gender: "male" | "female";
};

const user1 = {
  name: "김철수",
  age: 22,
  gender: "male",
};

const user2: User = {
  name: "전지현",
  age: 21,
  gender: "female",
};

type Coffee = {
  name: string;
  price: number;
  shots?: number;
};

export const userCoffee: Coffee = {
  name: "아아",
  price: 2500,
};
