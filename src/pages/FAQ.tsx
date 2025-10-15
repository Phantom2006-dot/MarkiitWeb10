

// File: FAQ.tsx
import React, { useState, useMemo } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Divider,
  Tag,
  Collapse,
  Empty,
  Alert
} from "antd";
import {
  SearchOutlined,
  CustomerServiceOutlined,
  PlusOutlined,
  MinusOutlined,
  InfoCircleOutlined
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

interface FAQItem {
  question: string;
  answer: string;
  category: "general" | "users" | "businesses" | "events" | "security" | "other";
}

// Extended interface for items with similarity scores
interface FAQItemWithSimilarity extends FAQItem {
  similarity: number;
}

const faqData: FAQItem[] = [
  // General
  {
    question: "What is Markiit?",
    answer: "Markiit is an all-in-one platform that combines social media, e-commerce, fintech, and savings. It allows users to shop, save money, run businesses, sell products, host events, book hotels, send money, and connect socially—all in one app.",
    category: "general"
  },
  {
    question: "Who can use Markiit?",
    answer: "Anyone can use Markiit—individuals, businesses, event organizers, hotels, and service providers. Whether you want to save money, run a store, connect with friends, or grow your brand, Markiit has something for you.",
    category: "general"
  },
  {
    question: "Is Markiit free to use?",
    answer: "Yes! Creating an account is free. Some premium features (like hotel subscriptions, business ads, or boosted pages) may come with small fees.",
    category: "general"
  },

  // For Users
  {
    question: "How do I create a Markiit account?",
    answer: "You can download the Markiit app from the Play Store (and later App Store). Sign up using your phone number or email and set up your profile.",
    category: "users"
  },
  {
    question: "Can I save money with Markiit?",
    answer: "Yes! Markiit has Private Savings (for personal goals) and Group Savings (where friends or groups save together).",
    category: "users"
  },
  {
    question: "How do I buy products on Markiit?",
    answer: "Browse through stores or professional profiles, add products to your cart, and checkout securely using Markiit Wallet or other supported payment methods.",
    category: "users"
  },
  {
    question: "Can I send money to friends?",
    answer: "Yes, you can send and receive money instantly using Markiit Wallet.",
    category: "users"
  },
  {
    question: "How will I receive my goods after buying on Markiit?",
    answer: "Markiit provides secure delivery through trusted logistics partners. Once you place an order, you can track your delivery inside the app until it arrives at your doorstep.",
    category: "users"
  },

  // For Businesses
  {
    question: "How can I sell on Markiit?",
    answer: "Simply register your business inside the app, set up your Markiit Store or Markiit Stage, upload your products/services, and start selling.",
    category: "businesses"
  },
  {
    question: "What is the difference between Markiit Store and Markiit Stage?",
    answer: "Markiit Store → For businesses selling products/services.\n\nMarkiit Stage → For creators, influencers, and brands to post, grow followers, and monetize (like a Facebook page or TikTok profile).",
    category: "businesses"
  },
  {
    question: "Does Markiit charge commissions on sales?",
    answer: "Yes, Markiit may charge small transaction fees to keep the platform running. Rates are kept low to support small businesses.",
    category: "businesses"
  },
  {
    question: "How do businesses deliver products to customers?",
    answer: "Businesses can choose to use Markiit's logistics system or partner with their own delivery providers. Markiit helps manage pickup, tracking, and secure delivery to customers.",
    category: "businesses"
  },

  // Events & Hotels
  {
    question: "Can I buy event tickets on Markiit?",
    answer: "Yes. You can buy tickets directly from event organizers on the platform.",
    category: "events"
  },
  {
    question: "How does hotel booking work?",
    answer: "Hotels on Markiit list their rooms. You can view availability, book rooms, and even request airport pickup or transport via Markiit Drive.",
    category: "events"
  },

  // Security & Payments
  {
    question: "Is my money safe on Markiit?",
    answer: "Yes. Markiit uses bank-level security and escrow protection to ensure your savings and transactions are secure.",
    category: "security"
  },
  {
    question: "What payment methods does Markiit support?",
    answer: "You can fund your Markiit Wallet using debit/credit cards, bank transfers, or supported payment gateways (like Flutterwave).",
    category: "security"
  },
  {
    question: "What happens if my order is not delivered?",
    answer: "Markiit uses an Escrow system. Funds are only released to the seller when the order is confirmed as delivered.",
    category: "security"
  },

  // Other
  {
    question: "Can I advertise on Markiit?",
    answer: "Yes. Businesses can run ads and promotions to reach more customers.",
    category: "other"
  },
  {
    question: "Does Markiit work offline?",
    answer: "You need internet access to use Markiit, but we're working on making some savings and wallet features available via USSD in the future.",
    category: "other"
  },
  {
    question: "How do I contact support?",
    answer: "You can contact Markiit support directly through the Help Center in the app or via our website's Contact Us page.",
    category: "other"
  },
];

// String similarity function (simple implementation)
const calculateSimilarity = (str1: string, str2: string): number => {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();
  
  if (lowerStr1 === lowerStr2) return 1;
  if (lowerStr1.includes(lowerStr2) || lowerStr2.includes(lowerStr1)) return 0.9;
  
  // Simple word matching
  const words1 = lowerStr1.split(/\s+/);
  const words2 = lowerStr2.split(/\s+/);
  
  const commonWords = words1.filter(word => 
    words2.some(w => w.includes(word) || word.includes(w))
  );
  
  const similarity = commonWords.length / Math.max(words1.length, words2.length);
  return similarity;
};

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showSimilarResults, setShowSimilarResults] = useState(false);

  const categories = [
    { id: "all", name: "All Questions", color: "blue" },
    { id: "general", name: "General", color: "geekblue" },
    { id: "users", name: "For Users", color: "green" },
    { id: "businesses", name: "For Businesses", color: "volcano" },
    { id: "events", name: "Events & Hotels", color: "orange" },
    { id: "security", name: "Security & Payments", color: "red" },
    { id: "other", name: "Other", color: "purple" },
  ];

  // Find similar questions when search doesn't yield exact results
  const findSimilarQuestions = useMemo((): FAQItemWithSimilarity[] => {
    if (!searchTerm.trim() || searchTerm.length < 3) return [];
    
    // Calculate similarity scores for all questions
    const questionsWithSimilarity = faqData.map(item => ({
      ...item,
      similarity: Math.max(
        calculateSimilarity(searchTerm, item.question),
        calculateSimilarity(searchTerm, item.answer) * 0.7 // Answers are weighted less
      )
    }));
    
    // Filter out low similarity scores and sort by similarity
    return questionsWithSimilarity
      .filter(item => item.similarity > 0.3)
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 5); // Return top 5 matches
  }, [searchTerm]);

  const filteredFaqs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : "default";
  };

  const customExpandIcon = (props: any) => {
    if (props.isActive) {
      return <MinusOutlined style={{ fontSize: '16px', color: '#1890ff' }} />;
    }
    return <PlusOutlined style={{ fontSize: '16px', color: '#1890ff' }} />;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() && filteredFaqs.length === 0) {
      setShowSimilarResults(true);
    }
  };

  // Type guard to check if an item has similarity property
  const hasSimilarity = (item: FAQItem | FAQItemWithSimilarity): item is FAQItemWithSimilarity => {
    return 'similarity' in item;
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 16px' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title level={2} style={{ color: '#1f2937', marginBottom: '16px' }}>
          Frequently Asked Questions
        </Title>
        <Paragraph style={{ 
          fontSize: '16px', 
          color: '#6b7280', 
          maxWidth: '600px', 
          margin: '0 auto' 
        }}>
          Find answers to common questions about Markiit, the all-in-one platform for selling, saving, and connecting.
        </Paragraph>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch}>
        <div style={{ marginBottom: '24px', display: 'flex', gap: '8px' }}>
          <Input
            size="large"
            placeholder="Ask a question or search..."
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSimilarResults(false);
            }}
            style={{ borderRadius: '8px', flex: 1 }}
          />
          <Button 
            type="primary" 
            size="large" 
            icon={<SearchOutlined />}
            htmlType="submit"
          >
            Search
          </Button>
        </div>
      </form>

      {/* Category Filters */}
      <div style={{ marginBottom: '32px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {categories.map((category) => (
          <Tag
            key={category.id}
            color={activeCategory === category.id ? category.color : "default"}
            onClick={() => {
              setActiveCategory(category.id);
              setShowSimilarResults(false);
            }}
            style={{ 
              cursor: 'pointer', 
              padding: '8px 16px', 
              borderRadius: '20px',
              border: activeCategory === category.id ? 'none' : '1px solid #d9d9d9'
            }}
          >
            {category.name}
          </Tag>
        ))}
      </div>

      <Divider />

      {/* Show similar results if no exact matches but we have similar questions */}
      {showSimilarResults && findSimilarQuestions.length > 0 && (
        <Alert
          message="We couldn't find an exact match, but here are some similar questions:"
          type="info"
          showIcon
          icon={<InfoCircleOutlined />}
          style={{ marginBottom: '24px' }}
        />
      )}

      {/* FAQ Items - show either exact matches or similar questions */}
      {(filteredFaqs.length > 0 || (showSimilarResults && findSimilarQuestions.length > 0)) ? (
        <Collapse 
          accordion 
          expandIcon={customExpandIcon}
          expandIconPosition="end"
          style={{ background: 'transparent', border: 'none' }}
          defaultActiveKey={showSimilarResults ? [0] : undefined}
        >
          {(showSimilarResults && filteredFaqs.length === 0 ? findSimilarQuestions : filteredFaqs)
            .map((item, index) => (
            <Panel 
              header={
                <div>
                  <Text strong>{item.question}</Text>
                  <Tag 
                    color={getCategoryColor(item.category)} 
                    style={{ marginLeft: '12px', fontSize: '12px' }}
                  >
                    {categories.find(cat => cat.id === item.category)?.name}
                  </Tag>
                  {hasSimilarity(item) && (
                    <Text type="secondary" style={{ marginLeft: '8px', fontSize: '12px' }}>
                      {Math.round(item.similarity * 100)}% match
                    </Text>
                  )}
                </div>
              } 
              key={index}
              style={{ 
                marginBottom: '16px', 
                borderRadius: '8px', 
                border: '1px solid #f0f0f0',
                background: '#fff'
              }}
            >
              <Paragraph style={{ color: '#6b7280', margin: 0, whiteSpace: 'pre-line' }}>
                {item.answer}
              </Paragraph>
            </Panel>
          ))}
        </Collapse>
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <div>
              <div>No questions found.</div>
              {searchTerm.length > 0 && searchTerm.length < 3 && (
                <Text type="secondary">Try entering at least 3 characters for better results.</Text>
              )}
              {searchTerm.length >= 3 && (
                <Button 
                  type="link" 
                  onClick={() => setShowSimilarResults(true)}
                  style={{ marginTop: '8px' }}
                >
                  Show similar questions
                </Button>
              )}
            </div>
          }
        />
      )}

      {/* Support CTA */}
      <Card 
        style={{ 
          marginTop: '48px', 
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          border: 'none',
          borderRadius: '12px'
        }}
      >
        <div style={{ textAlign: 'center', padding: '24px' }}>
          <CustomerServiceOutlined style={{ fontSize: '48px', color: '#1890ff', marginBottom: '16px' }} />
          <Title level={4} style={{ color: '#1e40af', marginBottom: '8px' }}>
            Still have questions?
          </Title>
          <Paragraph style={{ color: '#4b5563', marginBottom: '24px' }}>
            Can't find the answer you're looking for? Please reach out to our friendly team.
          </Paragraph>
          <Button type="primary" size="large" icon={<CustomerServiceOutlined />}>
            Contact Support
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FAQ;
