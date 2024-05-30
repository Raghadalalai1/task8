let Prices = [
  {
    id: 1,
    title: 'Branding',
    descripition: "for very small businesses and freelancers.",
    priceNum: '$25/mo',
    Item1: "Disk Space: 500 M.B",
    Item2: "Bandwidth: 500 G.B",
    Item3: "SubDomains: Unlimited",
    Item4: "Parked Domains: Unlimited",
    Item5: "E-mail Accounts: Unlimited",
    Item6: "Cpanel (control panel): Yes",
    Item7: "Money Back Guarantee: 14 Days",
    buttonContent: "You will have 1 Gift",
    colorTopCard: 'color-top-card1',
    colorButtonCard: 'color-button-card1'



  },
  {
    id: 2,
    title: 'Pro',
    descripition: "for Individuals that need sharing vlogs or need huge portfolio.",
    priceNum: '$5/mo',
    Item1: "Disk Space: 3000 M.B",
    Item2: "Bandwidth: 3 TERA",
    Item3: "SubDomains: Unlimited",
    Item4: "Parked Domains: Unlimited",
    Item5: "E-mail Accounts: Unlimited",
    Item6: "Cpanel (control panel): Yes",
    Item7: "Money Back Guarantee: 14 Days",
    buttonContent: "1 Gift per/mo for year",
    colorTopCard: 'color-top-card2',
    colorButtonCard: 'color-button-card2'


  },
  {
    id: 3,
    title: 'Business',
    descripition: "for Team that need sharing and reporting.",
    priceNum: '$8/mo',
    discount: '5% Discount duing 2022',
    Item1: "Disk Space: 5000 M.B",
    Item2: "Bandwidth: 5 TERA",
    Item3: "SubDomains: Unlimited",
    Item4: "Parked Domains: Unlimited",
    Item5: "E-mail Accounts: Unlimited",
    Item6: "Cpanel (control panel): Yes",
    Item7: "Money Back Guarantee: 14 Days",
    buttonContent: "3 Gifts per/mo for year",
    colorTopCard: 'color-top-card3',
    colorButtonCard: 'color-button-card3'


  },
  {
    id: 4,
    title: 'Enterprise',
    descripition: "for large companies that need admins & security",
    priceNum: '$12/mo',
    discount: '8% Discount duing 2022',
    Item1: "Disk Space: 10000 M.B",
    Item2: "Bandwidth: 10 TERA",
    Item3: "SubDomains: Unlimited",
    Item4: "Parked Domains: Unlimited",
    Item5: "E-mail Accounts: Unlimited",
    Item6: "Cpanel (control panel): Yes",
    Item7: "Money Back Guarantee: 14 Days",
    buttonContent: "Just Call Us",
    colorTopCard: 'color-top-card4',
    colorButtonCard: 'color-button-card4'


  },

]

export default function Price() {
  return (
    <section className="our-price">
      <h1 className="our-price-titel">Hosting Pricing</h1>
      <div className="cards-price">
        {Prices.map((prices) => (

          <div key={prices.id} className="card-price">
            <div id="color-div-top" className={prices.colorTopCard}></div>
            <div className="card-price-contant">
              <h3>{prices.title}</h3>
              <p className="des">{prices.descripition}</p>
              <div className="price-discount">
                <h2>{prices.priceNum}</h2>
                <p>{prices.discount}</p>
              </div>
              <ul>
                <li>{prices.Item1}</li>
                <li>{prices.Item2}</li>
                <li>{prices.Item3}</li>
                <li>{prices.Item4}</li>
                <li>{prices.Item5}</li>
                <li>{prices.Item6}</li>
                <li>{prices.Item7}</li>
              </ul>
              <button className={prices.colorButtonCard}>{prices.buttonContent}</button>
            </div>
          </div>
        ))}


      </div>
      <p className="des-focal">Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.
        Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>
<img src="./img/circle.svg" alt="" className="circil1 anim11" />
<img src="./img/circle1.svg" alt="" className="circil2 anim22"   />
<img src="./img/circle2.svg" alt="" className="circil3 anim33" />
<img src="./img/circle3.svg" alt="" className="circil4 anim44"/>
<img src="./img/circle4.svg" alt="" className="circil5 anim55"/>
<img src="./img/circle4.svg" alt="" className="circil6 anim66"/>
<img src="./img/circle4.svg" alt="" className="circil7 anim77"/>
<img src="./img/circle4.svg" alt="" className="circil8 anim88"/>
<img src="./img/circle4.svg" alt="" className="circil9 anim99"/>
<img src="./img/circle4.svg" alt="" className="circil10 anim10"/>

    </section>
  )
}
