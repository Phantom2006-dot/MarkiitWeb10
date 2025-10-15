

import React from "react";
import { Row, Col, Card, Typography } from "antd";
import {
  ShoppingCartOutlined,
  DollarOutlined,
  CalendarOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ShoppingCartOutlined style={{ fontSize: "24px" }} />,
    title: "Sell with Ease",
    description:
      "Launch your digital storefront in minutes, manage inventory, and accept payments seamlessly with our intuitive platform.",
  },
  {
    icon: <DollarOutlined style={{ fontSize: "24px" }} />,
    title: "Smart Savings",
    description:
      "Create private or group savings goals with automated contributions and financial tracking tools.",
  },
  {
    icon: <CalendarOutlined style={{ fontSize: "24px" }} />,
    title: "Event Booking",
    description:
      "Discover and book events, hotels, and services from verified providers with transparent pricing.",
  },
  {
    icon: <VideoCameraOutlined style={{ fontSize: "24px" }} />,
    title: "Markiit Stage",
    description:
      "Build your audience with our integrated content platform featuring videos, posts, and live streaming.",
  },
];

const Features: React.FC = () => {
  return (
    <section style={{ padding: "80px 0", backgroundColor: "white" }} id="features">
      <Row justify="center" style={{ marginBottom: 60 }}>
        <Col xs={24} md={20} lg={16} style={{ textAlign: "center" }}>
          <Title level={2}>Powerful Features for Everyone</Title>
          <Paragraph style={{ fontSize: "1.125rem" }}>
            Markiit offers a comprehensive suite of tools designed to empower your financial and business activities
          </Paragraph>
        </Col>
      </Row>

      <Row gutter={[24, 24]} justify="center">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} lg={6} key={index}>
            <Card className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <Title level={4}>{feature.title}</Title>
              <Paragraph>{feature.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Features;
