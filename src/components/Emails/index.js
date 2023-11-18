
export const EmailTemplate = ({ response }) => {
    console.log(response)
    const items = Object
        .keys(response)
        .map(k => ({ [k]: response[k] }))
    return (
        <div style={frame}>
            {items.map((item, index) => {
                return (
                    <div key={index}>
                        {
                            Object.entries(item, index).map(([key, value]) => {
                                return <div key={index} style={container}><span style={descriptionKey}>{key}</span> {value.length >= 1 ? <span style={descriptionValue}>{value}</span> : <span style={descriptionValue}>No value entered</span>}</div>
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
};

const frame = {
    backgroundColor: "rgba(17, 24, 39, 1)",
    color: "rgb(214 220 229)",
    padding: "0 1.25rem 1.25rem 1.25rem",
    fontFamily: "Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
}

const descriptionValue = {
    display: "block",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    textTransform: "capitalize",
    color: "#9d9da8",

}

const container = {
    display: "block",
    gap: "10px",
    paddingBottom: ".75rem",
    borderBottom: "1px solid #303030",
    maxWidth: "28rem",
}


const descriptionKey = {
    fontWeight: "600",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",

};
