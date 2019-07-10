// 🏃🏼🏊🏼🏋🏼🏄🏼

/**
 * Filters people array based on total number of letters in their name (including spaces).
 * Filter if name is strictly greater than length
 *
 * @param {string[]} people
 * @param {number} length
 * @returns {string[]} filtered array
 */

function filterByLength(people, length) {
  const list = people.filter(person => person.length > length)
  return list;
}

/**
 * Returns an array of every nth person.
 * Note that counting starts at 0,
 * so the returned array will always include (at least) the first person.
 *
 * @param  {string[]} people
 * @param  {number} n
 * @returns {string[]}
 *
 * @example
 *    everyNPerson(['Matt', 'Kim', 'Kanye', 'Obama', 'Hans'], 2)
 *    // → ['Matt', 'Kanye', 'Hans']
 */
function everyNPerson(people, n) {
  if(n === 0) return people;

  const list = people.filter((person)=>{
    return people.indexOf(person) % n === 0
  })
  return list;
}
/**
 * Returns an array where each entry is the person's intials
 * @param {string[]} people
 * @returns {string[]} intials array
 *
 * @example
 *    initials(['Kanye West', 'Barack Obama'])
 *    // → ['KW', 'BO']
 */
function initials(people) {
  const list = people.map((person)=>{
    const name = person.split(" ");
    // Takes the first character of the first item in the name array and concats it to the
    // first character of the second item of the names array. Ex. ["FirstName","LastName"]
    const firstCharacters = name[0][0]+ name[1][0];
    return firstCharacters;
  })
  return list;
}
/**
 * Returns an array where every person is prepended with their position in the array
 * @param {string[]} people
 * @returns {string[]}
 *
 * @example
 *    peopleWithPosition(['Kanye', 'Barack'])
 *    // → ['1. Kanye', '2. Barack']
 */
function peopleWithPosition(people) {
  const list = people.map((person)=>{
      const position = people.indexOf(person);
      return `${position}: ${person}`;
    });
  return list;
}

/**
 * Sorts `people` by first name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByFirstName(people) {
  
  const unorderedList = people;
  return unorderedList.sort();

}

/**
 * Sorts `people` by last name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByLastName(people) {
  const unorderedList = people.map((person)=>{
    return person.split(" ");
  })
  const orderedList = unorderedList.sort((firstElement,secondElement)=>{
    // compare the lastnames of each element, returns 0 if equal (no change)
      if(firstElement[1] === secondElement[1])
          return 0;
      else 
      // if firstElement is smaller than secondElement then (-1) sort firstElement lower than secondElement
      // Else sort secondElement higher than firstElement (1)
        return (firstElement[1] < secondElement[1]) ?  -1:1
  });
  // Concatonate firstname and lastname
  return orderedList.map((person)=>{
    return `${person[0]} ${person[1]}`;
  });
}
/**
 * Counts all the characters in the people array (including spaces)
 * @param {Array} people Array of names
 * @return Number of characters
 */
function countTotalCharacters(people) {
  let counter = 0;
  people.forEach((person)=>{
    counter += person.length;
  })
  return counter;
}
/**
 * Returns `true` if everyone in `people` has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function everyoneHasLetter(people, letter) {
  let doesContainLetter = false;
  doesContainLetter = people.map((person)=>{
    if(person.includes(letter))
      return true;
  })
  return doesContainLetter.includes(true) ? true: false;
}
/**
 * Returns `true` if at least one person has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function someoneHasLetter(people, letter) {
  let doesContainLetter = false;
  doesContainLetter = people.map((person)=>{
    if(person.includes(letter))
      return true;
  })
  return doesContainLetter.includes(true) ? true: false;
}

module.exports = {
  filterByLength,
  everyNPerson,
  initials,
  sortByFirstName,
  sortByLastName,
  countTotalCharacters,
  everyoneHasLetter,
  someoneHasLetter,
  peopleWithPosition,
};
