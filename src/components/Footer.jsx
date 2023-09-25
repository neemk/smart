import { SocialIcon } from "react-social-icons";
import FooterAccordionCumList from "./FooterAccordionCumList";

const iconProps = {
  fgColor: "#000000",
  bgColor: "#7e7e7e",
  style: { height: 30, width: 30 },
};

const networks = ["twitter", "facebook", "youtube", "instagram"];

export default function Footer() {
  return (
    <footer className="bg-[#111111] min-h-[200px]">
      <div className="max-w-[1440px] mx-auto px-1.5 sm:px-5 md:px-10 pt-5 md:pt-10">
        <div className="mb-4 grid grid-cols-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="grid grid-cols-12">
              <div className="col-span-12 sm:col-span-4 md:col-span-3 border-b border-[#323232] sm:border-none">
                <FooterAccordionCumList>
                  <ul className="text-white font-ntg text-[14px]">
                    <li className="mb-3 uppercase">Find A Store</li>
                    <li className="mb-3 uppercase">Become A Member</li>
                    <li className="mb-3">Send Us Feedback</li>
                    <li className="mb-3 uppercase">Student Discounts</li>
                  </ul>
                </FooterAccordionCumList>
              </div>
              <div className="col-span-12 sm:col-span-4 md:col-span-3">
                <FooterAccordionCumList title="Get Help">
                  <ul className="text-[#7e7e7e] font-hntm text-[12px]">
                    <li className="mb-3 uppercase text-white font-ntg text-[14px] hidden sm:block">
                      Get Help
                    </li>
                    <li className="mb-3">Order Status</li>
                    <li className="mb-3">Delivery</li>
                    <li className="mb-3">Retuns</li>
                    <li className="mb-3">Payment Options</li>
                    <li className="mb-3">Contact Us</li>
                  </ul>
                </FooterAccordionCumList>
              </div>
              <div className="col-span-12 sm:col-span-4 md:col-span-3">
                <FooterAccordionCumList title="About Nike">
                  <ul className="text-[#7e7e7e] font-hntm text-[12px]">
                    <li className="mb-3 uppercase text-white font-ntg text-[14px] hidden sm:block">
                      About Nike
                    </li>
                    <li className="mb-3">News</li>
                    <li className="mb-3">Careers</li>
                    <li className="mb-3">Investors</li>
                    <li className="mb-3">Sustainability</li>
                  </ul>
                </FooterAccordionCumList>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-1 py-2 px-4">
            <ul className="flex flex-wrap justify-start sm:justify-end">
              {networks.map((network) => {
                return (
                  <li key={network} className="mr-4 sm:ml-2 sm:mr-0 md:ml-4">
                    <SocialIcon network={network} {...iconProps} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="text-white px-4 sm:p-0">TODO: copyright goes here</div>
      </div>
    </footer>
  );
}
