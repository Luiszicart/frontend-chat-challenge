import React from "react";
import type {
  HomeBottomMenuBarProps,
  MenuItem,
} from "./HomeBottomMenuBar.types";
import { Bar, Item, Label } from "./HomeBottomMenuBar.styles";
import { NavLink, useLocation } from "react-router-dom";

function isActivePath(item: MenuItem, pathname: string) {
  if (!item.to) return false;
  return pathname === item.to || pathname.startsWith(item.to + "/");
}

export const HomeBottomMenuBar: React.FC<HomeBottomMenuBarProps> = ({
  items,
  activeKey,
  onSelect,
  className,
  style,
  ...rest
}) => {
  const location = (() => {
    try {
      return useLocation();
    } catch {
      return { pathname: "" } as { pathname: string };
    }
  })();

  return (
    <Bar
      data-testid="home-bottom-menu-bar"
      className={className}
      style={style}
      {...rest}
    >
      {items.map((it) => {
        const active =
          typeof activeKey === "string"
            ? activeKey === it.key
            : isActivePath(it, location.pathname);

        if (it.to) {
          return (
            <NavLink
              key={it.key}
              to={it.to}
              style={{ textDecoration: "none" }}
              aria-label={it.ariaLabel}
              data-testid={`home-bottom-menu-item-${it.key}`}
            >
              {({ isActive }) => (
                <Item as="div" active={isActive}>
                  {it.icon ?? null}
                  {typeof it.label === "string" ? (
                    <Label>{it.label}</Label>
                  ) : (
                    it.label
                  )}
                </Item>
              )}
            </NavLink>
          );
        }

        return (
          <Item
            key={it.key}
            role="button"
            type="button"
            active={active}
            aria-label={it.ariaLabel}
            onClick={() => {
              it.onClick?.();
              onSelect?.(it.key);
            }}
            data-testid={`home-bottom-menu-item-${it.key}`}
          >
            {it.icon ?? null}
            {typeof it.label === "string" ? (
              <Label>{it.label}</Label>
            ) : (
              it.label
            )}
          </Item>
        );
      })}
    </Bar>
  );
};
