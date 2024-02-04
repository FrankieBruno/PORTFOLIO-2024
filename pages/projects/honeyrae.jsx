import PROJECTS_DATA from "../../content.mjs";

import Showcase from "@/Showcase";

const data = PROJECTS_DATA.HONEYRAE;

export default function Honeyrae() {

    return <Showcase {...data} />;

};