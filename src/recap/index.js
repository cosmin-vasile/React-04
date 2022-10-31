fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    const { status } = response;
    if (status === 200) {
      return response.json();
    }
  })
  .then((response) => {
    //console.log(response);
  });

const getCharacterList = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  try {
    const { status } = response;
    if (status === 200) {
      const body = await response.json();
      console.log(body);
    }
  } catch (error) {
    throw new Error(error);
  }
};

getCharacterList();

const wheels = 5;
const doors = 5;
const masinaMea = {
  wheels,
  doors,
};
