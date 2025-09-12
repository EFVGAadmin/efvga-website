declare module "hamburger-react" {
  import * as React from "react";

  export interface HamburgerProps {
    toggled: boolean;
    toggle: (toggled: boolean) => void;
    size?: number;
    color?: string;
    distance?: string | number;
    duration?: number;
    easing?: string;
    rounded?: boolean;
    label?: string;
  }

  export const Squash: React.FC<HamburgerProps>;
  export const Spin: React.FC<HamburgerProps>;
  export const Squeeze: React.FC<HamburgerProps>;
  export const Twirl: React.FC<HamburgerProps>;
  export const Elastic: React.FC<HamburgerProps>;
  export default React.FC<HamburgerProps>;
}
