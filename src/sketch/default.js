// default 매개변수
const sayHello = (name = "Guest") => `${name}님 안녕하세요!`;

// object의 spread 연산자
const person = { name: "트럼프" };
const president = { person, age: 77 }; // { person: {name: "트럼프"}, age: 77}
const president1 = { ...person, age: 77 }; // {name: "트럼프", age:  77}

const student = { name: "alice", age: 25 };
const barista = { ...student, wage: 11000 };

const test = { ...student, age: 30 }; // {name:"alice", age:30}
const test1 = { age: 30, ...student }; // {name:"alice", age:25}

const lunch = {
  lunchMain: "크리스피버거",
  lunchSide: "감자튀김",
  lunchDrink: "제로콜라",
};
const { lunchMain, lunchSide } = lunch;

const dinner = {
  dinnerMain: "안창비프머쉬룸",
  dinnerSide: "쿠키",
  dinnerDrink: "스프라이트",
};
const { dinnerSide, dinnerDrink } = dinner;

const todayFood = { ...lunch, ...dinner };
