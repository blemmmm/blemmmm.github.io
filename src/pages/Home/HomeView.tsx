import React from "react";
import { Row, Col, Typography, Button, Space } from "antd";
import HeroSVG from "@assets/hero.svg";
import PortfolioSVG from "@assets/portfolio.svg";
import ImageHippo from "@assets/imagehippo.jpg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="flex flex-col justify-center">
      <Row gutter={24} className="h-[70vh] my-10 ">
        <Col span={13}>
          <div className="flex flex-col">
            <Typography.Text className="font-black text-6xl mb-2">
              Bringing your ideas to life, one line of code at a time.
            </Typography.Text>
            <Typography.Text className="font-light text-2xl mt-1 ml-1">
              Kickstart your brand and business with my expertise.
            </Typography.Text>
          </div>
        </Col>
        <Col span={11}>
          <div className="float-right">
            <img src={HeroSVG} alt="hero" />
          </div>
        </Col>
        <Button
          type="primary"
          className="bg-[#563156] h-10 w-52 flex justify-center items-center"
          href="#recent-work"
        >
          Explore my work
        </Button>
      </Row>
      <Row
        gutter={24}
        className="my-10 h-[50vh] flex items-center bg-[#E6E6E6]"
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
              Identifies and fixes common problems and bugs that affects site's
              performance, accessbility and user experience.
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
              Creates social media contents and techincal marketing materials
              (video editing and graphics).
            </p>
          </div>
        </Col>
      </Row>
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
            <div className="grid grid-cols-7 gap-10 my-20">
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
                <Icon icon="logos:fastify-icon" width={50} />
                <span className="mx-2">Fastify</span>
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
            </div>
          </div>
        </Space>
      </Row>
      <Row gutter={24} className="my-20 py-10 h-[50vh]" id="recent-work">
        <Col span={12}>
          <div className="float-left">
            <img src={PortfolioSVG} alt="portfolio" />
          </div>
        </Col>
        <Col span={12} className="flex flex-col items-center justify-center">
          <Typography.Text className="font-black text-6xl mb-2">
            Recent Work
          </Typography.Text>
        </Col>
      </Row>
      {/* <Row gutter={24} className="my-10">
        <Col span={12}>
          <div>
            <img
              src="https://imagehippo.blemmmm.xyz/i/cae88433a1048cc003a510b41d996981529974a7c285f20bd96977aa.JPG"
              alt="project"
            />
            <Typography.Text className="font-bold text-3xl mt-2">
              HippoDirect - eCommerce Storefront with TypeSense Search Engine
            </Typography.Text>
          </div>
        </Col>
        <Col span={12}>
          <img src={ImageHippo} alt="imagehippo" />
          <Typography.Text className="font-bold text-3xl mt-2">
            ImageHippo - Free Image Upload
          </Typography.Text>
        </Col>
      </Row> */}
    </div>
  );
};

export default HomeView;
