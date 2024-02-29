import { useState } from "react";

export default function useMultistepForm<T>(steps: T[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  }

  function prevStep() {
    setCurrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  }

  function goToStep(step: number) {
    if (step >= 0 && step < steps.length) {
      setCurrentStepIndex(step);
    }
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    nextStep,
    prevStep,
    goToStep,
    steps,
    isFirstStep: currentStepIndex === 0,
  };
}
