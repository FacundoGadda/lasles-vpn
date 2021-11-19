import React, { useState } from "react";
import Button from "../../components/Button";
import Card from "./Card";
import CustomerCard from "./CustomerCard";

import illustration from "../../assets/Illustration 1.png";
import illustration2 from "../../assets/Illustration 2.png";
import userLogo from "../../assets/user.png";
import serverLogo from "../../assets/server.png";
import locationLogo from "../../assets/location.png";
import global from "../../assets/Huge Global.png";
import sponsored from "../../assets/Sponsored.png";
import logo from "../../assets/logo.png";

import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

import { useMediaQuery } from "react-responsive";

import mock from "./mocked";

import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
  Dots,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import "./home.scss";

const Hero = () => {
  const [info] = useState(mock);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1199px)" });

  return (
    <>
      <div className="container">
        <div className="row d-flex mt-5 align-items-center">
          <div className="col-md-12 col-lg-6">
            <div className="col-xl-12 col-xxl-10">
              <h1 className="text-center text-sm-start lh-sm">
                Want anything to be easy with{" "}
                <span className="fw-bold">LaslesVPN.</span>
              </h1>
            </div>
            <p className="mt-4 text-center text-sm-start text-secondary">
              Provide a network for all your needs with ease and fun using
              <strong> LaslesVPN</strong> discover interesting features from us.
            </p>
            <div className="mt-3 mt-md-4 mt-lg-5">
            <Button styles="primary-button" text="Get Started" />
            </div>

          </div>
          <div className="col-md-12 col-lg-6 d-flex justify-content-center">
            <img
              src={illustration}
              className="img-fluid responsive-image res-mt"
              alt="computer illustration"
            />
          </div>
        </div>
      </div>
      <div className="container-md">
        <div className="row cards mx-1 d-flex justify-content-center">
          <div className="d-flex justify-content-around flex-column flex-sm-row hero-card">
            <div className="d-flex align-items-center">
              <img src={userLogo} className="me-4" alt="user logo" />
              <div>
                <h3 className="fw-bold mb-1">90+</h3>
                <p className="text-muted mb-0">Users</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={locationLogo} className="me-4" alt="user logo" />
              <div>
                <h3 className="fw-bold mb-1">30+</h3>
                <p className="text-muted mb-0">Locations</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img src={serverLogo} className="me-4" alt="user logo" />
              <div>
                <h3 className="fw-bold mb-1">50+</h3>
                <p className="text-muted mb-0">Servers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row d-flex align-items-center mb-0 mb-lg-5">
          <div className="col-md-12 col-lg-6 d-flex justify-content-center">
            <img
              src={illustration2}
              className="img-fluid responsive-image res-mb"
              alt="illustration 2"
            />
          </div>
          <div className="col-md-12 col-lg-5 ms-0 ms-lg-5">
            <div className="col-12 col-xl-10">
              <h2 className="lh-base mb-3 text-center text-sm-start">
                We Provide Many Features You Can Use
              </h2>
            </div>
            <div className="col-12">
              <p className="text-secondary mb-3 text-center text-sm-start">
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </p>
            </div>
            <ul className="d-flex flex-column align-items-sm-start align-items-center">
              <div>
                <li>
                  <AiFillCheckCircle
                    color="#2FAB73"
                    size="25"
                    className="me-2"
                  />
                  Powerfull online protection.
                </li>
                <li>
                  <AiFillCheckCircle
                    color="#2FAB73"
                    size="25"
                    className="me-2"
                  />
                  Internet without borders.
                </li>
                <li>
                  <AiFillCheckCircle
                    color="#2FAB73"
                    size="25"
                    className="me-2"
                  />
                  Supercharged VPN.
                </li>
                <li>
                  <AiFillCheckCircle
                    color="#2FAB73"
                    size="25"
                    className="me-2"
                  />
                  No specific time limits.
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-container">
        <div className="container">
          <h2 className="text-center pd-top">Choose Your Plan</h2>
          <p className="text-center mb-5">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
          <div
            className="row d-flex justify-content-center mx-2 mx-sm-0"
            style={{ gap: 40 }}
          >
            {info.cards.map((item, i) => (
              <Card title={item.title} li={item.li} plan={item.plan} />
            ))}
          </div>
          <br />
          <br />
        </div>
        <div className="container">
          <div className="row mt-3 mt-md-5">
            <div className="col d-flex flex-column align-items-center">
              <div className="col-12 col-lg-6 col-xl-4">
                <h2 className="text-center lh-base">
                  Huge Global Network of Fast VPN
                </h2>
              </div>
              <div className="col-12 col-lg-7 col-xl-5">
                <p className="text-center mb-5">
                  See <strong>LaslesVPN</strong> everywhere to make it easier
                  for you when you move locations.
                </p>
              </div>
              <img
                src={global}
                className="img-fluid mt-2 mt-md-5"
                alt="global"
              />
              <img
                src={sponsored}
                className="img-fluid mt-5 mb-4 mb-md-5"
                alt="sponsored"
              />
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-column align-items-center">
                <div className="col-12 col-lg-8 col-xl-6 col-xxl-4">
                  <h2 className="text-center lh-base">
                    Trusted by Thousands of Happy Customer
                  </h2>
                </div>
                <div className="col-12 col-lg-7 col-xl-5">
                  <p className="text-center mb-5">
                    These are the stories of our customers who have joined us
                    with great pleasure when using this crazy feature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel
          className="mb-5"
          plugins={[
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        >
          <CustomerCard />
          <CustomerCard />
          <CustomerCard />
        </Carousel>
        <div className="container" style={{ marginBottom: -290 }}>
          <div className="row mt-60">
            <div className="col-12">
              <div className="row subscribe-card mx-2 mx-sm-0">
                <div className="col-12 col-xxl-4 text-center text-sm-start">
                  <h2>Subscribe Now for Get Special Features!</h2>
                  <p className="mt-3">Let's subscribe with us and find the fun.</p>
                </div>
                <div className="col-auto flex-grow-1 d-flex justify-content-end">
                  <Button styles="primary-button" text="Subscribe now" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-footer-container mt-150 pt-150">
          <div className="container">
            <div className="row mx-2 mx-sm-0">
              <div
                className="col-12 col-xl-5 d-flex flex-column justify-content-between"
                style={{ height: 270 }}
              >
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <div className="col-12 col-lg-10 col-xxl-8">
                  <p className="mb-0 lh-lg">
                    <strong>LaslesVPN</strong> is a private virtual network that
                    has unique features and has high security.
                  </p>
                </div>
                <div className="d-flex gap-3">
                  <Button
                    styles="social-button"
                    icon={<FaFacebookF color="red" size="20"/>}
                  />
                  <Button
                    styles="social-button"
                    icon={<FaTwitter color="red" size="20"/>}
                  />
                  <Button
                    styles="social-button"
                    icon={<TiSocialInstagram color="red" size="25"/>}
                  />
                </div>
                <div>
                  <p className="text-muted">©2020LaslesVPN</p>
                </div>
              </div>
              {!isTabletOrMobile && (
                <>
                  <div className="col-2">
                    <h4 className="mt-2 mb-3">Product</h4>
                    <ul>
                      <li>Download</li>
                      <li>Pricing</li>
                      <li>Locations</li>
                      <li>Server</li>
                      <li>Countries</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    <h4 className="mt-2 mb-3">Engage</h4>
                    <ul>
                      <li>LaslesVPN ?</li>
                      <li>FAQ</li>
                      <li>Tutorials</li>
                      <li>About Us</li>
                      <li>Privacy Policy</li>
                      <li>Terms of Service</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <h4 className="mt-2 mb-3">Earn Money</h4>
                    <ul>
                      <li>Affiliate</li>
                      <li>Become Partner</li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
