import React from "react";
import { LogoContainer, LogoImg } from "./Logo.styled";
import logoDesktop from "../../images/logo-desktop@1x.png";
import logoDesktop2x from "../../images/logo-desktop@2x.png";

import LogoMob1x from "../../images/logo-mob@1x.png";
import LogoMob2x from "../../images/logo-mob@2x.png";

export const Logo: React.FC = () => {
  return (
    <LogoContainer>
      <picture>
        <source
          srcSet={`${logoDesktop} 1x, ${logoDesktop2x}  2x`}
          type="image/png"
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${LogoMob1x} 1x, ${LogoMob2x}  2x`}
          type="image/png"
          media="(min-width: 320px)"
        />
        <LogoImg src={LogoImg} alt="Rick and Morty" loading="lazy" />
      </picture>
    </LogoContainer>
  );
};
