import React from "react";
import type { HomeTopBarProps } from "./HomeTopBar.types";
import { Bar, Left, Right } from "./HomeTopBar.styles";
import { Typography, Button } from "../../atoms";

export const HomeTopBar: React.FC<HomeTopBarProps> = ({
  title,
  rightAction,
  menuAriaLabel = "Open menu",
  onMenuClick,
  className,
  style,
  ...rest
}) => {
  return (
    <Bar
      data-testid="home-top-bar"
      className={className}
      style={style}
      {...rest}
    >
      <Left>
        {typeof title === "string" ? (
          <Typography
            as="h1"
            variant="h1"
            weight="semibold"
            data-testid="home-top-bar-title"
          >
            {title}
          </Typography>
        ) : (
          title
        )}
      </Left>
      <Right data-testid="home-top-bar-right">
        {rightAction ?? (
          <Button
            iconOnly
            ariaLabel={menuAriaLabel}
            onClick={onMenuClick}
            variant="ghost"
            data-testid="home-top-bar-menu"
            icon={<span aria-hidden>⋮</span>}
            style={{ color: "#ffffff" }}
          />
        )}
      </Right>
    </Bar>
  );
};
