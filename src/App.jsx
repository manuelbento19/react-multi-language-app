import { useTranslation } from "react-i18next";
import { LANGUAGES } from "./constants/languages";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  
  return (
    <div className="container">
      <header>
        <h2>DarkSide</h2>
        <select onChange={(e) => changeLanguage(e.target.value)}>
          {LANGUAGES.map((item) => <option key={item.id} value={item.id}>{item.value}</option>)}
        </select>
      </header>
      <section>
        <h1 dangerouslySetInnerHTML={{__html: t("title")}}></h1>
        {t('shortBio',{returnObjects: true}).map((item,index)=><p key={index}>{item}</p>)}
        <h2>{t('career',{returnObjects: true})["title"]}</h2>
        <p>{t('career',{returnObjects: true})["content"]}</p>
        <h2>{t('connect',{returnObjects: true})["title"]}</h2>
        <p>{t('connect',{returnObjects: true})["content"]}</p>
        <ul>
          <li><a href="https://githib.com/manuelbento19" target="_blank" rel="noreferrer"><FaGithub color="#fff"/></a></li>
          <li><a href="https://www.linkedin.com/in/manuel-bento" target="_blank" rel="noreferrer"><FaLinkedinIn color="#fff"/></a></li>
          <li><a href="#header" rel="noreferrer"><FaInstagram color="#fff"/></a></li>
          <li><a href="#header" rel="noreferrer"><FaFacebook color="#fff"/></a></li>
        </ul>
      </section>
      <footer>
        <span>&copy; {t("footer",{returnObjects: true})["copyright"]}</span>
        <a href="https://github.com/manuelbento19" dangerouslySetInnerHTML={{__html:t("footer",{returnObjects: true})["dev"]}}></a>
      </footer>
    </div>
  );
}

export default App;
