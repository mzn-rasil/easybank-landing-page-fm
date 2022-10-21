import { useState } from "react";
import { Logo } from "./assets/Logo";
import MenuIcon from "./assets/images/icon-hamburger.svg";
import MenuCloseIcon from "./assets/images/icon-close.svg";
import HeroMobile from "./assets/images/bg-intro-mobile.svg";
import HeroDesktop from "./assets/images/bg-intro-desktop.svg";
import Mockups from "./assets/images/image-mockups.png";

/* Why Choose Easybanks Section Images */
import Online from "./assets/images/icon-online.svg";
import Budgeting from "./assets/images/icon-budgeting.svg";
import Onboarding from "./assets/images/icon-onboarding.svg";
import OpenAPI from "./assets/images/icon-api.svg";

/* Latest Articles Images */
import Currency from "./assets/images/image-currency.jpg";
import Restaurant from "./assets/images/image-restaurant.jpg";
import Plane from "./assets/images/image-plane.jpg";
import Confetti from "./assets/images/image-confetti.jpg";

/* Social Media Icons */
import Facebook from "./assets/images/icon-facebook.svg";
import Youtube from "./assets/images/icon-youtube.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Pinterest from "./assets/images/icon-pinterest.svg";
import Instagram from "./assets/images/icon-instagram.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  }

  return (
    <div className="relative">
      <header className="bg-neu-very-light-gray">
        <nav className="relative z-20 bg-white py-8 md:py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div>
              <Logo fill="#2f2f2f" />
            </div>

            <div className="hover:cursor-pointer md:hidden" onClick={toggleMenuHandler}>
              {
                isMenuOpen ?
                  <img src={MenuCloseIcon} alt="Hamburger close icon" /> :
                  <img src={MenuIcon} alt="Hamburger menu icon" />
              }
            </div>

            <ul className="hidden md:flex items-center gap-8 py-8 text-sm lg:text-base tracking-tight">
              <li><a href="#" className="py-8 text-neu-grayish-blue hover:text-black hover:border-b-4 border-pri-lime-green">Home</a></li>
              <li><a href="#" className="py-8 text-neu-grayish-blue hover:text-black hover:border-b-4 border-pri-lime-green">Contact</a></li>
              <li><a href="#" className="py-8 text-neu-grayish-blue hover:text-black hover:border-b-4 border-pri-lime-green">About</a></li>
              <li><a href="#" className="py-8 text-neu-grayish-blue hover:text-black hover:border-b-4 border-pri-lime-green">Blog</a></li>
              <li><a href="#" className="py-8 text-neu-grayish-blue hover:text-black hover:border-b-4 border-pri-lime-green">Careers</a></li>
            </ul>

            <button className="hidden md:flex px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-pri-lime-green to-pri-bright-cyan hover:opacity-80">
              Request Invite
            </button>
          </div>
        </nav>

        {
          isMenuOpen &&
          (
            <div className="absolute z-40 w-full h-full bg-black bg-opacity-25" onClick={toggleMenuHandler}>
              <div className="absolute z-50 w-full p-4 sm:p-6">
                <ul className="max-w-xl ml-auto bg-white py-6 flex flex-col items-center gap-4 rounded-lg">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
            </div>
          )
        }

        <div className="relative max-w-screen-2xl mx-auto">
          <div className="relative z-0">
            <div className="md:absolute md:w-[80vw] md:-right-64 md:-top-52 lg:-right-96 lg:-top-64 xl:w-full xl:-right-[700px] z-30">
              <img src={HeroMobile} alt="Background intro mobile" className="w-full flex md:hidden" />
              <img src={HeroDesktop} alt="Background intro desktop" className="hidden md:flex" />
            </div>
            <div className="absolute md:-right-32 z-30 -top-28">
              <img src={Mockups} alt="Mockups illustration" className="md:w-[50vw] xl:w-full" />
            </div>
          </div>

          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:py-16 xl:py-48">
              <div className="md:w-1/2">
                <h1 className="font-normal text-pri-dark-blue text-3xl text-center px-6 md:text-start md:px-0 md:text-4xl lg:text-6xl">Next generation digital banking</h1>

                <p className="mt-4 text-neu-grayish-blue text-center text-sm px-4 leading-relaxed md:text-start md:px-0 md:mt-8 md:text-base lg:text-xl">
                  Take your financial life online. Your Easybank account will be a one-stop-shop
                  for spending, saving, budgeting, investing, and much more.
                </p>

                <div className="mt-6 flex justify-center md:justify-start">
                  <button className="px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-pri-lime-green to-pri-bright-cyan md:py-4 md:px-8 hover:opacity-80 mb-8 md:mb-0">
                    Request Invite
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>

      <main>
        <section className="bg-neu-light-grayish-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 text-center md:text-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-pri-dark-blue px-8 md:px-0">
              Why Choose Easybank?
            </h2>

            <p className="mt-6 px-6 md:px-0 text-sm sm:text-base lg:text-lg text-neu-grayish-blue tracking-tight md:2/3 lg:w-1/2">
              We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
            </p>

            <div className="mt-10 flex flex-col items-center gap-10 px-8 md:flex-row md:px-0">
              {
                [
                  {
                    id: 1,
                    icon: Online,
                    title: "Online Banking",
                    description: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
                  },
                  {
                    id: 2,
                    icon: Budgeting,
                    title: "Simple Budgeting",
                    description: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
                  },
                  {
                    id: 3,
                    icon: Onboarding,
                    title: "Fast Onboarding",
                    description: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
                  },
                  {
                    id: 4,
                    icon: OpenAPI,
                    title: "Open API",
                    description: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
                  },
                ].map(reason => (
                  <div
                    key={reason.id}
                    className="flex flex-col gap-3"
                  >
                    <div className="flex justify-center md:justify-start">
                      <img src={reason.icon} alt={reason.title} />
                    </div>
                    <h3 className="mt-6 text-pri-dark-blue font-normal text-lg md:text-xl">{reason.title}</h3>
                    <p className="text-neu-grayish-blue text-sm md:text-base">{reason.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24 text-center md:text-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-pri-dark-blue">Latest Articles</h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 items-center md:flex-row md:mt-16 md:gap-x-8">
              {
                [
                  {
                    id: 1,
                    image: Currency,
                    author: "Claire Robinson",
                    title: "Receive money in any currency with no fees",
                    story: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
                  },
                  {
                    id: 2,
                    image: Restaurant,
                    author: "Wilson Hutton",
                    title: "Treat yourself without worrying about money",
                    story: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
                  },
                  {
                    id: 3,
                    image: Plane,
                    author: "Wilson Hutton",
                    title: "Take your Easybank card wherever you go",
                    story: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
                  },
                  {
                    id: 4,
                    image: Confetti,
                    author: "Claire Robinson",
                    title: "Our invite-only Beta accounts are now live!",
                    story: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
                  }
                ].map(article => (
                  <article
                    key={article.id}
                  >
                    <div className="rounded-t-xl md:h-48">
                      <img src={article.image} alt={article.title} className="rounded-t-xl w-full h-full" />
                    </div>

                    <div className="mt-10 px-10 text-start md:px-4">
                      <div>
                        <span className="text-xs text-neu-grayish-blue">By {article.author}</span>
                      </div>

                      <h3 className="mt-4 text-lg">{article.title}</h3>

                      <p className="mt-4 text-base tracking-tight text-neu-grayish-blue">{article.story}</p>
                    </div>
                  </article>
                ))
              }
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pri-dark-blue">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center sm:px-6 lg:px-8 py-8 md:flex-row md:justify-between md:gap-24">
          <div className="flex flex-col gap-6 items-center md:gap-14">
            <div>
              <Logo fill="white" />
            </div>

            <ul className="flex gap-4">
              <li><a href="#"><img src={Facebook} alt="Facebook" /></a></li>
              <li><a href="#"><img src={Youtube} alt="Youtube" /></a></li>
              <li><a href="#"><img src={Twitter} alt="Twitter" /></a></li>
              <li><a href="#"><img src={Pinterest} alt="Pinterest" /></a></li>
              <li><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
            </ul>
          </div>

          <ul className="mt-8 text-white flex flex-col gap-2 items-center md:flex-row md:mt-0 md:mr-auto md:gap-24">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </div>
            <div className="flex flex-col gap-2 items-center md:items-start">
              <li><a href="#">Careers</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </div>
          </ul>

          <div className="mt-8 flex flex-col items-center gap-4 md:gap-10 md:mt-0">
            <div className="px-8">
              <button className="px-6 py-2 rounded-full font-bold text-white bg-gradient-to-r from-pri-lime-green to-pri-bright-cyan hover:opacity-80">
                Request Invite
              </button>
            </div>
            <span className="block text-neu-grayish-blue">© Easybank. All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
