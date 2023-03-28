export default function removeFirst(array) {
  let newArray = [...array];
  newArray.splice(0, 1);
  return newArray;
}
