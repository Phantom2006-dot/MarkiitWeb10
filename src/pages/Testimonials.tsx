import React from "react";
import { Row, Col, Card, Typography, Avatar } from "antd";

const { Title, Paragraph, Text } = Typography;

interface Testimonial {
  text: string;
  author: string;
  role: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Markiit transformed my small business. I went from selling locally to reaching customers nationwide in just weeks.",
    author: "Amina Bello",
    role: "Fashion Entrepreneur",
    initials: "AB",
  },
  {
    text: "The group savings feature helped my family save for our first home. We couldn't have done it without Markiit.",
    author: "Chukwudi Okoro",
    role: "Markiit User",
    initials: "CO",
  },
  {
    text: "As a content creator, Markiit Stage gave me the tools to monetize my audience directly. Game changer!",
    author: "Zainab Yusuf",
    role: "Digital Creator",
    initials: "ZY",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <Row justify="center" style={{ marginBottom: 60 }}>
        <Col xs={24} md={20} lg={16} style={{ textAlign: "center" }}>
          <Title level={2}>What Our Users Say</Title>
          <Paragraph style={{ fontSize: "1.125rem" }}>
            Don't just take our word for it - hear from our community
          </Paragraph>
        </Col>
      </Row>
      <Row gutter={[24, 24]} justify="center">
        {testimonials.map((testimonial, index) => (
          <Col xs={24} md={8} key={index}>
            <Card className="testimonial-card">
              <div className="testimonial-text">{testimonial.text}</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                <Avatar size={48} style={{ backgroundColor: "#3b82f6" }}>
                  {testimonial.initials}
                </Avatar>
                <div>
                  <Title level={5} style={{ margin: 0 }}>
                    {testimonial.author}
                  </Title>
                  <Text type="secondary">{testimonial.role}</Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Testimonials;
