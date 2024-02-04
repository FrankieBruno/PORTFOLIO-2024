import PROJECTS_DATA from "../../content.mjs";

import Showcase from "@/Showcase";

const data = PROJECTS_DATA.MOVIELAND;

export default function Movieland() {

    return <Showcase {...data} />;

};