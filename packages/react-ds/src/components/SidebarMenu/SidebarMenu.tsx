import { usePrefix } from "../../hooks/usePrefix";
import { IconProps } from "../../interfaces/icon-props.interface";
import { Link } from "../../interfaces/link.interface";
import { Icon } from "../Icon/Icon";
import './sidebar-menu.scss';

interface SidebarMenuLink extends Link {
  icon?: IconProps;
}

interface SidebarMenuProps {
  links?: SidebarMenuLink[];
}

export const SidebarMenu = ({
  links,
}: SidebarMenuProps) => {
  const prefix = usePrefix();

  const renderSidebarMenuLink = (link, index) => {
    return <div className='link' key={index} >
      {link.icon &&
        <div className="icon">
          <Icon {...link.icon}></Icon>
        </div>
      }
      <div className='label'>{link.children}</div>
    </div>
  }

  const sidebarMenuMarkup = 
    <div className={`${prefix}--sidebar-menu`}>
      {links?.map((link, index) => renderSidebarMenuLink(link, index))}
    </div>
  ;

  return sidebarMenuMarkup;
}