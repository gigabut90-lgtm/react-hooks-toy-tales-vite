
import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import ToyForm from "./ToyForm";

function ToyContainer() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r => {
        if (!r.ok) {
          throw new Error("Cannot fetch");
        }
        return r.json();
      })
      .then(toys => setToys(toys))
      .catch(err => console.log(err));
  }, []);

  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  return (
    <div id="toy-collection">
      <ToyForm onAddToy={handleAddToy} />

      {toys.map(toy => (
        <ToyCard key={toy.id} toy={toy} />
      ))}
    </div>
  );
}

export default ToyContainer;
