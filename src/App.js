import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Tabs, Tab } from 'react-bootstrap';
import papers from './contents/papers.json';
import careers from './contents/careers.json';
import vulnerabilities from './contents/vulnerabilities.json';
import hackathons from './contents/hackathons.json';

function PaperContent() {
  return (
    <div>
      {papers.map((paper, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{paper.title} {paper.award && <span style={{ color: "red" }}>({paper.award})</span>}</h5>
            <p className="card-text">
              {paper.authors.join(", ")}
            </p>
            <p className="card-text">
              {paper.event}
            </p>
            <a href={paper.link} className="card-link" target="_blank" rel="noreferrer">{paper.linkTitle}</a>
            <a href={paper.blogLink} className="card-link" target="_blank" rel="noreferrer">{paper.blogTitle}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

function CarrerContent() {
  return (
    <div>
      {careers.map((career, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{career.position} - {career.company}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{career.duration}</h6>
            <p className="card-text">{career.style}</p>
            {career.link && (
              <>
                <span>関連リンク：</span>
                <a href={career.link} className="card-link" target="_blank" rel="noreferrer">{career.link_title}</a>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function VulnerabilityContent() {
  return (
    <div>
      {vulnerabilities.map((vulnerability, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{vulnerability.title}</h5>
            <p className="card-text">
              {vulnerability.cves.map((cve, index) => (
                <span key={index} className="badge bg-secondary mx-1">{cve}</span>
              ))}
            </p>
            <a href={vulnerability.link} className="card-link" target="_blank" rel="noreferrer">{vulnerability.linkTitle}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

function HackathonContent() {
  return (
    <div>
      {hackathons.map((hackathon, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{hackathon.event} - {hackathon.product} {hackathon.award && <span style={{ color: "red" }}>({hackathon.award})</span>}</h5>
            <p className="card-text">
            </p>
            <a href={hackathon.blogLink} className="card-link" target="_blank" rel="noreferrer">{hackathon.blogTitle}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [key, setKey] = useState('career');

  return (
    <>
      <div className="container">
        <div className="profile-card card mb-3">
          <div className="card-body">
            <h1 className="card-title">櫛引 淳之介 / Kushibiki Junnosuke</h1>
            <p className="card-text">所属：横浜国立大学大学院 環境情報学府</p>
            <p className="card-text">サイバーセキュリティとITインフラに興味がある大学院生です</p>
            <div className="d-flex justify-content-center social-links">
              <a href="https://twitter.com/kusshi94" className="btn btn-primary mx-2 btn-custom" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="https://github.com/kusshi94" className="btn btn-secondary mx-2 btn-custom" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://qiita.com/kusshi" className="btn btn-success mx-2 btn-custom" target="_blank" rel="noreferrer">
                <i className="fab fa-q"></i> Qiita
              </a>
              <a href="https://kusshi.hatenablog.jp/" className="btn btn-info mx-2 btn-custom" target="_blank" rel="noreferrer">
                <i className='fas fa-blog'></i> Blog
              </a>
              <a href="https://speakerdeck.com/kusshi94" className="btn btn-warning mx-2 btn-custom" target="_blank" rel="noreferrer">
                <i class="fa-brands fa-speaker-deck"></i> SpeakerDeck
              </a>
            </div>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="career" title="職歴">
                <CarrerContent />
              </Tab>
              <Tab eventKey="paper" title="論文">
                <PaperContent />
              </Tab>
              <Tab eventKey="vulnerability" title="脆弱性報告">
                <VulnerabilityContent />
              </Tab>
              <Tab eventKey="hackathon" title="ハッカソン">
                <HackathonContent />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="main">
        </div>
      </div>
    </>

  );
}

export default App;
