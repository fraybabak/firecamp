import { FC } from 'react';
import cx from 'classnames';
import { UserCircle2 } from 'lucide-react';
// import ReactTooltip from 'react-tooltip';

const ActionItem: FC<IActionItem> = ({
  id = '',
  className = '',
  style = {},
  active = false,
  onClick = () => {},
  icon = '',
  tooltip = '',
}) => {

  return (
    <div
      tabIndex={1}
      className={cx(
        'h-12 flex justify-center items-center cursor-pointer relative text-2xl action-item',
        {
          'text-activityBar-foreground-inactive hover:text-activityBar-foreground':
            active == false,
        },
        {
          'before:block before:z-0 before:content-[""] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0.5 before:bg-activityBar-border-active text-activityBar-foreground bg-activityBar-background-active':
            active == true,
        },
        className
      )}
      style={style}
      onClick={onClick}
      data-tip={tooltip}
      data-for={id}
    >
      {!!icon ? (
        icon
      ) : (
        <UserCircle2
          /*title="Account"
              size={24}*/
          tabIndex={-1}
          data-tip={tooltip}
          data-for={id}
        />
      )}
       {/* @ts-ignore
       <ReactTooltip
        data-delay-hide='10000'
        id={id}
        className="bg-app-foreground-inactive"
        place="right"
        effect="float" /> */}
    </div>
  );
};

export default ActionItem;

ActionItem.defaultProps = {
  id: null,
  className: null,
  active: false,
  icon: '',
  tooltip: '',
};

export interface IActionItem {
  /**
   * Is this the principal call to action on the page?
   */
  id?: string;
  /**
   * Add class name to show custom styling
   */
  className?: string;
  /**
   * apply css styles
   */
  style?: any;
  /**
   * to show if item active
   */
  active: boolean;
  /**
   * To show icon for action
   */
  icon: string;
  /**
   * Add a tooltip
   */
  tooltip: string;

  onClick: () => void;
}
