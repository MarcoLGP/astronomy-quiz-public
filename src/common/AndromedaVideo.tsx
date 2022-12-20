import andromeda_video from "../../assets/video/TiredGiddyEasternglasslizard.mp4";
import { AndromedaVideoProp } from "../types/styles";

export default function AndromedaVideo({style}: AndromedaVideoProp) {
    return (
        <video
                className={style}
                autoPlay
                loop
                src={andromeda_video}
                muted
            />
    );

}