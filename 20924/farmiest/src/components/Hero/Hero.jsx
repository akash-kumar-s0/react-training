import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-left-wing">
          <div className="hero-org-img">
            <img src="./organic.png" alt="" />
          </div>
          <div className="flex flex-col gap-20">
            <div className="hero-texts">
              <div className="hero-text">Live ON</div>
              <div className="hero-text text-[#10B981]">
                fruits & Vegitables
              </div>
              <div className="hero-text">to live healthy</div>
              <div className="hero-text-ul">100% Happy & fresh</div>
            </div>
            <div className="shop-btn">
              <button className="p-3 px-8 rounded-[100px] bg-black">
                <span className="btn">Shop Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="hero-person-img">
          <img src="./image.png" alt="" />
        </div>
      </div>

      <div className="hero-features px-9">
        <div className="feature">
          <img src="./grocery.svg" alt="" />
          <div className="ftr-texts">
            <div className="ftr-text">Grosary </div>
            <div className="ftr-p-text">Fresh grocery delivered</div>
          </div>
        </div>
        <div className="feature">
          <img src="./salad.svg" alt="" />
          <div className="ftr-texts">
            <div className="ftr-text">salary</div>
            <div className="ftr-p-text">Fresh grocery delivered</div>

          </div>
        </div>
        <div className="feature">
          <img src="./cart.svg" alt="" />
          <div className="ftr-texts">
            <div className="ftr-text">cart</div>
            <div className="ftr-p-text">Fresh grocery delivered</div>

          </div>
        </div>
        <div className="feature">
          <img src="./grocery-1.svg" alt="" />
          <div className="ftr-texts">
            <div className="ftr-text">grocery</div>
            <div className="ftr-p-text">Fresh grocery delivered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
