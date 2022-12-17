import {ReactNode} from "react";
import classNames from 'classnames';

import './container.scss';

interface ContainerProps {
  children: ReactNode,
  className?: string
}

export const Container = ({ className = '', children, ...attrs }: ContainerProps) => {
  const classes = classNames('ui-container', className)

  return (
    <div className={classes} {...attrs}>
      { children }
    </div>
  );
};
