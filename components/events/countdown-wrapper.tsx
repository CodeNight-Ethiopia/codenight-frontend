import ShiftingCountdown from "./countdown";
import CountDownTimerHeader from "./countdown-header";
import { Wrapper } from "./wrapper";

export const CountDown = () => {
  return (
    <Wrapper size="lg" className="flex flex-col justify-center items-center my-20 font-display">
      <div className="ml-auto">
        <CountDownTimerHeader />
      </div>
      <ShiftingCountdown />
    </Wrapper>
  );
};
