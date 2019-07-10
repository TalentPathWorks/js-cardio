// 🏃🏼🏊🏼🏋🏼🏄🏼

const people = [
  'Faber Guerreau',
  'Gilbertine Stichall',
  'Cristina Cuckoo',
  'Johnette Chatelot',
  'Trish Mayou',
  'Ruth Connell',
  'Hamid Elsegood',
  'Thorstein Woodward',
  'Bethena Porte',
  'Nelle Durek',
  'Bastien Leyrroyd',
  'Albie Tranfield',
  'Bryce Temprell',
  'Darya Chinery',
  'Rea Matoshin',
  'Tommie Benda',
  'Lowell Trowel',
  'Wayne Claughton',
  'Teena Bansal',
  'Basile Phonix',
];
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
    // first character of the second item of the names array
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
function sortByFirstName(people) {}

/**
 * Sorts `people` by last name
 * @param {string[]} people
 * @returns {string[]} sorted array
 */
function sortByLastName(people) {}

/**
 * Counts all the characters in the people array (including spaces)
 * @param {Array} people Array of names
 * @return Number of characters
 */
function countTotalCharacters(people) {}

/**
 * Returns `true` if everyone in `people` has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function everyoneHasLetter(people, letter) {}

/**
 * Returns `true` if at least one person has `letter` in their name.
 * Returns `false` otherwise
 * @param {string[]} people
 * @param {string} letter
 * @returns {boolean}
 */
function someoneHasLetter(people, letter) {}

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
