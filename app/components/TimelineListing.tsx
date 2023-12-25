"use client"

export default function TimelineListing(time : string, title : string, desc : string, skills : string[]) {
    return (
        <div>
            <div>
                {time}
            </div>
            <div>
                <h4>{title}</h4>
                <p>{desc}</p>

            </div>
        </div>
    )
}