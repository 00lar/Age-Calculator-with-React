import React from "react"
import { AppIcons } from "./AppIcons"

function ArrowIcon({updval}) {
    return(
        <AppIcons
        type = "Down"
        color = "Purple"
        updval={updval}
        >
        </AppIcons>
    )
}

export {ArrowIcon}