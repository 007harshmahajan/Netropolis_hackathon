import { IconLabelButton } from "@/components/buttons";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-5">
      <span className="prose-t1-bold text-7xl text-neutral-20">404</span>
      <span className="prose-t1-bold text-4xl text-neutral-40">
        Page Not Found
      </span>
      <IconLabelButton
        label="Back to Home"
        variant="tertiary"
        onClick={() => navigate("/")}
      />
    </div>
  );
}
