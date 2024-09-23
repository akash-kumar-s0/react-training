import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="left-wing">
          <div className="logo">Famiest!</div>

          <div className="nav-items">
            <div className="nav-item text-[#10B981] underline">Home</div>
            <div className="nav-item">Store <img src="./down-arrow.svg" alt="" /></div>
            <div className="nav-item">Contact</div>
            <div className="nav-item">About</div>
          </div>
        </div>

        <div className="right-wing">
          <div className="nav-items">
            
            <div className="box-l-s">
              <div className="nav-item">
                <img src="./location.svg" alt="" />
              </div>
              <div className="nav-item">
                <img src="./search.svg" alt="" />
              </div>
            </div>

            <div className="nav-item">
              <img src="./account.svg" alt="" />
              Account
            </div>
            <div className="nav-item">
              <img src="./bag.svg" alt="" />
              Bag
            </div>
            <div className="nav-item">
              <img src="./globe.svg" alt="" />
              EN
              <img src="./down-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
