
import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { Layout, Row, Col, Button, Typography, Space, Image } from "antd";
import { AppleFilled, AndroidFilled } from "@ant-design/icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQ from "./FAQ";
import Features from "./Features";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

interface FooterLinks {
  product: string[];
  company: string[];
  legal: string[];
}

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const footerLinks: FooterLinks = {
    product: ["Features", "Download", "Pricing", "Roadmap"],
    company: ["About", "Blog", "Careers", "Contact"],
    legal: ["Privacy", "Terms", "Security"],
  };

  return (
    <>
      <Helmet>
        <title>Markiit | All-in-One Commerce Platform</title>
      </Helmet>

      {/* Global Styles */}
      <style>{`
        :root {
          --primary: #2563eb;
          --primary-light: #3b82f6;
          --primary-dark: #1d4ed8;
          --gradient: linear-gradient(135deg, var(--primary-light), var(--primary-dark));
          --text: #1f2937;
          --text-light: #6b7280;
          --bg: #f9fafb;
          --white: #ffffff;
          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-200: #e5e7eb;
        }
        body, html {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text);
          background-color: var(--bg);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
        }
        .app-layout {
          min-height: 100vh;
          overflow-x: hidden;
        }
        .app-header {
          margin: 0;
          padding: 0;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          position: fixed;
          width: 100%;
          background: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .content-wrapper {
          padding-top: 0px; /* Prevents hero from being hidden under header */
        }
        .hero-section {
          background: var(--gradient);
          padding: 100px 0 80px;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .hero-img {
          max-width: 100%;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .stats-section {
          background: var(--gradient);
          padding: 60px 0;
          color: white;
        }
        .testimonials-section {
          background-color: var(--gray-50);
          padding: 80px 0;
        }
        .testimonial-card {
          height: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .testimonial-text {
          font-style: italic;
          position: relative;
          padding-left: 20px;
        }
        .testimonial-text::before {
          content: '"';
          font-size: 48px;
          position: absolute;
          left: -10px;
          top: -20px;
          opacity: 0.1;
          line-height: 1;
        }
        .cta-section {
          background: var(--gradient);
          padding: 80px 0;
          color: white;
          text-align: center;
        }
        .download-btn {
          height: 52px;
          padding: 0 24px;
          border-radius: 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .app-store-btn {
          background: black;
          border-color: black;
          color: white;
        }
        .app-store-btn:hover {
          background: #333 !important;
          border-color: #333 !important;
          color: white !important;
        }
        .play-store-btn {
          background: white;
          border-color: white;
          color: var(--primary);
        }
        .play-store-btn:hover {
          background: #f0f0f0 !important;
          border-color: #f0f0f0 !important;
          color: var(--primary) !important;
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: 80px 0 60px;
          }
          .download-buttons {
            flex-direction: column;
          }
          .download-btn {
            width: 100%;
          }
        }
      `}</style>

      <Layout className="app-layout">
        {/* Header */}
        <div className="app-header">
          <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        <Content className="content-wrapper">
          {/* Hero Section */}
          <section className="hero-section">
            <div style={{ position: "relative", zIndex: 1 }}>
              <Row justify="center" align="middle" gutter={[40, 40]}>
                <Col xs={24} md={12} style={{ textAlign: "center" }}>
                  <Title
                    level={1}
                    style={{
                      color: "white",
                      marginBottom: 24,
                      fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    }}
                  >
                    Revolutionize Your Commerce Experience
                  </Title>
                  <Paragraph
                    style={{
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: "1.125rem",
                      marginBottom: 40,
                    }}
                  >
                    Markiit combines selling, saving, and social features in one
                    powerful platform. Join thousands of users transforming
                    their financial and business lives.
                  </Paragraph>
                  <Space
                    className="download-buttons"
                    size="middle"
                    style={{ marginBottom: 40 }}
                  >
                    <Button
                      size="large"
                      className="download-btn app-store-btn"
                      href="https://apps.apple.com/app/markiit"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<AppleFilled />}
                    >
                      App Store
                    </Button>
                    <Button
                      size="large"
                      className="download-btn play-store-btn"
                      href="https://play.google.com/store/apps/details?id=com.markiit.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<AndroidFilled />}
                    >
                      Play Store
                    </Button>
                  </Space>
                </Col>
                <Col xs={24} md={12} style={{ textAlign: "center" }}>
                  <Image
                    preview={false}
                    className="hero-img"
                    src="https://img.freepik.com/free-photo/smiling-african-businesswoman-using-smartphone-mobile-banking-financial-app_74855-2660.jpg"
                    alt="Mobile App Hero Mockup"
                  />
                </Col>
              </Row>
            </div>
          </section>

          {/* Features */}
          <Features />

          {/* Stats */}
          <Stats />

          {/* Testimonials */}
          <Testimonials />

          {/* About Markiit */}
          <section
            id="about"
            style={{ padding: "80px 0", backgroundColor: "var(--gray-100)" }}
          >
            <Row justify="center" align="middle" gutter={[40, 40]}>
              <Col xs={24} md={12} style={{ textAlign: "center" }}>
                <Image
                  preview={false}
                  style={{
                    borderRadius: 16,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                  }}
                  src="https://img.freepik.com/free-photo/african-family-saving-money-piggy-bank-concept_23-2148765432.jpg"
                  alt="About Markiit Mockup"
                />
              </Col>
              <Col xs={24} md={12} style={{ textAlign: "left" }}>
                <Title level={2} style={{ marginBottom: 24 }}>
                  About Markiit
                </Title>
                <Paragraph style={{ fontSize: "1.125rem", color: "var(--text-light)" }}>
                  Markiit is more than just an app — it’s a complete ecosystem
                  that merges social networking, e-commerce, and financial
                  empowerment into one seamless platform. Whether you’re a small
                  business owner, an entrepreneur, or an everyday user, Markiit
                  gives you the tools to sell, save, and connect with others.
                </Paragraph>
                <Button type="primary" size="large" href="/about" style={{ marginTop: 20 }}>
                  Learn More
                </Button>
              </Col>
            </Row>
          </section>

          {/* FAQ */}
          <section style={{ padding: "80px 0", backgroundColor: "white" }} id="faq">
            <FAQ />
          </section>

          {/* CTA */}
          <section className="cta-section" id="download">
            <Row justify="center">
              <Col xs={24} md={20} lg={16} style={{ textAlign: "center" }}>
                <Title level={2} style={{ color: "white", marginBottom: 24 }}>
                  Ready to Transform Your Commerce Experience?
                </Title>
                <Paragraph
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1.125rem",
                    marginBottom: 40,
                  }}
                >
                  Join thousands of users who are already benefiting from
                  Markiit's powerful platform.
                </Paragraph>
                <Space className="download-buttons" size="middle">
                  <Button
                    size="large"
                    className="download-btn app-store-btn"
                    href="https://apps.apple.com/app/markiit"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<AppleFilled />}
                  >
                    App Store
                  </Button>
                  <Button
                    size="large"
                    className="download-btn play-store-btn"
                    href="https://play.google.com/store/apps/details?id=com.markiit.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<AndroidFilled />}
                  >
                    Play Store
                  </Button>
                </Space>
              </Col>
            </Row>
          </section>
        </Content>

        <Footer footerLinks={footerLinks} />
      </Layout>
    </>
  );
};

export default HomePage;



