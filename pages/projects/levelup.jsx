import PROJECTS_DATA from "../../content.mjs";

import Showcase from "@/Showcase";

const data = PROJECTS_DATA.LEVELUP;

export default function Levelup() {

    return <Showcase {...data} />;

};