import Links from "./Links";

const DesktopMenu = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <div className="d-none d-lg-flex justify-content-center ">
        <ul className="navbar-nav flex-row gap-4">
          <Links setMenuOpen={"do nothing"} />
        </ul>
      </div>
    </>
  );
};

export default DesktopMenu;
