import { Button, Icon, Image } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

export default function WorkSection({subtitle, title, children, isRight, icons, img, link, src, logo, addMargin, imgSize}) {
  const [longText, shortText] = children.length > 1 ? children : [children, null];

  const [isTruncated, setIsTruncated] = useState(true);

  useEffect(() => setIsTruncated(t => shortText === null ? false : t), [shortText]);

  const rightClass = isRight ? 'right' : '';
  return (
    <section className={`work ${addMargin ? 'margin' : ''}`}>
      {img &&
        <div className={`mobile-wrapper ${rightClass}`} style={{width: imgSize ? `${imgSize}px` : null}}>
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
        </div>



        <p>
          {isTruncated && 
          <>
            {shortText}
            <br/><button className="ellipsis" onClick={() => setIsTruncated(false)}>Show more</button>
          </>}
          {!isTruncated && 
          <>
            {longText}
            
            {(src || link) &&
              <div className="buttons">
                {src &&
                  <a href={src} target="_blank">
                    <Icon as={FaCode} boxSize={5} opacity={.8}/>&nbsp;
                    Source
                  </a>
                }
                {link &&
                  <a href={link} target="_blank">
                    <Icon as={FaExternalLinkAlt} boxSize={5} opacity={.8}/>&nbsp;
                    Link
                  </a>
                }
              </div>
            }
          </>
          }

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