console.log("hi from front");

const getProduct = async () => {
  await fetch(`http://localhost:8000/cia/yra/mano/routas`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      return response.json();
    })
    .then((products) => {
      console.log(products);
    })
    .catch((error) => {
      console.error("Error", error.message);
    });
  //   console.log(result);

  //   const data = await result.json();
  //   console.log(data);
};

getProduct();
