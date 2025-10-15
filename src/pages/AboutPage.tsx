

import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { 
  Row, 
  Col, 
  Card, 
  Button, 
  Avatar, 
  Typography,
  Divider
} from 'antd';
import {
  SafetyCertificateOutlined,
  RocketOutlined,
  TeamOutlined,
  DownloadOutlined,
  UserOutlined
} from '@ant-design/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { Title, Paragraph } = Typography;

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const teamMembers = [
    {
      name: 'Gabriel Hass',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years in fintech and e-commerce',
      initials: 'GH'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Technology architect with expertise in scalable systems',
      initials: 'JS'
    },
    {
      name: 'David Johnson',
      role: 'Head of Product',
      bio: 'User experience specialist focused on African markets',
      initials: 'DJ'
    }
  ];

  const values = [
    {
      title: 'Trust',
      icon: <SafetyCertificateOutlined />,
      description: 'We build secure, reliable systems that users can depend on for their business and financial needs.'
    },
    {
      title: 'Innovation',
      icon: <RocketOutlined />,
      description: 'We constantly push boundaries to create solutions that solve real African problems.'
    },
    {
      title: 'Community',
      icon: <TeamOutlined />,
      description: 'We believe in the power of connection and build tools that bring people together.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Markiit | Our Mission and Vision</title>
        <meta name="description" content="Learn about Markiit's mission to revolutionize commerce, community, and finance in Africa and beyond." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <style>{`
        /* Reuse the same CSS variables and base styles from homepage */
        :root {
          --primary: #2563eb;
          --primary-light: #3b82f6;
          --primary-dark: #1d4ed8;
          --text: #1f2937;
          --text-light: #6b7280;
          --bg: #f9fafb;
          --white: #ffffff;
          --gray-50: #f9fafb;
          --gray-100: #f3f4f6;
          --gray-200: #e5e7eb;
          --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body, html, .app {
          min-height: 100vh;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text);
          background-color: var(--bg);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
        }

        .app {
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }

        /* Typography */
        h1, h2, h3, h4 {
          font-weight: 700;
          line-height: 1.2;
        }

        h1 {
          font-size: clamp(2rem, 5vw, 3.75rem);
        }

        h2 {
          font-size: clamp(1.75rem, 4vw, 3rem);
        }

        h3 {
          font-size: 1.25rem;
        }

        p {
          font-size: 1rem;
          color: var(--text-light);
        }

        /* About Hero */
        .about-hero {
          padding: 4rem 5%;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: var(--white);
          text-align: center;
        }

        .about-hero h1 {
          margin-bottom: 1.5rem;
        }

        .about-hero p {
          max-width: 700px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.125rem;
        }

        /* About Content */
        .about-content {
          padding: 4rem 5%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .about-section {
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .about-section h2 {
          margin-bottom: 1.5rem;
          position: relative;
          display: inline-block;
        }

        .about-section h2::after {
          content: "";
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 4rem;
          height: 0.25rem;
          background-color: var(--primary);
          border-radius: 0.125rem;
        }

        .about-section p {
          max-width: 800px;
          margin-bottom: 1.5rem;
        }

        /* Section Header */
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.125rem;
        }

        /* Team Section */
        .team-section {
          padding: 3rem 5%;
          background-color: var(--gray-50);
          text-align: center;
        }

        .team-section h2 {
          margin-bottom: 2rem;
        }

        /* Values Section */
        .values-section {
          padding: 4rem 5%;
          background-color: var(--white);
        }

        /* CTA Section */
        .about-cta {
          padding: 4rem 5%;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: var(--white);
          text-align: center;
        }

        .about-cta h2 {
          margin-bottom: 1.5rem;
        }

        .about-cta p {
          max-width: 600px;
          margin: 0 auto 2.5rem;
          color: rgba(255, 255, 255, 0.9);
        }

        /* Custom Ant Design overrides */
        .ant-card {
          border-radius: 0.75rem;
          box-shadow: var(--shadow);
          transition: var(--transition);
          height: 100%;
        }

        .ant-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .value-card .ant-card-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem;
        }

        .value-icon {
          width: 3.5rem;
          height: 3.5rem;
          background-color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--white);
          font-size: 1.5rem;
        }

        .team-card .ant-card-body {
          padding: 1.5rem;
          text-align: center;
        }

        .member-avatar {
          margin: 0 auto 1.5rem;
          background-color: var(--primary-light);
        }

        .ant-typography {
          color: var(--text);
        }

        .ant-btn-primary {
          background: var(--white);
          color: var(--primary);
          border: none;
          box-shadow: var(--shadow);
          height: auto;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          border-radius: 0.5rem;
        }

        .ant-btn-primary:hover, .ant-btn-primary:focus {
          background: var(--gray-100);
          color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .about-hero {
            padding: 3rem 5%;
          }

          .about-hero p {
            font-size: 1rem;
          }

          .about-content {
            padding: 3rem 5%;
          }

          .about-section {
            text-align: left;
            align-items: flex-start;
          }

          .about-section h2::after {
            left: 0;
            transform: none;
          }
        }

        @media (max-width: 480px) {
          .about-hero {
            padding: 2.5rem 5%;
          }

          .about-content {
            padding: 2.5rem 5%;
          }

          .team-section,
          .values-section,
          .about-cta {
            padding: 2.5rem 5%;
          }
        }

        /* Animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>

      <div className="app">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} currentPage="about" />

        {/* About Hero */}
        <section className="about-hero">
          <Title level={1} style={{ color: 'white', marginBottom: '1.5rem' }} className="animate-fadeIn">
            Our Story
          </Title>
          <Paragraph className="animate-fadeIn delay-100" style={{ 
            maxWidth: '700px', 
            margin: '0 auto', 
            color: 'rgba(255, 255, 255, 0.9)', 
            fontSize: '1.125rem' 
          }}>
            Markiit was born from a vision to revolutionize how Africans connect, 
            transact, and grow their businesses in the digital age.
          </Paragraph>
        </section>

        {/* About Content */}
        <div className="about-content">
          <section className="about-section animate-fadeIn">
            <Title level={2}>About Markiit</Title>
            <Paragraph style={{ maxWidth: '800px', marginBottom: '1.5rem' }}>
              Markiit is an innovative platform developed by Marvora Inc. to empower
              businesses and individuals across Africa. We bring together e-commerce, 
              social media, ticketing, and fintech tools into one seamless experience 
              to help you grow faster and connect easier.
            </Paragraph>
            <Paragraph style={{ maxWidth: '800px' }}>
              Founded in 2025, we've grown to serve thousands of users who rely on 
              our platform to power their businesses, manage their finances, and 
              connect with their communities.
            </Paragraph>
          </section>

          <Divider />

          <section className="about-section animate-fadeIn delay-100">
            <Title level={2}>Our Mission</Title>
            <Paragraph style={{ maxWidth: '800px', marginBottom: '1.5rem' }}>
              To empower entrepreneurs and individuals by providing simple, smart tools 
              that help them grow, earn, save, and connect with their audience anywhere.
            </Paragraph>
            <Paragraph style={{ maxWidth: '800px' }}>
              We believe technology should work for everyone, which is why we've built 
              Markiit to be intuitive enough for first-time users while powerful enough 
              for growing businesses.
            </Paragraph>
          </section>

          <Divider />

          <section className="about-section animate-fadeIn delay-200">
            <Title level={2}>Our Vision</Title>
            <Paragraph style={{ maxWidth: '800px', marginBottom: '1.5rem' }}>
              To become Africa's leading all-in-one marketplace that merges commerce, 
              community, and finance into one powerful mobile experience.
            </Paragraph>
            <Paragraph style={{ maxWidth: '800px' }}>
              We're building a future where anyone with a smartphone can launch a business, 
              access financial tools, and reach customers across the continent - all 
              without needing multiple apps or services.
            </Paragraph>
          </section>
        </div>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-header">
            <Title level={2}>Our Core Values</Title>
            <Paragraph style={{ fontSize: '1.125rem' }}>
              These principles guide everything we do at Markiit
            </Paragraph>
          </div>
          
          <Row gutter={[24, 24]} justify="center">
            {values.map((value, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="value-card animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <Title level={3}>{value.title}</Title>
                  <Paragraph>{value.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <Title level={2}>Meet The Leadership</Title>
          
          <Row gutter={[24, 24]} justify="center">
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <Card className="team-card animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Avatar 
                    size={96} 
                    className="member-avatar"
                    icon={<UserOutlined />}
                  >
                    {member.initials}
                  </Avatar>
                  <Title level={3}>{member.name}</Title>
                  <Paragraph strong style={{ color: 'var(--primary)' }}>
                    {member.role}
                  </Paragraph>
                  <Paragraph>{member.bio}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <Title level={2} style={{ color: 'white' }}>
            Ready to Join the Markiit Community?
          </Title>
          <Paragraph style={{ 
            maxWidth: '600px', 
            margin: '0 auto 2.5rem', 
            color: 'rgba(255, 255, 255, 0.9)' 
          }}>
            Thousands of entrepreneurs and individuals are already transforming their businesses with our platform.
          </Paragraph>
          <Button 
            type="primary" 
            size="large"
            icon={<DownloadOutlined />}
            href="https://play.google.com/store/apps/details?id=com.markiit.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Now
          </Button>
        </section>

        <Footer footerLinks={{
          product: ["Features", "Download", "Pricing", "Roadmap"],
          company: ["About", "Blog", "Careers", "Contact"],
          legal: ["Privacy", "Terms", "Security"]
        }} />
      </div>
    </>
  );
};

export default AboutPage;
