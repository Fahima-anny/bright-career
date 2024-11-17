

const Footer = () => {
    return (
     <div className="bg-base-200">
           <footer className="footer max-w-7xl mx-auto text-base-content py-10 justify-center md:justify-normal">
        <nav className="mx-auto md:mx-0 *:mx-auto md:*:mx-0">
          <h6 className=" footer-title  text-center ">Services</h6>
          <a className="link link-hover text-center">Branding</a>
          <a className="link link-hover text-center">Design</a>
          <a className="link link-hover text-center">Marketing</a>
          <a className="link link-hover text-center">Advertisement</a>
        </nav>
        <nav className="mx-auto md:mx-0 *:mx-auto md:*:mx-0">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="mx-auto md:mx-0 *:mx-auto md:*:mx-0">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form className="mx-auto md:mx-0 *:mx-auto md:*:mx-0">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control md:w-80">
            <label className="label *:mx-auto md:*:mx-0">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex justify-center items-center flex-col gap-3 md:gap-0 md:flex-row md:join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input  input-bordered join-item" />
              <button className="btn btn-accent text-white join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
     </div>
    );
};

export default Footer;