/**
 * Problem - https://www.codingninjas.com/codestudio/problems/hotel-floors_983624?topList=top-array-coding-interview-questions
 * You are the receptionist at a hotel which has 10 floors, numbered from 0 to 9 and each floor has 26 rooms named from ‘A’ to ‘Z’. Being a receptionist your task is to handle booking queries.
 * You get booking queries in the form of strings of size 3 where 1st character is ‘+’ means room is booked, or ‘-’ means room is freed. Second character represents the floor of the room i.e, ‘0’ to ‘9’. Third character represents the room name i.e, ‘A’ to ‘Z’.
 */

const countCoint = (array) => {
  if (array.length < 1) {
    return 0;
  }
  let count = array.reduce((acc, curr) => {
    if (curr.charAt(0) === "+") {
      acc += 1;
      return acc;
    }
    if (curr.charAt(0) === "-") {
      return acc;
    }
  }, 0);
  return count;
};

// driver code
let bookingArr = ["+1A", "+3E", "+4F", "-3A", "-3B", "+6F", "+9D", "-0A"];

console.log(countCoint(bookingArr));
