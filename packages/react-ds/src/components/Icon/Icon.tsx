import { IconEnum } from '../../assets/icon.enum';
import { blueDotIcon } from '../../assets/icons/blue_dot';
import { greenDotIcon } from '../../assets/icons/green_dot';
import { filterIcon } from '../../assets/icons/filter_icon';
import { chevronIcon } from '../../assets/icons/chevron_icon';
import { octgIcon } from '../../assets/icons/octg_icon';
import { yellowDotIcon } from '../../assets/icons/yellow_dot';
import { burgerIcon } from '../../assets/icons/burger_icon';
import { burgerOpenIcon } from '../../assets/icons/burger_open_icon';
import { cableProtectorIcon } from '../../assets/icons/cable_protector_icon';
import { casingTubingIcon } from '../../assets/icons/casing_tubing_icon';
import { energyIndustryIcon } from '../../assets/icons/energy_industry_icon';
import { geothermalIcon } from '../../assets/icons/geothermal_icon';
import { linepipeIcon } from '../../assets/icons/linepipe_icon';
import { oilGasIcon } from '../../assets/icons/oil_gas_icon';
import { redDotIcon } from '../../assets/icons/red_dot';
import { usePrefix } from '../../hooks/usePrefix';

interface IconProps {
  /** Name of the icon (should be included in IconEnum) */
  name?: IconEnum | string;

  /** Width of the icon */
  width?: string;

  /** Height of the icon */
  height?: string;

  /** ViewBox value of the icon */
  viewBox?: string;

  /** Color of the icon */
  fill?: string;
}

export const Icon = ({
  name,
  width,
  height,
  viewBox,
  fill,
}: IconProps) => {
  const iconProps = {width, height, viewBox, fill};
  console.log(iconProps);
  const prefix = usePrefix();

  const getIcon = () => {
    switch (name) {
        case IconEnum.YELLOW_DOT:
            return yellowDotIcon({...iconProps});
        case IconEnum.BLUE_DOT:
            return blueDotIcon({...iconProps});
        case IconEnum.GREEN_DOT:
            return greenDotIcon({...iconProps});
          case IconEnum.RED_DOT:
            return redDotIcon({...iconProps});
        case IconEnum.FILTER:
            return filterIcon({...iconProps});
        case IconEnum.CHEVRON:
            return chevronIcon({...iconProps});
        case IconEnum.BURGER:
            return burgerIcon({...iconProps});
        case IconEnum.BURGER_OPEN:
            return burgerOpenIcon({...iconProps});
        case IconEnum.OCTG:
            return octgIcon({...iconProps});
        case IconEnum.CABLE_PROTECTOR:
            return cableProtectorIcon({...iconProps});
        case IconEnum.CASING_TUBING:
            return casingTubingIcon({...iconProps});
        case IconEnum.ENERGY_INDUSTRY:
            return energyIndustryIcon({...iconProps});
        case IconEnum.GEOTHERMAL:
            return geothermalIcon({...iconProps});
        case IconEnum.LINEPIPE: 
            return linepipeIcon({...iconProps});
        case IconEnum.OIL_GAS:
            return oilGasIcon({...iconProps});
    }
  }

  return (
      <div className={`${prefix}--icon`}>
          {getIcon()}
      </div>
  );
}