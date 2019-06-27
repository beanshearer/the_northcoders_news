import React from "react";
import { Link } from "@reach/router";

const ArticleList = ({ articles }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Date</th>
          <th>Topic</th>
          <th>Likes</th>
        </tr>
        {articles.map(
          ({ article_id, author, title, created_at, topic, votes }) => {
            return (
              <tr key={article_id}>
                <td>
                  <Link to={`/articles/${article_id}`}>{author}</Link>
                </td>
                <td>
                  <Link key={article_id} to={`/articles/${article_id}`}>
                    {title}
                  </Link>
                </td>
                <td>{created_at.substring(0, 10)}</td>
                <td>{topic}</td>
                <td>{votes}</td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
};

export default ArticleList;
