export async function getCharacterById(id) {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const response = await fetch(url);
  const character = await response.json();
  return character;
}
export async function getCharacters() {
  const url = `https://rickandmortyapi.com/api/character/`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
export async function getCharactersbyName(name) {
  const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
  const response = await fetch(url);
  const names = await response.json();
  return names.results;
}
