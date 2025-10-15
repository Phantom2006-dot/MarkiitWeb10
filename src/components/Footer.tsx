
// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Space, Divider, Input, Button } from 'antd';
import { TwitterOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import { SiTiktok } from 'react-icons/si';

const { Title, Text } = Typography;
const { Search } = Input;

interface FooterLinks {
  product: string[];
  company: string[];
  legal: string[];
}

interface FooterProps {
  footerLinks: FooterLinks;
  tiktokUrl?: string;
}

const Footer: React.FC<FooterProps> = ({ footerLinks, tiktokUrl }) => {
  const onSearch = (value: string) => {
    console.log('Subscribed with:', value);
    // Add your subscription logic here
  };

  return (
    <footer className="footer" style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '48px 24px 24px',
      marginTop: 'auto'
    }}>
      <Row gutter={[32, 32]}>
        {/* Brand and Newsletter Section */}
        <Col xs={24} md={8}>
          <Link to="/" className="footer-logo" style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#1890ff',
            display: 'block',
            marginBottom: '16px'
          }}>
            Markiit
          </Link>
          <Text style={{ 
            display: 'block', 
            marginBottom: '24px',
            color: '#666',
            lineHeight: '1.6'
          }}>
            The all-in-one platform for selling, saving, and connecting. Powered by Marvora.
          </Text>
          
          <div style={{ marginBottom: '24px' }}>
            <Title level={5} style={{ marginBottom: '12px' }}>Stay Updated</Title>
            <Text style={{ display: 'block', marginBottom: '12px', color: '#666' }}>
              Subscribe for the latest updates on new features, promotions, and marketplace trends.
            </Text>
            <Search
              placeholder="Your email address"
              enterButton={<Button type="primary">Subscribe</Button>}
              size="large"
              onSearch={onSearch}
              style={{ maxWidth: '360px' }}
            />
          </div>
          
          <Space size="middle" className="social-links">
            <a href="https://twitter.com/your_account" className="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined style={{ fontSize: '20px' }} />
            </a>
            <a href="https://instagram.com/MarkiitApp" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined style={{ fontSize: '20px' }} />
            </a>
            <a href="https://facebook.com/your_account" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined style={{ fontSize: '20px' }} />
            </a>
            {tiktokUrl && (
              <a href={tiktokUrl} className="social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <SiTiktok style={{ fontSize: '18px' }} />
              </a>
            )}
          </Space>
        </Col>
        
        {/* Quick Links */}
        <Col xs={12} md={4}>
          <Title level={5} style={{ marginBottom: '16px' }}>Product</Title>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {footerLinks.product.map((link, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#666' }}>{link}</a>
              </li>
            ))}
          </ul>
        </Col>
        
        <Col xs={12} md={4}>
          <Title level={5} style={{ marginBottom: '16px' }}>Company</Title>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}><Link to="/about" style={{ color: '#666' }}>About</Link></li>
            {footerLinks.company.slice(1).map((link, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#666' }}>{link}</a>
              </li>
            ))}
          </ul>
        </Col>
        
        <Col xs={12} md={4}>
          <Title level={5} style={{ marginBottom: '16px' }}>Legal</Title>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {footerLinks.legal.map((link, index) => (
              <li key={index} style={{ marginBottom: '8px' }}>
                <a href="#" style={{ color: '#666' }}>{link}</a>
              </li>
            ))}
          </ul>
        </Col>
        
        {/* Contact Info */}
        <Col xs={12} md={4}>
          <Title level={5} style={{ marginBottom: '16px' }}>Support</Title>
          <div style={{ color: '#666', lineHeight: '1.6' }}>
            <div style={{ marginBottom: '12px' }}>
              <Text strong>Customer Service</Text>
              <div>+1 (234) 567-8900</div>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <Text strong>Email Support</Text>
              <div>support@markiit.com</div>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <Text strong>Headquarters</Text>
              <div>123 Commerce Street, Business District, 10001</div>
            </div>
          </div>
        </Col>
      </Row>
      
      <Divider style={{ margin: '32px 0 24px' }} />
      
      <Row justify="space-between" align="middle">
        <Col>
          <Text style={{ color: '#999' }}>
            &copy; {new Date().getFullYear()} Marvora Inc. All rights reserved.
          </Text>
        </Col>
        <Col>
          <Space size="middle">
            <a href="#" style={{ color: '#999', fontSize: '14px' }}>Terms of Service</a>
            <a href="#" style={{ color: '#999', fontSize: '14px' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#999', fontSize: '14px' }}>Cookie Policy</a>
          </Space>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
