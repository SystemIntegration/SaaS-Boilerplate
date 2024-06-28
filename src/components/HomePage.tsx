'use client';

import Head from 'next/head';
import React, { useEffect, useState } from 'react';

interface Card {
  title: string;
  id: string;
  owner: string;
  channel: string[];
}

const tags = [
  'Design',
  'Development',
  'Productivity',
  'Entrepreneurship',
  'Technology',
];

const HomePage: React.FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const [cards, setCards] = useState<Card[]>([]);

  const handleInput = (value: string) => {
    const validUrl =
      /^(https:\/\/www\.dailymotion\.com|https:\/\/vimeo\.com)\//;
    if (!validUrl.test(value)) {
      setInputVal(`Wrong URL enter... Please check it.`);
    } else {
      setInputVal(`${value}`);
    }
  };

  const getRandomUrl = (value: number): string => {
    return `https://picsum.photos/1000?random=${value}`;
  };

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `https://api.dailymotion.com/videos?search=web+development&limit=9`,
        ); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        const data = await response.json();
        setCards(data?.list);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div style={{ justifyItems: 'center', display: 'inline' }}>
      <Head>
        <title>Discover the Best Content</title>
        <meta
          name="description"
          content="Explore a curated collection of the latest and greatest articles, tutorials, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>Discover the Best Content</h1>
        <p>
          Explore a curated collection of the latest and greatest articles,
          tutorials, and more.
        </p>
        <input
          type="text"
          placeholder="Enter url"
          className="input"
          onChange={(e) => handleInput(e.target.value)}
        />
        <input
          type="submit"
          value="Submit"
          className="submit"
          onClick={() => alert(inputVal)}
        />
      </header>
      <div className="tags-container">
        {tags.map((tag) => (
          <div key={tag} className="tag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="m-2"
            >
              <path
                fill="black"
                d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5"
              />
            </svg>
            {tag}
          </div>
        ))}
      </div>
      <div
        className="cards"
        style={{ marginLeft: '50px', marginRight: '50px' }}
      >
        {cards?.map((card, index) => (
          <div key={card.id} className="card">
            <div>
              <img
                src={getRandomUrl(index)}
                alt={card.title}
                className="cardImage"
              />
            </div>
            <div style={{ marginLeft: '10px' }}>
              <h3>{card.title}</h3>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'baseline',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'baseline',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    className="m-2"
                  >
                    <path
                      fill="black"
                      d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"
                    />
                  </svg>{' '}
                  {card.owner}{' '}
                </div>
                <div
                  className="ml-4"
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'baseline',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 1024 1024"
                    className="m-2"
                  >
                    <path
                      fill="black"
                      d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160"
                    />
                  </svg>{' '}
                  {card.id} Views
                </div>
              </div>
              <p>{card.title}</p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {Array.from(
                  { length: Math.floor(Math.random() * (4 - 2 + 1)) + 1 },
                  () => card.channel,
                ).map((d) => (
                  <div
                    key={Math.random() * 10}
                    className="cardTag"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      className="m-2"
                    >
                      <path
                        fill="black"
                        d="m21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9A2 2 0 0 0 13 22a2 2 0 0 0 1.41-.59l7-7A2 2 0 0 0 22 13a2 2 0 0 0-.59-1.42M13 20l-9-9V4h7l9 9M6.5 5A1.5 1.5 0 1 1 5 6.5A1.5 1.5 0 0 1 6.5 5"
                      />
                    </svg>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
