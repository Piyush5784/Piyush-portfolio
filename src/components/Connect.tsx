import { useContexts } from "../Context";

const Connect = () => {
  const { setShowMenu } = useContexts();
  return (
    <div
      onClick={() => setShowMenu(false)}
      id="connect"
      className="pb-7  bg-black text-white"
    >
      <p className="pt-6 text-2xl font-semibold ">Connect with me</p>
      <div className="flex gap-10 pt-7 ">
        <a href="https://github.com/Piyush5784" target="_blank">
          <div>
            <i className="fa-brands fa-github fa-2xl text-[#7d7d7d]"></i>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/piyush-jha-a29619239/"
          target="_blank"
        >
          <div>
            <i className="fa-brands fa-linkedin fa-2xl text-[#7d7d7d]"></i>
          </div>
        </a>
        <a href="https://twitter.com/Piyush5784" target="_blank">
          <div>
            <i className="fa-brands fa-twitter fa-2xl text-[#7d7d7d]"></i>
          </div>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=piyushjha5668@gmail.com"
          target="_blank"
        >
          <div>
            <i className="fa-regular fa-envelope fa-2xl text-[#7d7d7d]"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Connect;
