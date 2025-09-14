import React from "react";
import type { AppTopBarProps } from "./AppTopBar.types";
import { Bar, Left, Center, Right } from "./AppTopBar.styles";
import { Typography, Button } from "../../atoms";
import { TalkTextSwitch } from "../../molecules";

export const AppTopBar: React.FC<AppTopBarProps> = ({
  heading,
  showModeSwitch = false,
  mode,
  onModeChange,
  rightAction,
  menuAriaLabel = "Open menu",
  onMenuClick,
  className,
  style,
  ...rest
}) => {
  return (
    <Bar
      data-testid="app-top-bar"
      className={className}
      style={style}
      {...rest}
    >
      <Left>
        {typeof heading === "string" ? (
          <Typography
            as="h1"
            variant="h1"
            weight="semibold"
            data-testid="app-top-bar-heading"
          >
            {heading}
          </Typography>
        ) : (
          heading
        )}
      </Left>

      <Center data-testid="app-top-bar-center">
        {showModeSwitch && mode && onModeChange ? (
          <TalkTextSwitch value={mode} onChange={onModeChange} />
        ) : null}
      </Center>

      <Right data-testid="app-top-bar-right">
        {rightAction ?? (
          <Button
            iconOnly
            ariaLabel={menuAriaLabel}
            onClick={onMenuClick}
            variant="ghost"
            data-testid="app-top-bar-menu"
            icon={<span aria-hidden>⋮</span>}
          />
        )}
      </Right>
    </Bar>
  );
};
