import bgGIF from "./bg.gif";

import logo2 from "./logo2.svg";
import logo from "./logotest2.svg";
import time1 from "./time.svg";
import time2 from "./time2.svg"

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-10xl flex-col p-6 md:p-12">
      <header className="grid grid-rows-4 grid-cols-8 gap-0">
        <img className="row-start-0 row-span-4 col-span-2" src = {logo}/>
        <button className="row-start-0 col-start-7 col-end-9 rounded-full bg-slate-900 px-6 py-2 text-white hover:bg-opacity-75">
                Connect Wallet
        </button>
      </header>
      
      <main className="grid gap-2 rounded-lg p-6 lg:grid-cols-2 lg:p-12">
        <div className="flex flex-col items-center justify-left space-y-4">
          <p className="font-bold">
            <p className="text-xl">[Gen 1] Experiential Drop</p>
            <span>&nbsp;</span>
            <span>Titled:*Abstract Glitch </span>
            <span>Description: Using color to solve problems from irregular prpsctvs.</span>
            <span>Blockchain: Canto</span>
            <span>Supply: OE Available For 48 Hours</span>
            <span>Cost: 40 Canto</span>
            <span>Drop Details: This will be an open-edition mint available for 48 hours.You will mint
              "Color Equation #1" which will be required at each burn tier, 5 in total, and all free to mint.
              Please visit the burn mechanic flow chart for more details. To mint at all burn tiers it will 
              require 15 open editions. All mints after the initial phase 1/5 drops will be connected to the 
              Gen 1 open edition to naturally deflate the supply.
            </span>
            <span>&nbsp;  </span>
            <span>
              For more details click [here]
            </span>
            <span>&nbsp;  </span>
            <span>
              [Context]
            </span>
            <span>&nbsp;  </span>
            <span>
              The thesis that influences anything I create is rooted in design + environment.
              That is to say that in my world the most complex idea should be simplified to its 
              simplest form to protect the environment in which it has to survive in. This is how
              you refine good ideas to become great ideas.
            </span>
            <span>&nbsp;  </span>
            <span>
              [Portfolio + Context]
            </span>
            <span>&nbsp;  </span>
            <span>
              Art Portfolio - <a href="www.bymylesdaughtry.com">www.bymylesdaughtry.com</a>
            </span>
            <span>
              Commercial Portfolio - <a href="www.Organik.llc">www.Organik.llc</a>
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-xl flex-col space-y-4">
            <div className="aspect-square w-full overflow-hidden rounded-lg">
              <img className="aspect-square object-cover" src={bgGIF} />
            </div>
          </div>
        </div>
      </main>
      <footer className="grid grid-rows-5 grid-cols-6 gap-0">
        <img className="row-start-1 row-span-4 col-span-2" src = {logo2}/>
        <img className="row-start-3 row-end-4 col-start-7 " src = {time1}/>
        <img className="row-start-4 row-end-5 col-start-7" src = {time2}/>
      </footer>
    </div>
  );
}

export default App;

