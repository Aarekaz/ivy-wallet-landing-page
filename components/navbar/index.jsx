import Link from "next/link";
import styles from "./navbar.module.scss";
import { iconsState } from "../../state";
import { useRecoilValue } from "recoil";

const _links = ["About", "Features", "Roadmap", "Community", "FAQ"];
const _titleToLinkMap = {
  About: "/",
  Features: "/features",
  Roadmap: "https://github.com/orgs/Ivy-Apps/projects/1/views/1",
  Community: "https://t.me/+ETavgioAvWg4NThk",
  FAQ: "/",
};

const Logo = () => {
  return(
    <div className={styles.logo}>
      <div>
        <Link href="/">
          <a>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img src="./logo.svg" alt="Ivy Logo" width="60" height="60" />
          </a>
        </Link>
        <span className={styles.beta_span}>Beta</span>
      </div>
    </div>
  )
}

const LinksBar = ({ links, titleToLinkMap }) => {
  return(
    <div className={styles.links}>
      {links.map((e) => (
        <Link href={titleToLinkMap[e]} key={e}>
          <a>{e}</a>
        </Link>
      ))}
    </div>
  )
}

const ActionButtons = () => { 
  const icons = useRecoilValue(iconsState);

  return(
    <div className={styles.cta}>
      <button>Donate</button>
        <a href="https://play.google.com/store/apps/details?id=com.ivy.wallet&hl=en&gl=US" target="_blank" rel="noreferrer">
          <button>
            Try Ivy Wallet{" "}
            {icons['right_arrow_icon']()}
        </button>
      </a>
    </div>
  )
}

export const Navbar = () => {
  return(
      <header className={styles.container}>
        <Logo />
        <LinksBar links={_links} titleToLinkMap={_titleToLinkMap} />
        <ActionButtons />
      </header>
  )
};
