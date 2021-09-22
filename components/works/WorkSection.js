import { Icon, Image } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

export default function WorkSection({subtitle, title, children, isRight, icons, img, link, src, logo, addMargin}) {
  const [longText, shortText] = children.length > 1 ? children : [children, null];

  const [isTruncated, setIsTruncated] = useState(true);

  useEffect(() => setIsTruncated(t => shortText === null ? false : t), [shortText]);

  const rightClass = isRight ? 'right' : '';
  return (
    <section className={`work ${addMargin ? 'margin' : ''}`}>
      {img &&
        <div className={`mobile-wrapper ${rightClass}`}>
          <div className={`outline ${rightClass}`}/>
          <img src={img} alt={title}/>
        </div>
      }

      <div className={`description ${rightClass}`}>
        <div className={`header-row ${rightClass}`}>
          <div className="header-titles">
            <h4 className="subtitle">
              {subtitle[0]} 
              {subtitle.length > 1 && 
              <>
                &nbsp;&nbsp;<span>//</span>&nbsp;&nbsp;
                {subtitle[1]}
              </>}
            </h4>
            <h3 className="title">{title}</h3>
          </div>
          
          <div>
            {link &&
              <a className="external-link" href={link} target="_blank">
                <Icon as={FaExternalLinkAlt} boxSize={5}/>&nbsp;
              </a>
            }

            {src &&
              <a className="external-link" href={src} target="_blank">
                <Icon as={FaCode} boxSize={5}/>&nbsp;
              </a>
            }
          </div>
        </div>



        <p>
          {isTruncated && 
          <>
            {shortText}
            <br/><button className="ellipsis" onClick={() => setIsTruncated(false)}>Show more</button>
          </>}
          {!isTruncated && longText}

          {logo &&
            <img className="bg-img" src={logo} alt="logo"/>
          }
        </p>

        <div className={`tech-wrapper ${rightClass}`}>
          {icons.map(({icon, src, label}, idx) => (
            <div className="tech" key={idx}>
              {icon &&
                <Icon as={icon} boxSize="30px" mr={1}/>
              }
              {src &&
                <Image src={`/img/icons/${src}`} alt={src} boxSize="30px" mx={1}/>
              }
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}