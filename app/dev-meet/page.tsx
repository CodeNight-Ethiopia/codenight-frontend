
import { CountDown } from "@/components/events/countdown-wrapper";
import { DevPic } from "@/components/events/dev-pic";
import { Evented } from "@/components/events/evented";
import { GetStarted } from "@/components/events/get-started";
import HeroEvent from "@/components/events/here-event";
import Organizers from "@/components/events/organizers";
import { Schedule } from "@/components/events/schdule";
import { Speakers } from "@/components/events/speakers";
import { Sponsors } from "@/components/events/sponsors";
import { Stats } from "@/components/events/stats";
import { UpcomingEvent } from "@/components/events/upcoming-events";
export const metadata = {
  title: "CodeNight Events",
  description: "Where we all gather and build the future"
}
const DevMeetupV2 = () => {
  return (
    <>
      <HeroEvent />
      <Evented />
      <DevPic />
      <CountDown />
      <UpcomingEvent />
      <Speakers />
      <Schedule />
      <Sponsors />
      <Organizers />
      <Stats />
      <GetStarted />
    </>
  );
};
export default DevMeetupV2;

