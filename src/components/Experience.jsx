import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import Header from './Header';
import endpoints from '../constants/endpoints';
import AppContext from '../AppContext';
import FallbackSpinner from './FallbackSpinner';
import '../css/timeline.css';

function Experience(props) {
  const { header } = props;
  const { language } = React.useContext(AppContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints(language).experiences, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res.experiences))
      .catch((err) => err);
  }, [language]);

  return (
    <>
      <Header title={header} />
      {data ? (
        <div className="section-content-container">
          <Fade triggerOnce>
            <div className="tl tl--experience">
              {data.map((item) => (
                <div className="tl-item" key={item.title + item.dateText}>
                  <div className="tl-node--dot" />
                  <div className="tl-card">
                    <div className="tl-date">{item.dateText}</div>
                    <h3 className="tl-title">{item.title}</h3>
                    <div className="tl-subtitle">
                      <span className="accent">{item.subtitle}</span>
                      {item.workType ? ` · ${item.workType}` : ''}
                    </div>
                    <ul className="tl-list">
                      {item.workDescription.map((point) => (
                        <li key={point}>
                          <ReactMarkdown components={{ p: 'span' }}>
                            {point}
                          </ReactMarkdown>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      ) : <FallbackSpinner /> }
    </>
  );
}

Experience.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Experience;
