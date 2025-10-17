

const style = {
    backgroundImage: "url(/cats-hero.jpg)",
    height: "90vh",
    width: "100%",
    backgroundSize: "contain no-repeat"
}

export default function HeroImage() {
    return (<>
        <div style={style}>
            <h1>Cats Hero Image</h1>
            <p>Cats cats cats</p>
            
        </div>
    </>)
}