export const Footer = () => {
  return (
    <footer className="bg-sage-gray-light border-t border-border py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Left side - Logo and tagline */}
          <div className="space-y-3">
            <div className="flex items-center space-x-1">
              <span className="text-xl font-bold text-gray-900">Builder</span>
              <span className="text-xl font-bold text-sage-green">Ops</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The Future of Custom Development
            </p>
          </div>

          {/* Right side - Legal links */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#terms"
                  className="text-sm text-muted-foreground hover:text-sage-green transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-muted-foreground hover:text-sage-green transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#refund"
                  className="text-sm text-muted-foreground hover:text-sage-green transition-colors"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-sage-green transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 BuilderOps Technologies Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};