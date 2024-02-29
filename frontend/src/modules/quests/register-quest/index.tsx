import { IconLabelButton } from "@/components/buttons";
import useMultistepForm from "@/hooks/use-multistep-form";
import { RiArrowRightSLine, RiCheckLine } from "@remixicon/react";
import classNames from "classnames";
import SelectActivity from "./steps/select-activity";
import SelectTask from "./steps/select-task";
import CreateQuest from "./steps/create-quest";
import { Formik } from "formik";

export default function RegisterQuest() {
  const registerQuestSteps = [
    {
      header: "Choose a activity",
      component: <SelectActivity />,
      button: "Choose Task",
    },
    {
      header: "Choose tasks",
      component: <SelectTask />,
      button: "Create Quest",
    },
    {
      header: "Review and Register Quest",
      component: <CreateQuest />,
      button: "Finish",
    },
  ];

  const { currentStepIndex, goToStep, isFirstStep, nextStep, prevStep, step } =
    useMultistepForm(registerQuestSteps);
  return (
    <Formik
      initialValues={{ acitivity: [], task: [] }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="p-10 h-full">
        <div className="w-full flex flex-col h-full rounded-2xl shadow-2xl">
          <div className="border-b border-neutral-70 flex gap-8 w-full px-8 py-5">
            {registerQuestSteps.map((data, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => goToStep(index)}
              >
                <div className="flex items-center">
                  <div
                    className={classNames(
                      "size-5 grid place-content-center rounded-full prose-c2-medium mr-2",
                      {
                        "bg-blue-30 text-neutral-100":
                          currentStepIndex === index,
                      },
                      {
                        "bg-neutral-100 text-neutral-5 border border-neutral-70":
                          currentStepIndex < index,
                      },
                      {
                        "bg-primary-20 text-neutral-100":
                          currentStepIndex > index,
                      }
                    )}
                  >
                    {currentStepIndex > index ? (
                      <RiCheckLine size={16} />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <span
                    className={classNames("prose-b2-medium", {
                      "text-neutral-5": currentStepIndex === index,
                    })}
                  >
                    {data.header}
                  </span>

                  {index !== registerQuestSteps.length - 1 && (
                    <RiArrowRightSLine
                      size={20}
                      className="text-neutral-40 ml-2"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex-1">{step.component}</div>
          <div className="p-5 border-t border-neutral-70 flex gap-5 justify-end">
            {!isFirstStep && (
              <IconLabelButton
                label="Back"
                variant="secondary"
                onClick={prevStep}
              />
            )}
            <IconLabelButton onClick={nextStep} label={step.button} />
          </div>
        </div>
      </div>
    </Formik>
  );
}
