import imageone from "../../content/images/IMG_5008.jpg";
import hlSplashPage from "../../content/images/IMG_5008.jpg";
import login from "../../content/images/hlLogin.jpg";
import reasonWhy from "../../content/images/hlReasonWhy.jpg";
import sobrietyCheck from "../../content/images/hlSobrietyCheck.jpg";
import todaysEmotion from "../../content/images/hlTodaysEmotion.jpg";
import tracker from "../../content/images/hlTracker.jpg";
import tracker2 from "../../content/images/hlTracker2.jpg";
import smile from "../../content/images/Smile.jpg";
import uploadPicture from "../../content/images/uploadpicture.jpg";
import CaptionMagic from "../../content/images/CaptionMagic.jpg";
import North1 from "../../content/images/North1.jpg";
import North2 from "../../content/images/North2.jpg";
import North3 from "../../content/images/North3.jpg";

const ProjectsData = [
  {
    id: 1,
    image: [
      hlSplashPage,
      login,
      reasonWhy,
      sobrietyCheck,
      todaysEmotion,
      tracker,
      tracker2,
    ],
    title: "Healing Paths App",
    description:
      "The Healing Paths app is a Progressive Web App designed to help aid drug addiction in the American Indian community specifically the youth. I was fortunate to help bring this app to life for our client and the users it was intended for.",
  },
  {
    id: 2,
    image: [CaptionMagic, uploadPicture, smile],
    title: "Caption Magic!",
    description:
      "Ever have the most fire picture to post, but can't think of a caption? Caption Magic is a web app that allows you to just pick your photos mood upload it , and then boom in seconds a great caption is served to you!",
  },
  {
    id: 3,
    image: [North1, North2, North3],
    title: "Northrop Grumman",
    description:
      "Northrop Grumman is an American multinational aerospace and defense technology company. I was apart of a team to do a like for like lift and shift job from wordpress to sitecore. It was great working with such an innovative company!",
  },
];

export default ProjectsData;
