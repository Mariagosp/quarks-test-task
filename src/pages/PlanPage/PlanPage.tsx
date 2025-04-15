import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { PopUp } from "../../components/PopUp/PopUp";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";
import { Answer } from "../../types/Answer";
import { GoalKey } from "../../types/GoalKey";
import { getPopUpTitle } from "../../utils/getPopUpTitle";
import { goals } from "../../utils/goals";
import "./PlanPage.scss";

import { useEffect, useState } from "react";
import { ReviewsSwiper } from "../../components/ReviewsSwiper/ReviewsSwiper";

export const PlanPage = () => {
  const [progress, setProgress] = useState<Record<GoalKey, number>>({
    goals: 0,
    growth: 0,
    content: 0,
    challenges: 0,
  });

  const [paused, setPaused] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentBarIndex, setCurrentBarIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});

  const navigate = useNavigate();

  useEffect(() => {
    if (paused || showPopUp) {
      return;
    }

    const interval = setInterval(() => {
      if (currentBarIndex >= goals.length) {
        clearInterval(interval);
        return;
      }
      const currentBarKey = goals[currentBarIndex]?.key;

      setProgress((prev) => {

        if (!currentBarKey) {
          clearInterval(interval);
          return prev;
        }

        const newProgress = { ...prev };
        newProgress[currentBarKey] = Math.min(prev[currentBarKey] + 2, 100);

        if (newProgress[currentBarKey] === 50) {
          setPaused(true);
          setShowPopUp(true);
        }

        if (newProgress[currentBarKey] === 100 && currentBarIndex < goals.length - 1) {
          setCurrentBarIndex(currentBarIndex + 1);
        }

        return newProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [paused, showPopUp, currentBarIndex]);

  const handleContinue = (answer: Answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [goals[currentBarIndex].key]: answer,
    }));

    setPaused(false);
    setShowPopUp(false);
  }

  const popUpTitle = getPopUpTitle(goals[currentBarIndex]?.key);

  if (progress.challenges === 100) {
    console.log(userAnswers);
    navigate('/');
  }

  return (
    <>
      <div className="container">
        <div className="plan-page">
          <Header />
          <h1 className="section__title">
            We are crafting your personalized plan
          </h1>
          <ProgressBar goals={goals} progress={progress} />
          <span className="reviews__wrapper">
            <ReviewsSwiper />
          </span>
        </div>
      </div>

      {showPopUp 
        && (
        <>
          <div className="overlay"></div>
          <PopUp title={popUpTitle} onContinue={handleContinue} />
        </>
      )}
    </>
  );
};
