import { ArrowBigUp, ArrowUpRight, CreditCard, RefreshCcw } from "lucide-react";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";
import LatestCard from "../components/LatestCard";
import HelpCard from "../components/HelpCard";
import PaymentOpCard from "../components/PaymentOpCard";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden scroll-smooth">
      <Navbar />
      <section className="flex flex-col text-primary px-5.5">
        <h1 className="pt-14 text-5xl font-semibold">Store</h1>
        <div className="flex flex-col pt-4 pb-7">
          <p className="text-[21px] font-semibold">
            The best way to buy the products you love.
          </p>
          <a
            href=""
            className="pt-6 text-sm text-accent flex items-center gap-0.5"
          >
            <span>Find an Apple Store</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>
      <section className="pt-4 pb-10 flex flex-nowrap overflow-x-scroll px-5.5">
        <CategoryCard title="Mac" />
        <CategoryCard title="iPhone" />
        <CategoryCard title="iPad" />
        <CategoryCard title="Apple Watch" />
        <CategoryCard title="AirPods" />
        <CategoryCard title="Airtag" />
        <CategoryCard title="Apple TV 4K" />
        <CategoryCard title="HomePod" />
        <CategoryCard title="Accessories" />
      </section>
      <section className="flex flex-col text-primary">
        <p className="text-[21px] font-semibold pb-2 px-5.5">
          The latest.{" "}
          <span className="text-secondary">
            Take a look at what's new right now
          </span>
        </p>
        <section className="flex gap-5 overflow-scroll pt-4 px-5.5 pb-10">
          <LatestCard
            title="iPhone 17 Pro"
            subTitle="All out Pro"
            prize="134900"
            textColor="white"
          />
          <LatestCard
            title={`MacBook Pro 14`}
            subTitle="Supercharged by M5"
            prize="169900"
          />
          <LatestCard
            title="iPhone Air"
            subTitle="The thinnest iPhone ever."
            prize="119900"
            textColor="black"
          />
          <LatestCard title="iPad Pro" subTitle="Mmmmm. Power." prize="99900" />
          <LatestCard
            title="iPhone 17"
            subTitle="Magichromatic"
            prize="82900"
            textColor="black"
          />
          <LatestCard
            title="Apple Watch Series 11"
            subTitle="The ultimate way to watch your health."
            prize="46900"
            textColor="black"
          />
          <LatestCard
            title="Apple Watch SE 3"
            subTitle="Walk it. Talk it. Track it. Love it."
            prize="25900"
            textColor="black"
          />
          <LatestCard
            title="Apple Watch Ultra 3"
            subTitle="Personal beast."
            prize="89900"
          />
          <LatestCard
            title="AirPods Pro 3"
            subTitle="The world's best in-ear. Active Noise Cancellation."
            prize="25900"
            textColor="black"
          />
          <LatestCard
            title="Explore iPhone accessories"
            subTitle=""
            prize=""
            textColor="black"
          />
        </section>
      </section>
      <section className="flex flex-col text-primary">
        <p className="text-[21px] font-semibold pb-2 px-5.5">
          Help is here.{" "}
          <span className="text-secondary">
            Whenever and however you need it.
          </span>
        </p>
        <section className="flex gap-5 overflow-scroll pt-4 px-5.5 pb-10">
          <HelpCard
            subTitle="Shop with a Specialist over video"
            description="Choose your next device in a guided, one-way video session."
            textColor="black"
          />
          <HelpCard
            title="apple specialist"
            subTitle="Shop one on one with a Specialist online"
            description=""
            textColor="black"
          />
          <HelpCard
            title="today at apple"
            subTitle="Explore Apple Intelligence"
            description="Come and try it for yourself in a free session at the Apple Store."
            textColor="black"
          />
          <HelpCard
            title="today at apple"
            subTitle="Join free sessions at your Apple Store."
            description="Learn about the latest features and how to go further with your Apple devices."
            textColor="black"
          />
          <HelpCard
            title="small business"
            subTitle="From enterprise to small business, we'll work with you"
            textColor="white"
          />
          <HelpCard
            title="personal setup"
            subTitle="Set up your new device with help from a Specialist"
            description="Let us guide you through data transfer, the latest features and more, in an online, one-to-one session."
            textColor="black"
          />
          <HelpCard
            title="watch and learn"
            subTitle="Need support? our teams are here for you"
            textColor="black"
          />
        </section>
      </section>
      <section className="flex flex-col text-primary">
        <p className="text-[21px] font-semibold pb-2 px-5.5">
          The Apple Store difference.{" "}
          <span className="text-secondary">
            Even more reasons to shop with us.
          </span>
        </p>
        <section className="flex gap-5 overflow-scroll pt-4 px-5.5 pb-10">
          <PaymentOpCard
            color="green"
            text="No Cost EMI. Plus Instant Cashback."
          >
            <CreditCard size={46} />
          </PaymentOpCard>
          <PaymentOpCard
            accentText="Exchange your smartphone, "
            text="get ₹3350.00-₹64000.00 in credittowards a new one."
            color={'blue'}
          >
            <RefreshCcw size={46} />
          </PaymentOpCard>
          <PaymentOpCard text="No Cost EMI. Plus Instant Cashback.">
            <CreditCard size={46} />
          </PaymentOpCard>
        </section>
      </section>
    </div>
  );
}
