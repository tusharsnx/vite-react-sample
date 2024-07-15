import Marquee from "@/components/magicui/marquee";
import "./MyMarquee.css"

const TestData = [
    {
        name: "Tushar Singh",
        data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        name: "Jacky",
        data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
]

function MarqueeCard({name, data}: {name: string, data: string}) {
    return (
    <div className="marquee-card">
        <div className="card-content">
            <div className="card-title">{name}</div>
            <div className="card-desc">{data}</div>
        </div>
    </div>
    )
}

export default function MyMarquee() {
    return (
    // Marquee from MagicUI
    <Marquee className="[--duration:20s]" pauseOnHover>
        {TestData.map((data, i) => <MarqueeCard key={i} {...data}/>)}
    </Marquee>
    )
}