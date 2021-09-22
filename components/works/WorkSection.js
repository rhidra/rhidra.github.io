import { Icon, Image } from "@chakra-ui/core";

export default function WorkSection({subtitle, title, children, isRight, icons, img}) {
  const rightClass = isRight ? 'right' : '';
  return (
    <section className="work">
      <div className={`mobile-wrapper ${rightClass}`}>
        <div className={`outline ${rightClass}`}/>
        <img src={img} alt={title}/>
      </div>

      <div className={`description ${rightClass}`}>
        <h4 className="subtitle">
          {subtitle[0]} 
          {subtitle.length > 1 && 
          <>
            &nbsp;&nbsp;<span>//</span>&nbsp;&nbsp;
            {subtitle[1]}
          </>}
        </h4>

        <h3 className="title">{title}</h3>

        <p>{children}</p>

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