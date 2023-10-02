import {ReactComponent as DownSVG} from "./icon-arrow.svg"

function AppIcons({ updval }) {
    return (
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-24 bg-purple-muppet p-4 rounded-full">
            <DownSVG className="w-10" onClick={updval} />
        </span>
    );
}


export {AppIcons}