export default function Work() {
  return (
    <div className="work">
      <div class="mobile-wrapper">
        <div className="outline"/>
        <img src="/img/clapback/phone.jpg" alt="Clapback"/>
      </div>

      <div className="description">
        <h4 className="subtitle">Startup CTO &nbsp;<span>//</span>&nbsp; Fullstack</h4>
        <h3 className="title">Clapback: A new media app in China</h3>

        <p>
          A new media app, technically similar to TikTok, with <strong>social media</strong> interactions,
          users <strong>video upload and processing</strong> and a scalable infrastructure. As the only engineer, 
          I had to build an app easy to <strong>iterate</strong> on and <strong>maintain</strong>, without any third party
          technologies potentially blocked in China.<br/>
          The backend supports a <strong>REST API</strong> and <strong>offline video encoding</strong>. 
          To let the non-technical team edit data, I built an <strong>Angular backoffice</strong>, which uses the same API as the mobile app.<br/>
          During this project, learned a lot in building a fullstack system ready for production 
          This creates a lot of constraints of distributed computing and it can consume a lot of resources.
        </p>
      </div>
    </div>
  );
}