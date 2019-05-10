import React from 'react';
import PropTypes from 'prop-types';
import { Repository, Container } from './styles';

const CompareList = props => (
  <Container>
    {/* eslint-disable-next-line react/destructuring-assignment */}
    {props.repositories.map((repository, i) => (
      // eslint-disable-next-line react/prop-types
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
        <ul>
          <li>
            {repository.stargazers_count} <small>Stars</small>
          </li>
          <li>
            {repository.forks_count} <small>Forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>Issues</small>
          </li>
          <li>
            {repository.lastCommit} <small>Last commit</small>
          </li>
        </ul>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={props.onClick} value={i}>
          del
        </button>
      </Repository>
    ))}
  </Container>
);
CompareList.propTypes = {
  onClick: PropTypes.func.isRequired,
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};
export default CompareList;
