import React from "react";
import { Row, Col } from "antd";

interface Stat {
  number: string;
  label: string;
}

const stats: Stat[] = [
  { number: "50K+", label: "Active Users" },
  { number: "10K+", label: "Businesses" },
  { number: "$5M+", label: "Transactions" },
  { number: "4.8★", label: "Average Rating" },
];

const Stats: React.FC = () => {
  return (
    <section className="stats-section">
      <Row gutter={[24, 24]} justify="center">
        {stats.map((stat, index) => (
          <Col xs={12} sm={6} key={index}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.number}
              </div>
              <div style={{ fontSize: "1rem", opacity: 0.9 }}>{stat.label}</div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Stats;
