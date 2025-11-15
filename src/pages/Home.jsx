import { ArrowBigUp, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
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
      <section className="pt-4 pb-10 flex flex-nowrap overflow-x-scroll scroll-smooth space-x-0 px-5.5">
        <CategoryCard title="Mac" />
        <CategoryCard title="iPhone" />
        <CategoryCard title="iPad" />
        <CategoryCard title="Apple Watch" />
        <CategoryCard title="Airpods" />
        <CategoryCard title="Airtag" />
        <CategoryCard title="Apple TV 4K" />
        <CategoryCard title="HomePod" />
        <CategoryCard title="Accessories" />
      </section>
      <section className="flex flex-col text-primary px-5.5">
        <p className="text-[21px] font-semibold pb-2">
          The latest.{" "}
          <span className="text-secondary">
            Take a look at what's new right now
          </span>
        </p>
        <section className="flex gap-5 pt-4 pb-10">
          <div className="w-[309px] h-[450px] flex flex-col bg-[url('/iphone17pro.png')] bg-contain bg-center bg-black rounded-2xl">
            <div className="p-7 text-white">
              <h3 className="pt-[23px] text-[21px] font-semibold">
                iPhone 17 Pro
              </h3>
              <div className="pt-1.5 flex flex-col">
                <p className="text-[17px] font-semibold pb-1.5">All out Pro.</p>
                <p className="text-[14px]">From ₹1349000.00*</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
