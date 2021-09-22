import { Icon } from "@chakra-ui/core";

export default function Work({subtitle, title, children, isRight, icons, img}) {
  const rightClass = isRight ? 'right' : '';
  return (
    <div className="work">
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
          {icons.map(({icon, label}, idx) => (
            <div className="tech" key={idx}>
              <Icon as={icon} boxSize="30px" mr={1}/>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}