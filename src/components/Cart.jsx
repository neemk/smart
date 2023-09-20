import Button from "./Button";

export default function Cart() {
  return (
    <div className="px-2">
      <div className="flex justify-around pt-10">
        <div className="flex flex-col w-full max-w-[1100px]">
          <div className="flex flex-col lg:flex-row">
            <div className="px-2 basis-8/12">
              <p className="text-2xl font-normal">Bag</p>
              <div className="flex flex-col">
                <div className="flex py-6">
                  <figure className="pr-4 w-[96px] lg:w-[180px]">
                    <img
                      src="https://secure-images.nike.com/is/image/DotCom/CW2288_111?align=0,1&cropN=0,0,0,0&resMode=sharp&bgc=f5f5f5&wid=150&fmt=jpg"
                      alt="nike shoes"
                    />
                  </figure>
                  <div className="flex flex-col grow">
                    <div className="flex flex-row justify-between">
                      <div>
                        <h3>Air Jordan 1 Low</h3>
                        <p>Men's Shoes</p>
                        <p>White/ Wild Berry</p>
                        <div className="flex">
                          <div>
                            <span>Size</span>
                            <select id="sizes">
                              <option value="red">Red</option>
                              <option value="green">6 (EU 40000)</option>
                              <option value="blue">Blue</option>
                            </select>
                          </div>
                          {/* <div>
                          <span>Quantity</span>
                          <select id="quantity">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </select>
                        </div> */}
                        </div>
                      </div>
                      <div>
                        <div>
                          <span>MRP: ₹ 8 995</span>
                          <span> ₹ 7 647</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p>Like / Delete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 basis-4/12">
              <h3 className="text-2xl font-normal mb-6">Summary</h3>
              <div className="flex justify-between mb-2">
                <p>Subtotal</p>
                <div>
                  <span>₹ 7 647</span>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <p>Estimated Delivery & Handling</p>
                <div>
                  <span>₹ 1 250</span>
                </div>
              </div>
              <div className="flex justify-between border-y border-solid py-4 my-3">
                <p>Total</p>
                <div>
                  <span>₹ 8 897</span>
                </div>
              </div>
              <div>
                <Button className="btn--add-to-bag">Guest Checkout</Button>
              </div>
            </div>
          </div>
          <div>
            <p>placeholder text here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
