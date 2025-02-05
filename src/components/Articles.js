import React from "react";

function Articles({ articles = [] }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Títulos</th>
            <th>Votos</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          <tr data-testid="article" key="key">
            <td data-testid="article-title">Title</td>
            <td data-testid="article-upvotes">Upvotes</td>
            <td data-testid="article-date">Date</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Articles;