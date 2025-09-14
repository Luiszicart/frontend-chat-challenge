import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { HomeTemplateProps } from "./HomeTemplate.types";
import {
  Wrapper,
  Header,
  Main,
  Copy,
  Actions,
  Bottom,
  Orb,
  ActionButton,
} from "./HomeTemplate.styles";
import { HomeTopBar } from "../../molecules/HomeTopBar";
import { HomeBottomMenuBar } from "../../organisms/HomeBottomMenuBar";

export const HomeTemplate: React.FC<HomeTemplateProps> = ({
  className,
  style,
}) => {
  const navigate = useNavigate();

  const [animating, setAnimating] = useState(false);

  const handleOrbClick = () => {
    setAnimating((prev) => !prev);
  };

  return (
    <Wrapper data-testid="home-template" className={className} style={style}>
      <Header>
        <HomeTopBar
          title="Iris"
          style={{ color: "#FFFFFF" }}
          onMenuClick={() => {}}
        />
      </Header>

      <Main>
        <Orb
          aria-label="Start voice experience"
          onClick={handleOrbClick}
          $animating={animating}
        />

        <Copy>
          Chat with Iris. The more you engage, the more you’ll build
          self-awareness—and move through life with clarity and confidence.
        </Copy>

        <Actions>
          <ActionButton
            onClick={() => navigate("/voice")}
            icon={
              <img
                src="src/assets/voiceIcon.png"
                alt=""
                width={20}
                height={20}
                style={{ display: "block" }}
              />
            }
          >
            Talk
          </ActionButton>
          <ActionButton
            variant="ghost"
            onClick={() => navigate("/text")}
            icon={
              <img
                src="src/assets/textIcon.png"
                alt=""
                width={20}
                height={20}
                style={{ display: "block" }}
              />
            }
          >
            Text
          </ActionButton>
        </Actions>
      </Main>

      <Bottom>
        <HomeBottomMenuBar
          items={[
            {
              key: "insights",
              label: "Insights",
              to: "/insights",
              ariaLabel: "Insights",
              icon: (
                <img
                  src="src/assets/lightbulb.png"
                  alt=""
                  width={20}
                  height={20}
                  style={{ display: "block" }}
                />
              ),
            },
            {
              key: "chat",
              label: "Chat",
              to: "/text",
              ariaLabel: "Chat",
              icon: (
                <img
                  src="src/assets/frame.png"
                  alt=""
                  width={20}
                  height={20}
                  style={{ display: "block" }}
                />
              ),
            },
            {
              key: "iris",
              label: "Iris",
              to: "/",
              ariaLabel: "Iris",
              icon: (
                <img
                  src="src/assets/iris.png"
                  alt=""
                  width={20}
                  height={20}
                  style={{ display: "block" }}
                />
              ),
            },
            {
              key: "explore",
              label: "Explore",
              to: "/explore",
              ariaLabel: "Explore",
              icon: (
                <img
                  src="src/assets/discover.png"
                  alt=""
                  width={20}
                  height={20}
                  style={{ display: "block" }}
                />
              ),
            },
          ]}
          activeKey="iris"
        />
      </Bottom>
    </Wrapper>
  );
};
