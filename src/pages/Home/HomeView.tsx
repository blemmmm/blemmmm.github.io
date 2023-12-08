import {
  CopyOutlined,
  GithubFilled,
  LinkedinFilled,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import HeroSVG from "@assets/hero.svg";
import ImageHippo from "@assets/imagehippo.jpg";
import PortfolioSVG from "@assets/portfolio.svg";
import ContactLogo from "@assets/undraw_personal_email_svg.svg";
import { Icon } from "@iconify/react";
import { Button, Col, Row, Space, Typography, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { animated, useSpring } from "react-spring";

const HomeView = () => {
  const { opacity, transform } = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-50px)" },
    delay: 500,
  });

  const animationProps = {
    opacity,
    transform,
  };

  const { opacity: upOpacity, transform: upTransform } = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateX(0px)" },
    delay: 2000,
  });

  return (
    <div className="flex flex-col justify-center">
      <Row
        gutter={24}
        className="md:h-[70vh] my-10 h-full grid md:grid-cols-2 grid-cols-1 gap-4"
      >
        <Col>
          <animated.div style={animationProps} className="flex flex-col">
            <div className="flex flex-col">
              <Typography.Text className="font-black text-6xl mb-2">
                Blessly Pera
              </Typography.Text>
              <Typography.Text className="font-semibold text-xl mt-1 ml-1 text-[#563156]">
                Front-end Web Developer
              </Typography.Text>

              <Typography.Text className="font-light text-lg mt-2 ml-1">
                With a solid history of working in the AI, Media
                Monitoring/Analytics, and Ecommerce industries, I bring my
                expertise in front-end development to create engaging and
                user-friendly websites. <br />I speak Javascript (ReactJS /
                TypeScript).
              </Typography.Text>
            </div>
          </animated.div>
        </Col>
        <Col>
          <animated.div
            style={{ ...animationProps, transform: "translateX(50px)" }}
            className="flex flex-col"
          >
            <div className="md:float-right float-left">
              <img src={HeroSVG} alt="hero" />
            </div>
          </animated.div>
        </Col>
        <animated.div style={animationProps} className="flex flex-col">
          <Button
            type="primary"
            className="bg-[#563156] h-10 md:w-52 w-full flex justify-center items-center"
            href="#recent-projects"
          >
            Explore my work
          </Button>
        </animated.div>
      </Row>
      <animated.div
        style={useSpring({
          opacity: 1,
          transform: "translateY(0)",
          from: { opacity: 0, transform: "translateY(50px)" },
          delay: 2000,
        })}
        className="hidden"
      >
        <Row
          gutter={24}
          className="my-10 h-[50vh] flex items-center bg-[#f2f2f2] rounded-lg"
        >
          <Col span={8} className="flex items-start justify-start">
            <Icon icon="mdi:react" color="#563156" width={100} />
            <div className="flex flex-col ml-2">
              <Typography.Text className="text-3xl font-bold mb-1.5">
                Development
              </Typography.Text>
              <p>
                Front-end development, landing pages, data visualization and API
                integration.
              </p>
            </div>
          </Col>
          <Col span={8} className="flex items-start justify-start">
            <Icon icon="mdi:wrench-cog" color="#563156" width={150} />
            <div className="flex flex-col mt-6 ml-1">
              <Typography.Text className="text-3xl font-bold mb-1.5">
                Optimization
              </Typography.Text>
              <p>
                Identifies and fixes common problems and bugs that affects
                site's performance, accessbility and user experience.
              </p>
            </div>
          </Col>
          <Col span={8} className="flex items-start justify-start">
            <Icon icon="mdi:responsive" color="#563156" width={100} />
            <div className="flex flex-col ml-2">
              <Typography.Text className="text-3xl font-bold mb-1.5">
                Content Creation
              </Typography.Text>
              <p>
                Creates product overviews and technical marketing materials.
              </p>
            </div>
          </Col>
        </Row>
      </animated.div>

      <animated.div
        style={useSpring({
          opacity: 1,
          transform: "translateY(0)",
          from: { opacity: 0, transform: "translateY(50px)" },
          delay: 3000,
        })}
      >
        <Row gutter={24} className="h-[70vh] my-20">
          <Space>
            <div className="flex flex-col">
              <Typography.Text className="font-extrabold text-4xl mb-2">
                Technology Stack
              </Typography.Text>
              <Typography.Text className="font-light text-xl mt-1 ml-1">
                I use several tried and tested technologies to provide you with
                the best services so you can focus on your business.
              </Typography.Text>
              <div className="grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-10 py-20">
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:react" width={50} />
                  <span className="mx-2">ReactJS</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:typescript-icon" width={50} />
                  <span className="mx-2">Typescript</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:javascript" width={50} />
                  <span className="mx-2">Javascript</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:html-5" width={50} />
                  <span className="mx-2">HTML</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:css-3" width={50} />
                  <span className="mx-2">CSS</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:ant-design" width={50} />
                  <span className="mx-2">Ant Design</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:tailwindcss-icon" width={50} />
                  <span className="mx-2">TailwindCSS</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:react-query-icon" width={50} />
                  <span className="mx-2">React Query</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:highcharts" width={50} />
                  <span className="mx-2">Highcharts</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:d3" width={50} />
                  <span className="mx-2">D3.js</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:axios" width={50} />
                  <span className="mx-2">Axios</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:nodejs" width={50} />
                  <span className="mx-2">NodeJS</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="devicon:express" width={50} />
                  <span className="mx-2">Express</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:git-icon" width={50} />
                  <span className="mx-2">git</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:figma" width={35} />
                  <span className="mx-2">Figma</span>
                </div>
                <div className="flex items-center text-normal font-semibold">
                  <Icon icon="logos:adobe-photoshop" width={50} />
                  <span className="mx-2">Adobe Photoshop</span>
                </div>
                <div className="flex items-end text-normal font-semibold">
                  <span className="mx-2">and more...</span>
                </div>
              </div>
            </div>
          </Space>
        </Row>
      </animated.div>

      <animated.div
        style={useSpring({
          opacity: 1,
          transform: "translateY(0)",
          from: { opacity: 0, transform: "translateY(50px)" },
          delay: 2000,
        })}
        id="recent-projects"
      >
        <Row
          gutter={24}
          className="md:mt-20 mt-80 mb-10 py-10 h-[80vh] flex flex-col items-center justify-center gap-2"
        >
          <Col>
            <div className="">
              <img src={PortfolioSVG} alt="portfolio" />
            </div>
          </Col>
          <Col>
            <Typography.Text className="font-black md:text-6xl text-4xl mb-2">
              Recent Projects
            </Typography.Text>
          </Col>
        </Row>
      </animated.div>

      <Row gutter={24} className="my-10 grid md:grid-cols-3 grid-cols-1">
        <Col>
          <div className="hover:brightness-50">
            <img src={ImageHippo} alt="imagehippo" className="mb-2" />
          </div>

          <Typography.Text className="font-semibold text-xl mt-2">
            ImageHippo - Free Image Upload
          </Typography.Text>
        </Col>
        <Col>
          <div className="hover:brightness-50">
            <img
              src={ImageHippo}
              alt="imagehippo"
              className="mb-2 hover:shadow-lg"
            />
          </div>

          <Typography.Text className="font-semibold text-xl mt-2">
            HippoDirect - eCommmerce Platform
          </Typography.Text>
        </Col>

        <Col>
          <div className="hover:brightness-50">
            <img
              src={ImageHippo}
              alt="imagehippo"
              className="mb-2 hover:shadow-lg"
            />
          </div>

          <Typography.Text className="font-semibold text-xl mt-2">
            groufie - simple group chat application
          </Typography.Text>
        </Col>
      </Row>

      <animated.div
        style={useSpring({
          opacity: 1,
          transform: "translateY(0)",
          from: { opacity: 0, transform: "translateY(50px)" },
          delay: 2000,
        })}
        id="contact-details"
      >
        <Row
          gutter={24}
          className="mt-20 mb-10 py-10 h-[80vh] grid md:grid-cols-2 grid-cols-1"
        >
          <Col className="place-self-end">
            <div className="md:float-left xl:h-[70vh] xl:w-[70vh] h-[40vh] w-[40vh] mb-24 xl:mb-0">
              <img src={ContactLogo} alt="contact-logo" />
            </div>
          </Col>
          <Col className="flex flex-col items-start justify-center gap-10">
            <Typography.Text className="font-black md:text-6xl text-4xl mb-4">
              Contact Details
            </Typography.Text>
            <div className="flex flex-col pl-2">
              <div className="flex items-center justify-start gap-1 group select-none">
                <MailOutlined rev={undefined} />{" "}
                <a
                  className="underline mx-2"
                  href="mailto:pera.blessly@gmail.com"
                >
                  pera.blessly@gmail.com
                </a>
                <CopyToClipboard
                  text="pera.blessly@gmail.com"
                  onCopy={() => {
                    message.destroy();
                    message.success("Copied!");
                  }}
                >
                  <CopyOutlined
                    rev={undefined}
                    className="text-xs opacity-0 group-hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
              <div className="flex items-center justify-start gap-1 group select-none">
                <MobileOutlined rev={undefined} />{" "}
                <span className="mx-2">09557497173 (SMS, Viber, WhatsApp)</span>
                <CopyToClipboard
                  text="09557497173"
                  onCopy={() => {
                    message.destroy();
                    message.success("Copied!");
                  }}
                >
                  <CopyOutlined
                    rev={undefined}
                    className="text-xs opacity-0 group-hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  />
                </CopyToClipboard>
              </div>

              <div className="flex items-center justify-start gap-1 group select-none">
                <LinkedinFilled rev={undefined} />{" "}
                <a
                  className="underline mx-2"
                  target="_blank"
                  href="https://www.linkedin.com/in/blesslypera"
                >
                  https://www.linkedin.com/in/blesslypera
                </a>
                <CopyToClipboard
                  text="https://www.linkedin.com/in/blesslypera"
                  onCopy={() => {
                    message.destroy();
                    message.success("Copied!");
                  }}
                >
                  <CopyOutlined
                    rev={undefined}
                    className="text-xs opacity-0 group-hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
              <div className="flex items-center justify-start gap-1 group select-none">
                <GithubFilled rev={undefined} />{" "}
                <a
                  className="underline mx-2"
                  target="_blank"
                  href="https://github.com/blemmmm"
                >
                  https://github.com/blemmmm
                </a>
                <CopyToClipboard
                  text="https://github.com/blemmmm"
                  onCopy={() => {
                    message.destroy();
                    message.success("Copied!");
                  }}
                >
                  <CopyOutlined
                    rev={undefined}
                    className="text-xs opacity-0 group-hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
            </div>
          </Col>
        </Row>
      </animated.div>
    </div>
  );
};

export default HomeView;
