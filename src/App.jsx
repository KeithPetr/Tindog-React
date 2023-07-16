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
  const [getList, setGetList] = useState(false);
  const [isLastDogProfile, setIsLastDogProfile] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    setCurrentDog(dogs[currentDogIndex]);
  }, [currentDogIndex]);

  useEffect(() => {
    if (currentDog.hasBeenSwiped) {
      setIsWaiting(true)
      const nextDogIndex = currentDogIndex + 1;
      if (nextDogIndex < dogs.length) {
        setTimeout(() => {
          setCurrentDogIndex(nextDogIndex);
          setIsWaiting(false)
        }, 1500);
      } else {
        setTimeout(() => {
          setIsLastDogProfile(true);
        }, 1000);
      }
    }
  }, [currentDog]);

  console.log(currentDog);

  function getLikedList() {
    setGetList(true);
  }

  const likedList = likedDogs.map((dog) => {
    return <LikedList key={dog.name} dog={dog} />;
  });

  return (
    <div className="container">
      <Header
        getLikedList={getLikedList}
        setGetList={setGetList}
        likedDogs={likedDogs}
      />
      {getList ? (
        <div className="liked-list">
          <h1>Liked Profiles</h1>
          {likedList}
        </div>
      ) : (
        <>
          <DogContainer
            currentDog={currentDog}
            setCurrentDog={setCurrentDog}
            isLastDogProfile={isLastDogProfile}
          />
          <Footer
            currentDog={currentDog}
            setCurrentDog={(dog) => setCurrentDog(dog)}
            setLikedDogs={setLikedDogs}
            isLastDogProfile={isLastDogProfile}
            isWaiting={isWaiting}
          />
        </>
      )}
    </div>
  );
}
