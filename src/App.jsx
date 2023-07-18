import Header from "../components/Header";
import DogContainer from "../components/DogContainer";
import Footer from "../components/Footer";
import { dogs } from "../src/data.js";
import { useEffect, useState } from "react";
import LikedList from "../components/LikedList";
import Messages from "../components/Messages";

export default function App() {
  const [currentDogIndex, setCurrentDogIndex] = useState(0);
  const [currentDog, setCurrentDog] = useState(dogs[currentDogIndex]);
  const [likedDogs, setLikedDogs] = useState([]);
  const [getList, setGetList] = useState(false);
  const [isLastDogProfile, setIsLastDogProfile] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [getMessages, setGetMessages] = useState(false);
  const [messagesArray, setMessagesArray] = useState([]);
  const [messageArea, setMessageArea] = useState(false);

  function navigateToMessages(profile) {
    const profileExists = messagesArray.some(
      (message) => message.name === profile.name
    );
    if (!profileExists) {
      setMessagesArray((prevData) => [...prevData, profile]);
    }
    setGetList(false);
    setGetMessages(true);
  }

  useEffect(() => {
    setCurrentDog(dogs[currentDogIndex]);
  }, [currentDogIndex]);

  useEffect(() => {
    if (currentDog.hasBeenSwiped) {
      setIsWaiting(true);
      const nextDogIndex = currentDogIndex + 1;
      if (nextDogIndex < dogs.length) {
        setTimeout(() => {
          setCurrentDogIndex(nextDogIndex);
          setIsWaiting(false);
        }, 1500);
      } else {
        setTimeout(() => {
          setIsLastDogProfile(true);
        }, 1000);
      }
    }
  }, [currentDog]);

  function getLikedList() {
    setGetList(true);
    setGetMessages(false);
  }

  const likedList = likedDogs.map((dog) => {
    return (
      <LikedList
        key={dog.name}
        dog={dog}
        navigateToMessages={navigateToMessages}
      />
    );
  });

  function viewMessages() {
    setGetMessages(true);
    setGetList(false);
    setMessageArea(false);
  }

  return (
    <div className="container">
      <Header
        getLikedList={getLikedList}
        setGetList={setGetList}
        likedDogs={likedDogs}
        viewMessages={viewMessages}
        setGetMessages={setGetMessages}
      />
      {getMessages ? (
        <Messages
          messagesArray={messagesArray}
          messageArea={messageArea}
          setMessageArea={setMessageArea}
        />
      ) : (
        <>
          {getList ? (
            <div className="liked-list">
              {likedDogs.length > 0 ? (
                <>
                  <h1>Liked Profiles</h1>
                  {likedList}
                </>
              ) : (
                <h1>No Liked Profiles</h1>
              )}
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
        </>
      )}
    </div>
  );
}
