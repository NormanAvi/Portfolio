import "./SiteFooter.css";

const publishedYear = 2023;
const currentYear = new Date().getFullYear();
const copyrightYear =
  currentYear > publishedYear
    ? `${publishedYear}-${currentYear}`
    : `${publishedYear}`;

const SiteFooter = () => {
  return (
    <footer className="siteFooter">
      <p>"Do what makes your soul shine"</p>
      <p>© {copyrightYear} Norman Gael Ávila Martínez. All rights reserved.</p>
    </footer>
  );
};

export default SiteFooter;
