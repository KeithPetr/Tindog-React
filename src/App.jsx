import Header from "../components/Header";
import DogContainer from "../components/DogContainer";
import Footer from "../components/Footer";
import { dogs } from "../src/data.js";
import { useEffect, useState } from "react";
import LikedList from "../components/LikedList";

export default function App() {
  const [currentDogIndex, setCurrentDogIndex] = useState(0);
  const [currentDog, setCurrentDog] = useState(dogs[currentDogIndex]);
  const [likedDogs, setLikedDogs] = useState([]);
  const [allSwiped, setAllSwiped] = useState(false);

  useEffect(() => {
    setCurrentDog(dogs[currentDogIndex]);
  }, [currentDogIndex]);

  useEffect(() => {
    if (currentDog.hasBeenSwiped) {
      const nextDogIndex = currentDogIndex + 1;
      if (nextDogIndex < dogs.length) {
        setTimeout(() => {
          setCurrentDogIndex(nextDogIndex);
        }, 1500);
      } else {
        setTimeout(() => {
          setAllSwiped(true)
        }, 1500);
      }
    }
  }, [currentDog]);

  // useEffect(() => {
  //   if(dogs.every((dog) => dog.hasBeenSwiped)) {
  //     setAllSwiped(true)
  //   } 
  // }, [dogs]);

  console.log(allSwiped);
  console.log(currentDog)

  const likedList = likedDogs.map((dog) => {
    return <LikedList key={dog.name} dog={dog} />;
  });

  return (
    <div className="container">
      {allSwiped ? (
        likedList
      ) : (
        <>
          <Header />
          <DogContainer currentDog={currentDog} setCurrentDog={setCurrentDog} />
          <Footer
            currentDog={currentDog}
            setCurrentDog={(dog) => setCurrentDog(dog)}
            setLikedDogs={setLikedDogs}
          />
        </>
      )}
    </div>
  );
}
