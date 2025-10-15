
import { Link } from "react-router-dom";
import { Button, Space, Drawer, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/Images/markiitLogo.png";
import React from "react";

const { useBreakpoint } = Grid;

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  toggleMenu,
  currentPage,
}) => {
  const screens = useBreakpoint();

  const navLinks: { label: string; to: string; hash?: string }[] = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Features", to: "#features", hash: "features" },
    { label: "Testimonials", to: "#testimonials", hash: "testimonials" },
    { label: "Download", to: "#download", hash: "download" },
  ];

  const renderLink = (link: { label: string; to: string; hash?: string }) => {
    const isActive =
      link.to === currentPage || (link.hash && currentPage === link.hash);

    return link.to.startsWith("#") ? (
      <a
        key={link.label}
        href={link.to}
        className={`nav-link ${isActive ? "active" : ""}`}
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.label}
        to={link.to}
        className={`nav-link ${isActive ? "active" : ""}`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <>
      <style>{`
        body {
          padding-top: 90px; /* prevent content from hiding behind fixed header */
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 90px; /* increased height */
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem; /* adjusted padding */
          background: var(--white, #fff);
          border-bottom: 1px solid var(--gray-200, #e5e7eb);
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--primary, #2563eb);
          gap: 10px;
        }

        .logo-img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text, #1f2937);
          text-decoration: none;
          transition: color 0.2s ease, border-bottom 0.2s ease;
          padding-bottom: 2px;
          border-bottom: 2px solid transparent;
        }

        .nav-link:hover {
          color: var(--primary, #2563eb);
        }

        .nav-link.active {
          color: var(--primary, #2563eb);
          border-bottom: 2px solid var(--primary, #2563eb);
        }

        .mobile-menu-btn {
          font-size: 1.25rem;
          color: var(--text, #1f2937);
        }

        /* Drawer overrides */
        .ant-drawer-title {
          font-weight: 600;
          color: var(--primary, #2563eb);
        }
        .ant-drawer-body .nav-link {
          display: block;
          padding: 0.5rem 0;
          font-size: 1.125rem;
        }
      `}</style>

      <header className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="Markiit" className="logo-img" />
          Markiit
        </Link>

        {screens.md ? (
          <Space className="desktop-nav nav-links" size="middle">
            {navLinks.map(renderLink)}
          </Space>
        ) : (
          <>
            <Button
              className="mobile-menu-btn"
              onClick={toggleMenu}
              icon={<MenuOutlined />}
              type="text"
            />
            <Drawer
              title="Menu"
              placement="right"
              onClose={toggleMenu}
              open={isMenuOpen}
              bodyStyle={{ padding: "20px" }}
            >
              <Space direction="vertical" size="middle" style={{ width: "100%" }}>
                {navLinks.map((link) => (
                  <React.Fragment key={link.label}>
                    {renderLink(link)}
                  </React.Fragment>
                ))}
              </Space>
            </Drawer>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
