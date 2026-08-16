import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const ProjectCard = ({ project, featured = false }) => {
  const parseBodyText = (text) => <ReactMarkdown>{text}</ReactMarkdown>;
  const isVideo = (url) => url && (url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg'));

  return (
    <article
      className={`tile tile--interactive project-card ${
        featured ? 'span-4 project-card--featured' : 'span-2'
      }`}
    >
      {project?.image && (
        <div className="project-card__media">
          {isVideo(project.image) ? (
            <video src={project.image} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <img src={project.image} alt={project.title} />
          )}
        </div>
      )}

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__text">{parseBodyText(project.bodyText)}</div>
      </div>

      <div className="project-card__footer">
        {project?.links?.length > 0 && (
          <div className="project-card__links">
            {project.links.map((link) => (
              <a
                key={link.href}
                className="proj-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
                {' '}
                ↗
              </a>
            ))}
          </div>
        )}
        {project?.tags?.length > 0 && (
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  featured: PropTypes.bool,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
