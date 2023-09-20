import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function ProductDetails(props) {
  return (
    <div className="mt-24">
      <div className="flex max-w-[1200px] mx-auto">
        <div className="w-[calc(100%-456px)] mt-12">
          <div className="max-h-[669px] min-h-[455px] h-[669px] pl-12">
            <div className="w-[535px]">
              <img
                src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png"
                className="rounded-lg"
                alt="Nike Motiva"
              />
            </div>
          </div>
        </div>
        <div className="w-[456px]">
          <div className="mr-2 mt-12 pt-1 pr-12 pl-6">
            <div>
              <h1 className="text-2xl leading-5 font-bold">Air Jordan 1 Low</h1>
              <h2 className="font-medium pb-1">Men's Shoes</h2>
              <div>
                <p className="font-medium mt-3">MRP : ₹ 9 995.00</p>
                <p className="text-gray-500">incl. of taxes</p>
                <p className="text-gray-500">
                  (Also includes all applicable dues)
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div className="mb-3">
                <legend>todo</legend>
                <div className="mt-2 grid grid-cols-3 gap-[7px]">
                  {sizes.map((size) => {
                    return (
                      <div>
                        <input
                          type="radio"
                          className="invisible absolute h-[1px] w-[1px]"
                        />
                        <label
                          htmlFor=""
                          className="bg-[#F7F7F7] text-[#DDDDDD] flex justify-center items-center h-[48px] border-none outline-none shadow-[rgb(229,229,229)_0_0_0_1px] rounded"
                        >
                          UK {size} (EU 40)
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className="mt-1.5 mb-6">
                  <button className="bg-[#111111] text-[#FFFFFF] w-full min-h-[58px] py-[18px] px-[24px] rounded-[30px]">
                    Add To Bag
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
