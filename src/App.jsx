import { useState, useEffect } from 'react'
import "./index.css"
import logoImg from "./images/logo.svg"
import HamburgerImg from "./images/icon-hamburger.svg"
import XHamburgerImg from "./images/icon-close-menu.svg"
import StartUpImg from "./images/logo-mastercraft.svg"
import XModal from "./images/icon-close-modal.svg"
import SuccessImg from "./images/icon-check.svg"

function Header() {
  const [navModal, setNavModal] = useState(false)
  useEffect(() => {
    document.body.style.overflow = navModal ? "hidden" : "auto"
  })
  return (
    <header className='overflow-hidden h-[300px] pt-8 px-8 bg-hero bg-center bg-cover bg-no-repeat
                      md:h-[400px] md:pt-12 md:px-[11%] md:bg-hero-desktop md:flex md:justify-between '>
      <div className="flex flex-row justify-between w-full h-5">
        <Logo />
        <Menu navState={navModal} onMenuClick={setNavModal} />
      </div>
      <NavBar navState={navModal} />
    </header>
  )
}

function Logo() {
  return (
    <a href="#" className="z-20">
      <img src={logoImg} alt="Crowdfund - Homepage" width="128" height="20" />
    </a>)
}
function Menu(props) {
  return (
    <button className={`float-right 
                        md:hidden ${props.navState && "z-20"}`}
      onClick={() => props.onMenuClick(!props.navState)}>
      <img src={props.navState ? XHamburgerImg : HamburgerImg} alt="Open navigation menu" width="15" height="15"
        className="h-4 w-4" />
    </button>
  )
}
function NavBar(props) {
  const elements = ["About", "Discover", "Get Started"]
  return (
    <div className={`${!props.navState && "hidden"} z-10 fixed inset-0  bg-gradient-to-b from-black to-transparent 
                    md:block md:static md:from-transparent`}>
      <nav className="bg-white flex flex-col rounded-md h-52 w-13/15 mt-20 mx-auto overflow-hidden divide-y  divide-gray-400
                      md:text-white md:bg-transparent md:flex-row md:h-auto md:w-auto md:mt-0 md:divide-y-0 ">
        {elements.map((e) =>
          <NavBarElement key={e}>
            {e}
          </NavBarElement>
        )}
      </nav>
    </div>)
}
function NavBarElement(props) {
  return (
    <a className="font-medium flex-grow p-4 whitespace-nowrap
                  md:font-normal md:relative md:py-0
                  md:hover:after:absolute md:hover:after:w-1/2 md:hover:after:h-px md:hover:after:block md:hover:after:bg-white md:hover:after:bottom-0 md:hover:after:left-1/4" href="#">
      {props.children}
    </a>
  )
}
function Main() {
  const [selectedPledge, setSelectedPledge] = useState("")
  useEffect(() => {
    document.body.style.overflow = selectedPledge ? "hidden" : "auto"
  })
  return (
    <main className='bg-gray-50'>
      <div className="w-[87%] relative max-w-[45.5rem] m-auto bottom-16 space-y-8">
        <Desc onBackProject={setSelectedPledge} />
        <Stats />
        <About onSelectReward={setSelectedPledge} />
      </div>
      <SelectionModal show={!!selectedPledge} selectedPledge={selectedPledge} setSelectedPledge={setSelectedPledge} />
    </main>
  )
}
function StartUpLogo() {
  return (
    <img src={StartUpImg} alt="" className="absolute -top-7 right-[calc(50%-28px)]" width="56" height="56" />
  )
}

function Container(props) {
  return (
    <div className="bg-white w-full border border-gray-200 rounded-md space-y-6 py-10 px-7 relative">
      {props.children}
    </div>
  )
}
function Par(props) {
  return (
    <p className={`${props.align ?? "text-center"} text-sm tracking-tight md:tracking-widest text-gray-500 ${props.extraClass}`}>
      {props.children}
    </p>)
}
function Butt(props) {
  return (
    <button disabled={props.disabled} className={`rounded-full bg-cyan text-white font-medium 
                      md:hover:bg-cyan-dark ${props.width} ${props.height} ${props.extraClass}
                      ${props.disabled && "filter grayscale"}`}
      onClick={() => props.onClick()}>
      {props.children}
    </button>
  )
}
function Bookmark() {
  const [bookmark, setBookmark] = useState(false)
  return (
    <button className={`float-right ${bookmark ? "text-cyan" : "text-gray-900"} font-medium
                    md:bg-gray-200 md:overflow-hidden md:rounded-full md:hover:opacity-80`}
      onClick={() => setBookmark(!bookmark)}>
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" className="md:z-10 md:inline">
        <g fill="none" fillRule="evenodd">
          <circle fill="#2F2F2F" className="fill-current" cx="28" cy="28" r="28" />
          <path fill={bookmark ? "white" : "#B1B1B1"} d="M23 19v18l5-5.058L33 37V19z" />
        </g>
      </svg>
      <span className="hidden md:inline-block px-4 font-medium">
        {bookmark ? "Bookmarked" : "Bookmark"}
      </span>
    </button>
  )
}
function Desc(props) {
  return (
    <Container>
      <StartUpLogo />
      <h1 className="font-bold text-black text-2xl text-center">
        {DATA.project}
      </h1>
      <Par>
        {DATA.description}
      </Par>
      <div className="flex justify-between">
        <Butt width="w-52" height="h-14" onClick={() => props.onBackProject("1")}>
          Back this project
        </Butt>
        <Bookmark></Bookmark>
      </div>
    </Container>
  )
}

function StatElement(props) {
  return (
    <Par align="text-center md:text-left">
      <span className="text-3xl block m-auto font-bold text-black">
        {props.unit}{toLStr(props.count)}
      </span>
      {props.children}
    </Par>
  )
}
function Separation() {
  return (
    <div className="h-px w-20 bg-gray-200 m-auto md:h-20 md:w-px" />
  )
}
function ProgBar(props) {
  return (
    <div className="bg-gray-100 h-3 rounded-full overflow-hidden">
      <div className="h-full bg-cyan rounded-full" style={{ width: props.raised / props.of * 100 + "%" }}></div>
    </div>)
}
function Stats(props) {
  return (
    <Container>
      <div className="flex flex-col space-y-8
                      md:flex-row md:h-auto md:space-y-0 md:w-3/4">
        <StatElement count={DATA.stats.raised} unit="$">
          of ${toLStr(DATA.stats.of)} backed
        </StatElement>
        <Separation />
        <StatElement count={DATA.stats.backers}>
          total backers
        </StatElement>
        <Separation />
        <StatElement count={DATA.stats.daysLeft}>
          days left
        </StatElement>
      </div>
      <ProgBar raised={DATA.stats.raised} of={DATA.stats.of} />
    </Container>)
}

function About(props) {
  return (
    <Container>
      <h2 className="font-bold">
        About this project
      </h2>
      {DATA.about.map((p, i) =>
        <Par align="text-left" key={i} >
          {p}
        </Par>
      )}
      {DATA.pledges.map((pledge, i) =>
        <Pledge key={i} id={i + 1} name={pledge.name} desc={pledge.desc} price={pledge.price} left={pledge.left} onSelectReward={props.onSelectReward} />
      )}
    </Container>
  )
}
function Pledge(props) {
  return (
    <div className={`grid grid-cols-1 auto-rows-min gap-6 p-5 border-gray-200 border rounded-md 
  md:grid-cols-2 md:p-7 ${!props.left && "opacity-60"}`}>
      <div className="md:flex md:flex-row md:justify-between md:col-span-2">
        <h3 className="font-medium">
          {props.name}
        </h3>
        <p className="text-cyan">
          Pledge ${toLStr(props.price)} or more
        </p>
      </div>
      <Par align="text-left" extraClass="md:col-span-2">
        {props.desc}
      </Par>
      <Par align="text-left">
        <span className="text-3xl font-medium text-black">{toLStr(props.left)}</span>left
      </Par>
      <Butt height="h-12" width="w-40"
        extraClass={`justify-self-end`}
        disabled={!props.left} id="select-pledge-1"
        onClick={() => props.onSelectReward("pledge-" + props.id)}>
        {props.left ? "Select Reward" : "Out Of Stock"}
      </Butt>
    </div>
  )
}

function Modal(props) {
  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-30 w-screen h-screen overflow-y-auto px-[6.67%] ${props.pTop}`}>
      {props.children}
    </div>
  )
}

function CloseModal(props) {
  return (
    <button className="absolute right-0 top-0" style={{ padding: "inherit" }}
      onClick={() => {
        props.setSelectedPledge("")
      }}>
      <img src={XModal} alt="close Modal" />
    </button>
  )
}
function SelectPledge(props) {
  return (
    <div className={`py-5 border-2 rounded-md 
    ${props.isSelected ? "border-cyan" : "border-gray-200"} ${!props.left && "opacity-60"}`}>
      <div className="px-5 pb-5 md:grid md:grid-cols-3">
        <label className={`relative cursor-pointer 
        ${props.left && "md:hover:text-cyan"}
        md:flex md:flex-row md:col-span-2`}>
          <input className="opacity-0 absolute h-0 w-0"
            type="radio" name="pledge" value={props.name} disabled={!props.left}
            onChange={() => props.setSelectedPledge(props.id)} />
          <span className={`
        absolute border-2 border-gray-400 rounded-full bg-white w-6 h-6 ${(props.left != Infinity) && "top-3 md:top-0"}
        ${!props.isSelected && "after:hidden"} after:absolute after:bg-cyan after:rounded-full after:w-3 after:h-3 after:top-1 after:left-1`} />
          <span className="ml-10 block font-bold">
            {props.name}
          </span>
          {(props.left != Infinity) && <span className="ml-10 block text-cyan">
            Pledge ${props.price} or more
          </span>}
        </label>
        <Par align="text-left" extraClass="md:col-span-3 my-4">
          {props.desc}
        </Par>
        {(props.left != Infinity) &&
          <Par align="text-left md:text-right" extraClass="md:col-start-3 md:row-start-1">
            <span className="text-xl font-bold text-black">{toLStr(props.left)}</span>left
          </Par>}
      </div>
      {props.isSelected && <EnterPledge isSelected={props.isSelected} price={props.price}
        amountRaised={props.amountRaised} setAmountRaised={props.setAmountRaised} targetPledge={props.id}
        setSuccess={props.setSuccess} />}
    </div>
  )
}
function EnterPledge(props) {
  useEffect(() => {
    props.setAmountRaised(props.price)
  }, [])

  return (
    <div className="grid p-4 grid-cols-2 md:grid-cols-5 gap-4 border-t border-gray-300">
      <Par align="text-left" extraClass="md:col-span-3 col-span-2">
        Enter your pledge
      </Par>
      <div className="relative">
        <span className="absolute left-5 top-3 font-bold">$</span>
        <input type="number" min={props.price}
          className="pl-8 font-bold text-black rounded-full h-12 w-24 border-2 border-gray-300"
          value={props.amountRaised} onChange={(e) => {
            props.setAmountRaised(e.target.value)
          }} />
      </div>
      <Butt width="w-40 max-w-full" height="h-12" disabled={props.amountRaised < props.price}
        onClick={() => {
          const pledgeId = props.targetPledge.split("-").pop() - 1
          DATA.stats.raised += props.amountRaised;
          DATA.stats.backers++
          if (pledgeId >= 0) {
            DATA.pledges[pledgeId].left--
          }
          props.setSuccess(true)
        }}>
        Continue
      </Butt>
    </div>)
}

function SelectionModal(props) {
  const [amountRaised, setAmountRaised] = useState(0)
  const [success, setSuccess] = useState(false)
  if (!props.show) {
    return null
  } else {
    if (success) {
      return (
        <Modal pTop="p-60">
          <Container>
            <img src={SuccessImg} className="m-auto" alt="" />
            <h2 className="text-black text-center font-bold">
              Thanks for your support!
            </h2>
            <Par>
              Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
              an email once our campaign is completed.
            </Par>
            <Butt width="w-40" height="h-12" extraClass="m-auto block"
              onClick={() => {
                setSuccess(false)
                props.setSelectedPledge("")
              }}>
              Got it!
            </Butt>
          </Container>
        </Modal>
      )
    } else {
      return (
        <Modal pTop="p-20">
          <Container>
            <CloseModal setSelectedPledge={props.setSelectedPledge} />
            <h2 className="text-xl font-bold text-black">
              Back this project
            </h2>
            <Par align="text-left">
              Want to support us bringing {DATA.project} out in the world?
            </Par>
            <SelectPledge name="Pledge with no reward"
              desc="Choose to support us without a reward if you simply believe in our project. As a backer,
            you will be signed up to receive product updates via email."
              price={0.1}
              left={Infinity}
              id="pledge-0"
              isSelected={props.selectedPledge == "pledge-0"}
              setSelectedPledge={props.setSelectedPledge}
              amountRaised={amountRaised} setAmountRaised={setAmountRaised}
              setSuccess={setSuccess} />
            {DATA.pledges.map((pledge, i) =>
              <SelectPledge key={i} name={pledge.name} desc={pledge.desc} price={pledge.price} left={pledge.left} id={`pledge-${i + 1}`}
                isSelected={props.selectedPledge == `pledge-${i + 1}`} setSelectedPledge={props.setSelectedPledge}
                amountRaised={amountRaised} setAmountRaised={setAmountRaised}
                setSuccess={setSuccess} />
            )}
          </Container>
        </Modal>
      )
    }
  }
}

function toLStr(num) {
  return parseInt(num).toLocaleString("en-US")
}
function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  )
}

export default App


const DATA = {
  project: "Mastercraft Bamboo Monitor Riser",
  description: "A beautifully handcrafted monitor stand to reduce neck and eye strain.",
  stats: {
    raised: 89914,
    of: 100000,
    backers: 5007,
    daysLeft: 56,
  },
  about: [
    `The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.`,

    `Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
    to allow notepads, pens, and USB sticks to be stored under the stand.`,
  ],
  pledges: [
    {
      name: "Bamboo Stand",
      desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      price: 25,
      left: 101,
    },
    {
      name: "Black Edition Stand",
      desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      price: 75,
      left: 64,
    },
    {
      name: "Mahogany Special Edition",
      desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      price: 200,
      left: 0,
    },
  ],
}