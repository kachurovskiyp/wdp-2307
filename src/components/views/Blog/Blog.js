import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.container}>
          <div className={styles.posts}>
            <div className={styles.post}>
              <h3>Post 1</h3>
              <div className={styles.postImage}>
                <img src='/images/Blog/bloog.jpg' alt='Obrazek posta' />
                <div className={styles.postOverlay}>
                  <div className={styles.postInfo}>
                    <FontAwesomeIcon icon={faUser} />
                    <p>Marcin</p>
                    <FontAwesomeIcon icon={faCalendar} />
                    <p>Data dodania: 10-08-2023</p>
                    <p>Last update: 15-08-2023</p>
                  </div>
                  <div className={styles.postButton}>
                    <a href='#'>Read more</a>
                  </div>
                </div>
              </div>
              <div className={styles.postContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
                  mauris mattis, vulputate elit in, volutpat metus. Donec ullamcorper,
                  justo ac efficitur lacinia, massa orci malesuada enim, at eleifend
                  neque mauris id enim.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.widget}>
              <h2>Recent Posts</h2>
              <ul>
                <li>
                  <a href='#'>Post 1</a>
                </li>
                <li>
                  <a href='#'>Post 2</a>
                </li>
                <li>
                  <a href='#'>Post 3</a>
                </li>
                <li>
                  <a href='#'>Post 4</a>
                </li>
              </ul>
            </div>

            <div className={styles.widget}>
              <h2>Recent Comments</h2>
              <ul>
                <li>
                  <a href='#'>Comment 1</a>
                </li>
                <li>
                  <a href='#'>Comment 2</a>
                </li>
                <li>
                  <a href='#'>Comment 3</a>
                </li>
              </ul>
            </div>

            <div className={styles.widget}>
              <h2>Categories</h2>
              <ul>
                <li>
                  <a href='#'>Category 1</a>
                </li>
                <li>
                  <a href='#'>Category 2</a>
                </li>
                <li>
                  <a href='#'>Category 3</a>
                </li>
              </ul>
            </div>
            <div className={styles.widget}>
              <h2>Archives</h2>
              <ul>
                <li>
                  <a href='#'>June 2023</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
