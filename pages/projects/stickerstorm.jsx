import PROJECTS_DATA from "../../content.mjs";

import Showcase from "@/Showcase";

const data = PROJECTS_DATA.STICKERSTORM;

export default function Stickerstorm() {

    return <Showcase {...data} />;

};