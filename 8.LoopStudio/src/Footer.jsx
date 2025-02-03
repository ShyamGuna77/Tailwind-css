

const Footer = () => {
  return (
    <div className="mt-16">
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src="../public/images/logo.svg" alt="Logo" />
              <p className="text-sm text-gray-400"></p>
            </div>
            <nav className="flex space-x-4">
              <a href="#">
                <img src="../public/images/icon-instagram.svg" alt="Insta" />
              </a>
              <a href="#">
                <img src="../public/images/icon-pinterest.svg" alt="Insta" />
              </a>
              <a href="#">
                <img src="../public/images/icon-twitter.svg" alt="Insta" />
              </a>
              <a href="#">
                <img src="../public/images/icon-facebook.svg" alt="Insta" />
              </a>
            </nav>
          </div>

          <nav className="flex space-x-4 mt-8 ">
            <a href="#">About</a>
            <a href="#">Carreres</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </nav>
          <div className="mt-4  text-sm text-center text-white">
            © 2025 Your Brand. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer