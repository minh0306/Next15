import data from "../Data/NavData.json";
import IconMUI from "../Icon/IconMUI";

const HeaderNav = () => {
  return (
    <nav className="flex justify-between items-center text-xs">
      {data.map((list, index) => (
        <div key={index} className=" flex gap-3 md:gap-1 xs:gap-1">
          {list.map((item) => (
            <div key={item.id} className="flex gap-1 items-center ">
              <div>{item.icon && <IconMUI name={item.icon} />}</div>
              <div>{item.name}</div>
              {item.childs &&
                item.childs.map((child) => (
                  <div key={child.id}>
                    <IconMUI name={child.icon} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
};
export default HeaderNav;
