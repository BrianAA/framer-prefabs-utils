import React from "react"
const ErrorStyles = {
    backgroundColor: "#edf2ff",
    border: "1px solid #5c7cfa",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    padding: "24px",
    color: "#364fc7",
    textAlign: "center",
}
export const ErrorState = (props) => {
    <div style={ErrorStyles}>
        {props.children}
    </div>
}

const InfoStyles = {
    backgroundColor: "#edf2ff",
    border: "1px solid #5c7cfa",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    padding: "24px",
    color: "#364fc7",
    textAlign: "center",
}
export const InfoState = (props) => {
    <div style={InfoStyles}>
        {props.children}
    </div>
}

const WarningStyles = {
    backgroundColor: "#edf2ff",
    border: "1px solid #5c7cfa",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    padding: "24px",
    color: "#364fc7",
    textAlign: "center",
}
export const WarningState = (props) => {
    <div style={WarningStyles}>
        {props.children}
    </div>
}