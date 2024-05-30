let Services = [
    {
        id: 1,
        title: 'Branding',
        descripition: "The brand is hope, It is also the source of inspiration for everything you do when youdeal with your customers and that is the important and emotionalthing. Your Brand and Visual identity represents an intrinsic Valu  to your company.",
        serviesTitle: "In focal X agency, we provide:",
        listItem1: "Visual identity design.",
        listItem2: "Define Brand Identity.",
        listItem3: "Define Brand personality.",
        listItem4: "Building Your brand strategy.",
        listItem5: "Market research and competitors study.",
        titleFooter: "We walk with you from A to Z.",
        photo: "./img/brandingOrange.png",
        borderColor: 'color-border-orange',
        colorTitel: 'color-titel-orange'

    },
    {
        id: 2,
        title: 'Marketing',
        descripition: "Talk to your customers and tell them you and your company's story through us the way you want.Let us plan the content that will bring your audience closer to you.",
        serviesTitle: "In our marketing agency, we provide:",
        listItem1: "E-mail marketing.",
        listItem2: "Affiliate marketing.",
        listItem3: "Influencer marketing.",
        listItem4: "Market research and Analysis",
        listItem5: "App store optimization ( ASO ).",
        listItem6: "Search engine Marketing ( SEM ).",
        photo: "./img/markiting.png",
        borderColor: 'color-border-purpl',
        colorTitel: 'color-titel-purpl'

    },

]
export default function Servies() {
    return (
        <section className="our-service" id="servies">
            <h1 className="our-servies-titel">Our Services</h1>
            <div className="cards">
                {Services.map((servies) => (
                    <div key={servies.id} className="card">
                        <h2 className={servies.borderColor}>{servies.title}</h2>
                        <p>{servies.descripition}</p>
                        <h1 id="servies-titel" className={servies.colorTitel}>{servies.serviesTitle}</h1>
                        <ul className="list-item">
                            <li>{servies.listItem1}</li>
                            <li>{servies.listItem2}</li>
                            <li>{servies.listItem3}</li>
                            <li>{servies.listItem4}</li>
                            <li>{servies.listItem5}</li>
                            <li>{servies.listItem6}</li>

                        </ul>
                        <h1 className="titel-foot">{servies.titleFooter}</h1>
                        <img src={servies.photo} alt="" className="card-img" />


                    </div>
                )


                )}
            </div>

        </section>

    )

}
