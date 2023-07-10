import Header from "../components/Header";
import DogContainer from "../components/DogContainer";
import Footer from "../components/Footer";
import { dogs } from "../src/data.js";
import { useEffect, useState } from "react";

export default function App() {
  const [currentDogIndex, setCurrentDogIndex] = useState(0)
  const [currentDog, setCurrentDog] = useState(dogs[currentDogIndex])

  useEffect(() => {
    setCurrentDog(dogs[currentDogIndex]);
  }, [currentDogIndex]);

  useEffect(() => {
    if (currentDog.hasBeenSwiped) {
      const nextDogIndex = currentDogIndex + 1;
      if (nextDogIndex < dogs.length) {
        setTimeout(() => {
          setCurrentDogIndex(nextDogIndex);
        }, 1500)
      }
    }
  }, [currentDog]);

  console.log(currentDog);

  return (
    <div className="container">
      <Header />
      <DogContainer currentDog={currentDog} setCurrentDog={setCurrentDog} />
      <Footer currentDog={currentDog} setCurrentDog={setCurrentDog} />
    </div>
  );
}
